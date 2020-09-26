// Slice method
var fruits = ["Banana", "Orange", "Lemon", "Apple", "Mango"];
document.getElementById("demo1").innerHTML = "Parent array: " + "<br>" + fruits;
var citrus = fruits.slice(1);
document.getElementById("demo2").innerHTML = "Sliced array:" + "<br>" + citrus;

// Sorting Method
var carNames = ["Tata", "BMW", "Toyota", "Honda"];
document.getElementById("demo3").innerHTML = carNames;
function sortCarNames() {
	carNames.sort();
	document.getElementById("demo3").innerHTML = carNames;
}

// Reversing an Array
var houseItems = [
	"Rugs",
	"Washing Machine",
	"Cooking Utensils",
	"Cleaning Stick",
	"Standing Fan",
];
document.getElementById("demo4").innerHTML = houseItems;
function reverseHouseItems() {
	houseItems.reverse();
	document.getElementById("demo4").innerHTML = houseItems;
}

// Numeric Sort
var sortNumbers = [40, 100, 1, 5, 25, 10];
document.getElementById("demo5").innerHTML = sortNumbers;
function sortAscending(a, b) {
	sortNumbers.sort(function (a, b) {
		return a - b;
	});
	document.getElementById("demo5").innerHTML = sortNumbers;
}
