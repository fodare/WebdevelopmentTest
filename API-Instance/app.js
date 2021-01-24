const express = require("express");
const bodyParser = require("body-parser");
const https = require("https");

const app = express();
app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: true }));

// Get Request to the home route

app.get("/", function (req, res) {
   res.sendFile(__dirname + "/index.html");
});

// Post request to the home route
app.post("/", function (req, res) {
   const userQuery = req.body.search_query;
   const url = "https://api.adviceslip.com/advice/search/" + userQuery + "";
   console.log(userQuery);

   https.get(url, function (response) {
      console.log(response.statusCode);
      response.on("data", function (data) {
         adviceData = JSON.parse(data);
         advicebody = adviceData.slips[0].advice;
         res.send(`<h1>Random advice is: ${advicebody}</h1>`);
      });
   });
});

app.listen(3000, function () {
   console.log("Server running on port 3000");
});
