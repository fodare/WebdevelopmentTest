import React from "react";
import ReactDOM from "react-dom";
import Card from "./components/Card";

ReactDOM.render(
   <div>
      <h1>My Contacts</h1>
      <Card
         name="Beyonce"
         img="https://blackhistorywall.files.wordpress.com/2010/02/picture-device-independent-bitmap-119.jpg"
         tel="+123, 456"
         email="b@yonce.com"
      />

      <Card
         name="Jack Bauer"
         img="https://pbs.twimg.com/profile_images/625247595825246208/X3XLea04_400x400.jpg"
         tel="+12340465"
         email="Jack@bauer.com"
      />

      <Card
         name="Chuck Norris"
         img="https://i.pinimg.com/originals/e3/94/47/e39447de921955826b1e498ccf9a39af.png"
         tel="+1234501"
         email="chuckisNorries@gmail.com"
      />

      <Card
         name="Damilare Olatunbosun"
         img="https://avatars.githubusercontent.com/u/41299452?v=4"
         tel="+49-12343545"
         email="jibrilisaboy@gmail.com"
      />
   </div>,
   document.getElementById("root")
);
