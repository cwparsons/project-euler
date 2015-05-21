/**
 * problems/05x/056.js
 * Powerful digit sum
 */

var bigInt = require('big-integer');

function digitalSum (n) {
	return n.toString().split('').reduce(function (previous, n) {
		return previous + parseInt(n, 10);
	}, 0);
}

module.exports = function (limit) {
	var maximumDigitalSum = 0;

	// Loop through a^b
	for (var a = 1; a < limit; a++) {
		for (var b = 1; b < limit; b++) {
			var n = bigInt(a).pow(b);

			if (digitalSum(n) > maximumDigitalSum) {
				maximumDigitalSum = digitalSum(n);
			}
		}
	}

	return maximumDigitalSum;
};
