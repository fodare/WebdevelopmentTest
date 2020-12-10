// Require Express
const express = require("express");

// Body-Parser so we can get data from what was submitted
const bodyParser = require("body-parser");

// App using the express module
const app = express();
app.use(bodyParser.urlencoded({ extended: true }));
const port = 3000;

//Port and Server start
app.listen(port, function () {
   console.log(`Server running on port ${port}`);
});

// Get Home Route
app.get("/", function (req, res) {
   // Get the directory name and append the target file to it
   res.sendFile(__dirname + "/index.html");
});

// Post Home route
app.post("/", function (req, res) {
   var value1 = req.body.num1;
   var value2 = req.body.num2;
   var result = value1 * value2;
   res.send(`Thanks for posting that your answe is ${result}`);
});
