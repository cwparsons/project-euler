/**
 * problems/04x/042.js
 * Coded triangle numbers
 */

var util = require('../util.js');

function createTriangleNumberList (limit) {
	var list = [];

	for (var n = 0; n < limit; n++) {
		list.push(0.5 * n * (n + 1));
	}

	return list;
}

function isTrinagleNumber (list, n) {
	return list.indexOf(n) > -1;
}

function sumOfLetterPositions (word) {
	return word.split('')
		.map(util.getLetterPosition)
		.reduce(function (previous, position) {
			return previous + position;
		});
}

module.exports = function (filename) {
	var file = require('./' + filename);

	// Rough limit of the triangle number list
	// Size of alphabet * largest word * 2
	var limit = Math.sqrt(26 * 20 * 2);
	var triangleNumbers = createTriangleNumberList(limit);

	var words = file
		.map(sumOfLetterPositions)
		.map(function (n) {
			return isTrinagleNumber(triangleNumbers, n);
		})
		.filter(function (truth) {
			return truth
		});

	return words.length;
};
