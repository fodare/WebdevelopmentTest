const express = require("express");
const { write } = require("fs");
const bodyParser = require("body-parser");
const https = require("https"); // For making a https request
const request = require("request");

const app = express();
app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", function (req, res) {
   res.sendFile(__dirname + "/index.html");
});

app.post("/", function (req, res) {
   const query = req.body.cityName;
   const appkey = "299f3fff0394893846ae1fe3432ca3f7";
   const mearsurement = "metric";
   const url =
      "https://api.openweathermap.org/data/2.5/weather?q=" +
      query +
      "&appid=" +
      appkey +
      "&units=" +
      mearsurement;

   https.get(url, function (response) {
      console.log(response.statusCode);

      response.on("data", function (data) {
         weather_data = JSON.parse(data);
         temp = weather_data.main.temp;
         weatherDescription = weather_data.weather[0].description;
         const weatherIcon = weather_data.weather[0].icon;
         const imageURL =
            "http://openweathermap.org/img/wn/" + weatherIcon + "@2x.png";

         res.write(
            `<h1>The weather description in ${query} is: ${weatherDescription}</h1>`
         );
         res.write(
            `<h1>The temprature in ${query}, DE is ${temp} degree(s)</h1>`
         );
         res.write("<img src= " + imageURL + ">");
         res.send();
      });
   });
});

app.listen(3000, function () {
   console.log("App running on port 3000");
});
