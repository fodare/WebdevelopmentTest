function bmiCalculator(weight, height) {
	var bmi = weight / Math.pow(height, 2);
	return Math.round(bmi);
}

var result = bmiCalculator(65, 1.9);
console.log(result);
