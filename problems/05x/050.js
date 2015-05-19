/**
 * problems/05x/050.js
 * Consecutive prime sum
 */

var util = require('../util.js');

module.exports = function (limit) {
	var sieve = util.createSieve(limit),
		primeSums = [0],
		length = 0,
		prime = 0;

	// Create a list of prime sums to loop through
	for (var i = 0; i < sieve.length; i++) {
		// If prime, and their sum is less than our limit
		if (sieve[i] && primeSums[primeSums.length - 1] < limit) {
			primeSums.push(primeSums[primeSums.length - 1] + i);
		}
	}

	// Loop through the lower bound of our prime sums
	for (var i = 0; i < primeSums.length; i++) {
		// Loop through the upper bound of our prime sums
		for (var j = primeSums.length - 1; j > i; j--) {
			// If the difference is prime
			if (sieve[primeSums[j] - primeSums[i]]) {
				// And the length is longer than previous
				if (length < j - i) {
					length = j - i;
					prime = primeSums[j] - primeSums[i];
				}
			}
		}
	}

	return prime;
};
