/**
 * problems/02x/029.js
 * Distinct powers
 */

var bigInt = require('big-integer');

function sortBy (a, b) {
	return a - b;
}

function filterBy (item, index, array) {
	return !index || bigInt(item).notEquals(array[index - 1]);
}

module.exports = function (size) {
	var sequence = [];

	size = parseInt(size, 10);

	// Create each element
	for (var a = 2; a <= size; a++) {
		for (var b = 2; b <= size; b++) {
			sequence.push(bigInt(a).pow(b));
		}
	}

	sequence = sequence.sort(sortBy).filter(filterBy);

	return sequence.length;
};
