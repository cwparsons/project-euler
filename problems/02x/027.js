/**
 * problems/02x/027.js
 * Quadratic primes
 */

var util = require('../util.js');

// Quadratic formula
function formula(n, a, b) {
	return (n * n) + (a * n) + b;
}

module.exports = function (limit) {
	var sieve = util.createSieve(limit),
		length = 0,
		longestA = 0,
		longestB = 0,
		primes = [];

	// Since the first value is n = 0, b must be prime.
	// Create a list of primes to use as b
	for (var i = 0; i <= sieve.length; i++) {
		if (sieve[i] && i <= limit) {
			primes.push(i);
			primes.push(i * -1);
		}
	}

	// Loop through all values of a
	for (var a = -1 * (limit) - 1; a < limit; a++) {
		// Loop through all primes less than 1000 for b
		for (var bIndex = 0; bIndex < primes.length; bIndex++) {
			var b = primes[bIndex];

			for (i = 0; sieve[formula(i, a, b)]; i++) {
				continue;
			}

			if (i > length) {
				length = i;
				longestA = a;
				longestB = b;
			}
		}
	}

	return longestA * longestB;
};
