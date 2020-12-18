const express = require("express");
const https = require("https");
const bodyParser = require("body-parser");

const app = express();
app.use(bodyParser.urlencoded({ extended: true }));

app.listen(3000, function (req, res) {
   console.log("Server running on port 3000");
});

app.get("/", function (req, res) {
   res.sendFile(__dirname + "/index.html");
});

app.post("/", function (req, res) {
   console.log(req.body.cityName);
   const query = req.body.cityName;
   const appid = "9fac45b09a2608590fb6c4e5a746dbbe";
   const units = "metric";
   const url =
      "https://api.openweathermap.org/data/2.5/weather?q=" +
      query +
      "&appid=" +
      appid +
      "&units= " +
      units +
      "";
   https.get(url, function (response) {
      console.log(response.statusCode);
      console.log(response.statusMessage);
      response.on("data", function (data) {
         const weather_data = JSON.parse(data);
         const temp = weather_data.main.temp;
         const description = weather_data.weather[0].description;
         res.write(`<h1>The temprature in ${query} is: ${temp}</h1>`);
         res.write(`<h2>The weather description is ${description}</h2>`);
         res.send();
      });
   });
   console.log("Post request Received");
});
