function fibonacciGenerator(n) {
	var output = [];

	if (output === 1) {
		output = [0];
	} else if (output === 2) {
		output = [0, 1];
	} else {
		output = [0, 1];

		for (var i = 2; i < n; i++) {
			output.push(output[output.length - 2] + output[output.length - 1]);
		}
	}
	return output;
}
