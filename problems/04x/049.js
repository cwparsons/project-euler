/**
 * problems/04x/049.js
 * Prime permutations
 */

var util = require('../util.js');

function toSortedString(n) {
	return n.toString().split('').sort().join('');
}

module.exports = function (size) {
	var sieve = util.createSieve(Math.pow(10, size)),
		primes = [];

	// Create a special prime list that starts at 1000
	for (var i = 1000; i < sieve.length; i++) {
		if (sieve[i]) {
			primes.push(i);
		}
	}

	var sequences = [];

	// Loop through all prime numbers from 1000 <= i <= 9998
	for (var i = 0; i < primes.length - 1; i++) {
		// Loop through all prime numbers from i < j <= 9999
		for (var j = i + 1; j < primes.length; j++) {
			// Check to see if there is a sequence that can be made
			var difference = primes[j] - primes[i];

			if (sieve[primes[j] + difference]) {
				var sorted = toSortedString(primes[i]);

				// Compare a sorted string to the first prime
				if (sorted === toSortedString(primes[j]) &&
					sorted === toSortedString(primes[j] + difference)) {
					sequences.push([primes[i], primes[j], primes[j] + difference]);
				}
			}
		}
	}

	// Skip the first one, since it was mentioned in the example
	return sequences[1].join('');
};