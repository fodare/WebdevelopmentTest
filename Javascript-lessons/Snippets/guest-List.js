function welcomeNote() {
	var guestList = ["Damilare", "Rita", "CandyRose", "Atinuke"];

	var guestName = prompt("What is yoour name: ");

	if (guestList.includes(guestName)) {
		alert("Welcome home !");
	} else {
		alert("Meeh, you do not belong here");
	}
}

console.log(welcomeNote());
