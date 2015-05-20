/**
 * problems/05x/053.js
 * Combinatoric selections
 */

var util = require('../util.js');

module.exports = function (limit) {
	var value = 0;

	// Loop through the values of `n`
	for (var n = 0; n <= limit; n++) {
		// Loop through the values of `r`
		for (var r = 0; r <= n; r++) {
			if (util.nCr(n, r) > 1000000) {
				value++;
			}
		}
	}

	return value;
};
