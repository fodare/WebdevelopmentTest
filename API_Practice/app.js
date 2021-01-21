const express = require("express");
const https = require("https"); // For making a https request

const app = express();

app.get("/", function (req, res) {
   const url =
      "https://newsapi.org/v2/top-headlines?country=de&pageSize=20&apikey=035eeec1dcf04686baf46df318753c67";
   https.get(url, function (response) {
      console.log(response.statusCode);
      response.on("data", function (data) {
         newsData = JSON.parse(data);
         console.log(newsData);
      });
   });

   res.send("Server up and running");
});

app.listen(3000, function () {
   console.log("App running on port 3000");
});
