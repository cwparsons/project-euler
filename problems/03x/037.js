/**
 * problems/03x/037.js
 * Truncatable primes
 */

var util = require('../util.js');

module.exports = function (limit) {
	var sieve = util.createSieve(limit),
		primes = util.createPrimeList(sieve);

	// Find the truncatable primes
	var truncatablePrimes = primes.filter(function (prime) {
		var truth = prime > 10;

		prime = prime.toString();

		// Loop through the length of the number
		for (var i = 1; i < prime.length && truth; i++) {
			// Check to see if the first slice or last slices are primes
			truth = sieve[prime.slice(0, i)]
				&& sieve[prime.slice(prime.length - i, prime.length)];
		}

		return truth;
	});

	var sum = truncatablePrimes.reduce(function (previous, prime) {
		return previous + prime;
	}, 0);

	return sum;
};
