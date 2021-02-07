const express = require("express");
const bodyParser = require("body-parser");
const ejs = require("ejs");
const _ = require("lodash");

const homeStartingContent = "Hello, I am Damilare. I am a junior IT Operations manager. I Love building beautiful web websites and intersting web applications.";

const aboutContent = 'This blog is created to document some of my projects and some of my up-coming projects';

const contactContent = 'I work with diffrent teams and have worked on various projects. If you did like my  help with a project,'
"Please fill the application below and i shall get back to you as soon as possible!";


const app = express();
app.set("view engine", "ejs");
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));


// ********** Variables ********** //

let posts = [];
let emailbloks = [];

// ********** GET Requests ********** //

app.get("/", function(req, res){
    res.render("home", {
        homeMessage: homeStartingContent,
        latestPosts:posts,
    })
});

app.get("/about", function(req, res){
    res.render("about", {
        aboutMessage:aboutContent,
    })
});

app.get("/compose", function(req, res){
    res.render("compose");
});

app.get("/contact", function(req, res){
    res.render("contact", {
        contactMessage: contactContent,
        emaillists: emailbloks,
    })
});

app.get("/post/:userId", function(req, res){
    const requstTile = _.lowerCase(req.params.userId);

    posts.forEach(function(post){
        storedTitle = _.lowerCase(post.postRequesttitle);

        if(storedTitle === requstTile){
            res.render("post", {
                title: post.postRequesttitle,
                body: post.postRequestBody,
            });
        }
    });
})


// ********** POST Requests ********** //

app.post("/compose", function(req, res){
    const postRequest = {
        postRequesttitle : req.body.title,
        postRequestBody: req.body.body
    };
    posts.push(postRequest);
    res.redirect("/");
});

app.post("/contact", function(req, res){
    const message = {
        eAddress: req.body.contactEmail,
        msg: req.body.contactMessage,
    }
    emailbloks.push(message.eAddress);
    console.log(emailbloks);
    res.redirect("contact");

})

// ********** LISTEN Requests ********** //

app.listen(3000, function(){
    console.log("App running on port 3000");
})