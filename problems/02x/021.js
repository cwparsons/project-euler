/**
 * problems/02x/021.js
 * Amicable numbers
 */

var util = require('../util.js');

module.exports = function (limit) {
	var sum = 0;

	// Loop through all the numbers
	for (var a = 1; a < limit; a++) {
		var b = util.sumOfProperDivisors(a);

		if (a !== b) {
			var db = util.sumOfProperDivisors(b);

			if (a === db) {
				// Don't add b as to not double count
				sum += a;
			}
		}
	}

	return sum;
};
