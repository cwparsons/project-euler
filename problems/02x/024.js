/**
 * problems/02x/024.js
 * Lexicographic permutations
 */

var util = require('../util.js');

module.exports = function (n) {
	var values = [];

	// Create strings
	for (var i = 0; i <= 9; i++) {
		values.push(i.toString());
	}

	var permutations = util.permutate(values);

	if (permutations.length >= n) {
		return permutations[n - 1];
	}
};
