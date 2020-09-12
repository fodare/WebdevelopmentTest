function bottlesOnWalls() {
	var numberOfBottles = 99;

	while (numberOfBottles >= 0) {
		var bottleWorld = "bottle";
		if (bottleWorld === 1) {
			bottleWorld = "bottles";
		}
		console.log(numberOfBottles + " " + bottleWorld + " of beer on the wall");
		console.log(numberOfBottles + " " + bottleWorld + " of beer");
		console.log("Take one down, pass it around");
		numberOfBottles--;
		console.log(numberOfBottles + " " + bottleWorld + " ob beer on the wall");
	}
}
