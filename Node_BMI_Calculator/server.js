const express = require("express");
const bodyParser = require("body-parser");

const app = express();
app.use(bodyParser.urlencoded({ extended: true }));

app.listen(3000, function () {
   console.log(`Server running on port 3000`);
});

// Home route
app.get("/", function (req, res) {
   res.send("<h1>Welcome to my Simple BMI Calculator</h1>");
});

app.get("/bmicalculator", function (req, res) {
   res.sendFile(__dirname + "/bmiCalculator.html");
});

app.post("/bmicalculator", function (req, res) {
   var weight = parseFloat(req.body.weight);
   var height = parseFloat(req.body.height);
   var final_bmi = weight / (height * height);
   res.send(`You BMI is ${final_bmi}`);
});
