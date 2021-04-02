// CHALLENGE: uncomment the code below and see the car stats rendered
import React, { useState } from "react";
import ReactDOM from "react-dom";
import cars from "./practice";
import animals from "./data";

// Destructure the Cars array into 2
const [honda, tesla] = cars;

const {
   speedStats: { topSpeed: hondaTopSpeed },
} = honda;

const {
   speedStats: { topSpeed: teslaTopSpeed },
} = tesla;

const {
   coloursByPopularity: [hondaTopColour],
} = honda;
const {
   coloursByPopularity: [teslaTopColour],
} = tesla;

ReactDOM.render(
   <table>
      <tr>
         <th>Brand</th>
         <th>Top Speed</th>
         <th>Top Color</th>
      </tr>
      <tr>
         <td>{tesla.model}</td>
         <td>{teslaTopSpeed}</td>
         <td>{teslaTopColour}</td>
      </tr>
      <tr>
         <td>{honda.model}</td>
         <td>{hondaTopSpeed}</td>
         <td>{hondaTopColour}</td>
      </tr>
   </table>,
   document.getElementById("root")
);

// // Destructuring an Array
// const [cat, dog] = animals;
// console.log(cat);

// // Destructuring an Object
// // const { name: catName, sound: CatSound } = cat;
// // console.log(CatSound);

// // Destructuring an Array with nested Objects
// const {
//    name,
//    sound,
//    feedingRequirements: { food, water },
// } = dog;
// console.log(food);
