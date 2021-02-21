// Required bodies

const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));

// Connection to the local mongoDB Server
mongoose.connect("mongodb://localhost:27017/jokesAPI", {useNewUrlParser:true});

// Create database Schema
const JokeSchema = {
    title: String,
    content: String,
    author: String
};

// Create model / collection in the Databsae
const Joke = mongoose.model("Joke", JokeSchema);

//////////// Request for all articles ////////////

app.route("/jokes")
    .get(function(req, res){
        // Will return a random joke from the collection
        Joke.aggregate([{$sample:{size: 2}}],function(err, foundJokes){
            if (!err){
                res.send(foundJokes);
            } else {
                res.send(err);
            }
        });
    })

    .post(function(req, res){
        const newJoke = new Joke({
            title: req.body.title,
            content: req.body.content,
            author: req.body.author
        });

        newJoke.save(function(err){
            if (!err){
                res.send("New Joke succcessfully added!");
            } else {
                res.send(err);
            }
        });
    });


//////////// Request for specific jokes ////////////
app.route("/jokes/:jokeTitle")
    .get(function(req, res){
        Joke.findOne({title:req.params.jokeTitle}, function(err, foundJoke){
            if(foundJoke){
                res.send(foundJoke);
            } else {
                res.send("There are no jokes with the specified name!");
            }
        });
    })

    .patch(function(req, res){
        Joke.updateOne(
            {title: req.params.jokeTitle},
            {$set: {content: req.body.content}},
            function(err){
                if (!err){
                    res.send("Content successfully updated!");
                } else {
                    res.send(err);
                }
            }
            );
    })

    .delete(function(req, res){
        Joke.findByIdAndDelete({_id: req.body._id}, function(err){
            if (!err){
                res.send("Joke successfully deleted!");
            } else {
                res.send(err);
            }
        });

    });

// Listening Port
app.listen(3000, function(){
    console.log("Server running on port 3000!");
});