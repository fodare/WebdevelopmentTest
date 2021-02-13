const mongoose = require('mongoose');

// Conection to the Mongodb database URL
// connect to the mongodb database through localport then look for the fruits db or create if not found.
// The useNewUrlPArser is for fixing the depercation warning
mongoose.connect("mongodb://localhost:27017/fruitsDB", {useNewUrlParser:true}); 


// Create database Schema
const fruitSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "Field name is missing from the entry!"]
    },
    rating: {
        type:Number,
        min: 0,
        max: 10
    },
    review: {
        type: String,
        required: [true, "Feild review is missing from the entry!"]
    }
});

// Create a collection which conforms to the databaseSchema
const Fruit = mongoose.model("Fruit", fruitSchema);

// Create a new document inside the collections
const banana = new Fruit({
    name: "Banana",
    rating: 7,
    review: "Really nice and tasty fruit"
});

const apple = new Fruit({
    name: "Apple",
    rating: 10,
    review: "Keeps the Doctor away"
});

const cheery = new Fruit({
    name: "Cherry",
    rating: 6,
    review: "Fancy drink for Dinner"
});

const orange = new Fruit({
    name: "Orange",
    rating: 9,
    review: "Very Good vitamin source"
});

// Fruit.insertMany([apple, cheery, orange],  function(err){


//     if (err){
//         console.log(err);
//     } else {
//         console.log("Successfully added the entries!");
//     }
// });


// Person Schema

const personSchema = new mongoose.Schema({
    name: String,
    age: Number
});

const Person = mongoose.model("Person", personSchema)

const p1 = new Person({
    name: "Damilare",
    age: 26
});

const p2 = new Person({
    name: "Olatunbosun",
    age: 27
});

const p3 = new Person({
    name: "Daniel",
    age: 28
});

// Person.insertMany([p1, p2, p3], function(err){
//     if (err){
//         console.log(err);
//     } else {
//         console.log("Successfully added entries!");
//     }
// })


// Reading from the database
Fruit.find(function(err, fruits){
    if (err){
        console.log(err);
    } else {
        mongoose.connection.close();
        fruits.forEach(function(fruit){
            console.log(fruit.name);
        });
    }
});

// Updating database
// Fruit.updateOne({name:"Orange"}, {review:"Good source of Vitamin C!"}, function(err){
//     if (err){
//         console.log(err);
//     } else {
//         console.log("Data udapated successfully!");
//     }
// });

// Delete from the database
Fruit.deleteOne({name:"Cherry"}, function(err){
    if (err){
        console.log(err);
    } else {
        console.log("Data deleted successfully!");
    }
});