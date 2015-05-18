/**
 * problems/00x/003.js
 * Largest prime factor
 */

var util = require('../util.js');

module.exports = function (prime) {
	// Find the largest factor
	var largestFactor = Math.ceil(Math.sqrt(prime)),
		sieve = util.createSieve(largestFactor);

	return sieve.reduce(function (previous, element, index) {
		return element && prime % index === 0 ? index : previous;
	}, 2);
};
