/**
 * 2.js
 * Even Fibonacci numbers
 */

module.exports = function (limit) {
	var FACTOR = 2;

	var sum = 0,
		a = 1,
		b = 2;

	// Loop to create next fibonacci number
	for (var c; b < limit; c = a + b, a = b, b = c) {
		// If the fibonacci number is even
		if (b % FACTOR === 0) {
			sum += b;
		}
	}

	return sum;
};
