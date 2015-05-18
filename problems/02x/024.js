/**
 * problems/02x/024.js
 * Lexicographic permutations
 */

var util = require('../util.js');

module.exports = function (n) {
	var set = [];

	for (var i = 0; i <= 9; i++) {
		set.push(i);
	}

	var remainder = n,
		values = [];

	for (var i = 9; i >= 0; i--) {
		var nFactorial = util.factorial(i);
		var divisor = Math.floor(remainder / nFactorial);;

		remainder = remainder % nFactorial;

		if (remainder <= 0 && divisor >= 0) {
			divisor--;
			remainder = nFactorial / divisor;
		}

		// Get the value from the remaining set of
		values.push(set[divisor]);

		// Remove the chosen element
		set.splice(divisor, 1);
	}

	return parseInt(values.join(''), 10);
};
