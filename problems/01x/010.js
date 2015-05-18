/**
 * problems/10.js
 * Summation of primes
 */

var util = require('../util.js');

module.exports = function (size) {
	var sieve = util.createSieve(size),
		sum = 0;

	return sieve.reduce(function (previous, prime, index) {
		return prime ? previous + index : previous;
	}, 0);
};
