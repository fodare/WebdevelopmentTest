const mongoose = require('mongoose');


// Connect to mongodb and create a bookdb
mongoose.connect("mongodb://localhost:27017/booksdb", {useNewUrlParser:true});

// Create database Schema
const bookSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "Field name is missing from the entry!"]
    },

    rating: {
        type: Number,
        min: 1,
        max: 5,
        required:[true, "Field review is missing from the entry!"]
    },

    review: {
        type: String,
        required:[true, "Field review is missing from the entry!"]
    }
});

// Create the collections
const Book = mongoose.model("Book", bookSchema)


// Create a document inside the collections
const fiction = new Book({
    name: "Fiction Fantansy",
    rating: 4,
    review: "Good book foe people who like to think"
});

const programming = new Book({
    name: "Programming",
    rating: 5,
    review: "Books to read to learn how to code!"
});

const trade = new Book({
    name: "Trade",
    rating: 5,
    review: "Books to read to learn how to code!"
});


// Book.insertMany([trade], function(err){
//     if (err){
//         console.log(err)
//     } else {
//         console.log("Data successfully added!");
//     }
// });

// Update data in the database
Book.updateOne({rating:4}, {review:"Good book for people who like to think!"}, function(err){
    if (err){
        console.log(err);
    } else {
        console.log("Data sucessfully updated!");
    }
});

// Reading from a collection
Book.find(function(err, books){
    if(err){
        console.log(err);
    } else {
        mongoose.connection.close();
        books.forEach(function(book){
            console.log(book.name);
        });
    }
});


// Delete from a collection
Book.deleteOne({_id:"60290658456989c2f3507f7b"}, function(err){
    if (err){
        console.log(err);
    } else {
        console.log("Data successfully deleted!");
    }
});