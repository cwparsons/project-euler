/**
 * problems/03x/033.js
 * Digit cancelling fractions
 */

var util = require('../util.js');

// Find the greatest commond denominator
function gcd(a, b) {
	return b ? gcd(b, a % b) : a;
}

// Reduce a fraction to the smallest common denominator
function reduce(num, den) {
	d = gcd(num, den);

	return [num / d, den / d];
}

module.exports = function (digits) {
	var num,
		den,
		nums = [],
		dens = [];

	// Loop through all possible nums
	for (var n = 10; n < Math.pow(10, digits); n++) {
		num = util.splitInteger(n);

		// Loop through all possible den. Can start at i since
		// j < i would be greater than 1.
		for (var d = n + 1; d < Math.pow(10, digits); d++) {
			var quotient = 0;

			den = util.splitInteger(d);

			if (den[0] !== 0 && den[0] === num[0]) {
				quotient = num[1] / den[1];
			} else if (den[0] !== 0 && den[0] === num[1]) {
				quotient = num[0] / den[1];
			} else if (den[1] !== 0 && den[1] === num[0]) {
				quotient = num[1] / den[0];
			} else if (den[1] !== 0 && den[1] === num[1]) {
				quotient = num[0] / den[0];
			}

			if (quotient === n / d) {
				nums.push(n);
				dens.push(d);

				// console.log(num, den, n / d, quotient);
			}
		}
	}

	num = nums.reduce(function (previous, n) { return previous * n; }, 1);
	den = dens.reduce(function (previous, d) { return previous * d; }, 1);

	return reduce(num, den)[1];
};
