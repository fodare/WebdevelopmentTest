var cheapColors = ["Blue"];
var userColor = prompt("What color would ypu like to submit: ");

function submitColor() {
	if (cheapColors.includes(userColor)) {
		alert("Your color has been added. Thank you!");
		cheapColors.push(userColor);
	} else {
		alert("Not present!");
	}

	cheapColors++;
	console.log(cheapColors);
}
