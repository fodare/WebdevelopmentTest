// // Generate random number between 0 - 0.9999999
// var n = Math.random();
// // Scale up the random number to a desired range.
// n = n * 6;
// // round down the rnage of value n to a whole number.
// n = Math.floor(n) + 1;
// // log the value of n to the console.
// console.log(n);

// Name of the first person
lover1 = prompt("Enter person 1 name: ");
console.log(lover1);
// Name of the second person
lover2 = prompt("Enter person 2 name: ");
console.log(lover2);

// Generate random number 
loveScore = Math.random();
loveScore = loveScore * 100;
loveScore = Math.floor(loveScore) + 1;
console.log(loveScore);
if (loveScore > 70){
    alert(`You guys are created for one-another. Your love Score is ${loveScore}`);
}else {
    alert(`You love score is ${loveScore}`);
}


// alert(`Your love score is ${loveScore} % chances of getting married!`);