/**
 * problems/06x/064.js
 * Odd period square roots
 */

function getPeriod (n) {
	var keys = {},
		a = Math.floor(Math.sqrt(n)),
		fraction = [1, -a],
		coefficient = 1,
		period = [a],
		sets = [];

	// Trial and error found that all periods are less than
	// 220
	for (var i = 1; i < 220; i++) {
		// Simplify, move square root to numerator
		fraction = [
			-fraction[1],
			n - Math.pow(-fraction[1], 2)
		];

		// Get the next number in the period
		a = Math.floor(coefficient * (Math.sqrt(n) + fraction[0]) / fraction[1]);
		period.push(a);

		// Collect data on each node to determine the period length
		var data = coefficient + ',' + fraction[0] + ',' + fraction[1];

		if (sets.indexOf(data) > -1) {
			break;
		} else {
			sets.push(data);
		}

		// Reduce the fraction
		fraction[1] = fraction[1] / coefficient;
		fraction[0] = fraction[0] - (a * fraction[1]);

		// Flip
		fraction = [fraction[1], fraction[0]];
		coefficient = fraction[0];
	}

	// Loop through our data to find the period
	return sets.length;
}

module.exports = function (limit) {
	var sequences = 0;

	// return getPeriod(limit);

	// Loop through each number
	for (var i = 2; i <= limit; i++) {
		// If it is not irrational but odd
		if (Math.sqrt(i) % 1 !== 0 && getPeriod(i) % 2 === 1) {
			sequences++;
		}
	}

	return sequences;
};
