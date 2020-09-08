// Using the JS Math.random(); method

var n = Math.random();
console.log(n); // Take the user names first
var userName1 = prompt("What is your name: ");
var userName2 = prompt("What is your cruch name: ");
// Store the names some where

//Generate a random number in percetage

var loveScore = Math.random();
loveScore = Math.floor(loveScore * 100);
// loveScore = Math.round(loveScore) /100;

//Give back the number to the user in form of alert
alert("Your chances of two of you meething is " + loveScore + " %");
