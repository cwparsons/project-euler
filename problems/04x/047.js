/**
 * problems/04x/047.js
 * Distinct primes factors
 */

var util = require('../util.js');

function getPrimeFactors (n, primes) {
	var primeFactors = [];

	// While our remainder is still divisible
	for (var remainder = n; remainder > 1;) {
		// Loop through all of our prime numbers
		for (var i = 0; i < primes.length;) {
			// If a prime number is a factor, and it is not the original
			// number add it to our factor list
			if (remainder % primes[i] === 0) {
				remainder /= primes[i];
				primeFactors.push(primes[i]);
			} else if (remainder === 1) {
				// Base case, completion
				return primeFactors;
			} else if (Math.ceil(n / 2) <= primes[i]) {
				// If the primes are now larger than the original number, we
				// have run out of factors to try
				return [];
			} else {
				// Only increment the prime list when we have made sure there
				// are no more repeating prime factors
				i++;
			}
		}
	}

	return primeFactors;
}

function removeDuplicates (item, index, array) {
	return !index || item !== array[index - 1];
}

module.exports = function (consecutiveNumbers) {
	var primes = util.createPrimeList(Math.pow(10, consecutiveNumbers + 2)),
		distinct = true,
		consective = 0;

	for (var i = 4; consective < consecutiveNumbers; i++) {
		if (getPrimeFactors(i, primes).filter(removeDuplicates).length === consecutiveNumbers) {
			consective++;
		} else {
			consective = 0;
		}
	}

	return i - consecutiveNumbers;
};
