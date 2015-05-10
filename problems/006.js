/**
 * 6.js
 * Sum square difference
 */

module.exports = function (limit) {
	var sum = 0,
		sumOfSquares = 0,
		squareOfSums,
		difference;

	for (var i = 1; i <= limit; i++) {
		sumOfSquares += Math.pow(i, 2);
		sum += i;
	}

	squareOfSums = Math.pow(sum, 2);

	difference = squareOfSums - sumOfSquares;

	return difference;
};
