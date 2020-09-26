// If time is less than 10:00, create a "Good morning" greeting, if not, but time is less than 20:00,
// create a "Good day" greeting, otherwise a "Good evening":
if (new Date() < 16) {
	document.getElementById("demo1").innerHTML = "Good Morning";
} else if (new Date() > 20) {
	document.getElementById("demo1").innerHTML = "Good Evening";
} else {
	document.getElementById("demo1").innerHTML = "Good day";
}
