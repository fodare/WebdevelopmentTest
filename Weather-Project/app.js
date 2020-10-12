const express = require ('express');
const https = require('https');
const bodyParser = require("body-parser");

const app = express();

app.use(bodyParser.urlencoded({extended: true}));

app.listen(3000, function(){
  console.log("Server running on port 3000");
});

// Home Page
// GET
app.get("/", function(req, res){
res.sendFile(__dirname+"/index.html");
});

app.post("/", function(req, res){
const query = req.body.cityName;
const apiKey = "9fac45b09a2608590fb6c4e5a746dbbe";
const unit = "metric";
const url = "https://api.openweathermap.org/data/2.5/weather?q=" + query + "&appid=" + apiKey + "&units="+ unit;

//Querry External API then get the message back.
https.get(url, function(response){
console.log(response.statusCode);
response.on("data", function(data){
   const weatherData = JSON.parse(data);
    const temp = weatherData.main.temp;
    const weatherDescription = weatherData.weather[0].description;
    const iconDisplay = weatherData.weather[0].icon;
    const imageURL = "http://openweathermap.org/img/wn/"+ iconDisplay +"@2x.png"
    res.write("<p>The Weather is currently " + weatherDescription + "</p>");
    res.write("<h1>The temperature in "+ query+" is " + temp + " degress  Celcius.</h1>");
    res.write("<img src="+ imageURL+ ">");
    res.send();
    console.log(temp);
    console.log(weatherDescription);
    console.log(iconDisplay);
  } );
});
})







// const query = "Tallinn";
// const apiKey = "9fac45b09a2608590fb6c4e5a746dbbe";
// const unit = "metric";
// const url = "https://api.openweathermap.org/data/2.5/weather?q=" + query + "&appid=" + apiKey + "&units="+ unit;
// https.get(url, function(response){
//   console.log(response.statusCode);
//   response.on("data", function(data){
//     const weatherData = JSON.parse(data);
//     const temp = weatherData.main.temp;
//     const weatherDescription = weatherData.weather[0].description;
//     const iconDisplay = weatherData.weather[0].icon;
//     const imageURL = "http://openweathermap.org/img/wn/"+ iconDisplay +"@2x.png"
//     res.write("<p>The Weather is currently " + weatherDescription + "</p>");
//     res.write("<h1>The temperature in Tallinn is " + temp + " degress  Celcius.</h1>");
//     res.write("<img src="+ imageURL+ ">");
//     res.send();
//     console.log(temp);
//     console.log(weatherDescription);
//     console.log(iconDisplay);
//   } );
// });