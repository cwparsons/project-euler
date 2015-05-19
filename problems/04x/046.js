/**
 * problems/04x/046.js
 * Goldbach's other conjecture
 */

var util = require('../util.js');

module.exports = function (limit) {
	var sieve = util.createSieve(limit),
		conjecture = true;

	// Loop through odd numbers
	for (var i = 9; conjecture; i += 2) {
		// Check to see if they're not prime (i.e. odd composite)
		if (!sieve[i]) {
			conjecture = false;

			// Loop through the squares backwards, since there are more smaller
			// primes
			for (var j = Math.ceil(Math.sqrt(i)); j >= 1; j--) {
				if (sieve[i - (2 * j * j)]) {
					conjecture = true;
					break;
				}
			}
		}
	}

	return i - 2;
};
