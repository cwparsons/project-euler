/**
 * problems/00x/001.js
 * Multiples of 3 and 5
 */

function isFactor (i, factor) {
	return i % factor === 0;
}

module.exports = function (limit) {
	var FACTORS = [3, 5];

	var multiples = [],
		sum = 0,
		i;

	for (var i = 1; i < limit; i++) {
		var factor = FACTORS.some(function (factor) {
			return isFactor(i, factor);
		});

		if (factor) {
			sum += i;
		}
	}

	return sum;
};
