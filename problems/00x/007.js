/**
 * problems/00x/007.js
 * 10001st prime
 */

var util = require('../util.js');

module.exports = function (nthPrime) {
	var i,
		size = 150000, // Math.pow(nthPrime, 2)
		sieve = util.createSieve(size),
		primeFactor = 0;

	// Loop through the sieve to get the nth prime
	for (i = 0; i <= sieve.length; i++) {
		if (sieve[i]) {
			nthPrime--;
		}

		if (nthPrime === 0) {
			break;
		}
	}

	return i;
};
