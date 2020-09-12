var guestList = ["Damilare", "Angela", "Rita"];

function addGuestList() {
	var userPrompt = prompt("What is your name: ");
	if (guestList.includes(userPrompt)) {
		alert("Your name is present in the guest list, so we are friends");
	} else {
		guestList.push(userPrompt);
		alert("Your name has been added to the guestList");
	}

	return guestList;
}
