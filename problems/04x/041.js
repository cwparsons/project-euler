/**
 * problems/04x/041.js
 * Pandigital prime
 */

var util = require('../util.js');

module.exports = function (limit) {
	var sieve = util.createSieve(Math.pow(10, limit)),
		primes = util.createPrimeList(sieve);

	return primes.reduce(function (previous, prime) {
		if (util.isPandigital(prime) && prime > previous) {
			return prime;
		} else {
			return previous;
		}
	}, 2);
};
