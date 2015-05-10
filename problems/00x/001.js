/**
 * problems/00x/001.js
 * Multiples of 3 and 5
 */

module.exports = function (limit) {
	var FACTORS = [3, 5];

	var multiples = [],
		sum = 0,
		i;

	function isFactor (factor) {
		return i % factor === 0;
	}

	for (i = 1; i < limit; i++) {
		var factor = FACTORS.some(isFactor);

		if (factor) {
			sum += i;
		}
	}

	return sum;
};
