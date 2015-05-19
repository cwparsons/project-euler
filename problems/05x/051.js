/**
 * problems/05x/051.js
 * Prime digit replacements
 */

var util = require('../util.js');

/**
 * possiblePrimes returns all primes that can go into an integer
 * with wildcards
 * @param  {Integer} The integer with wildcard spots
 * @param  {Array}   An array of booleans to determine primes
 * @return {Array}   An array of prime numbers
 */
function possiblePrimes (n, sieve) {
	var primes = [];

	for (var i = 0; i <= 9; i++) {
		var candidate = n.replace(/\*/g, i);

		if (sieve[candidate]) {
			primes.push(candidate);
		} else if (i > 2 && primes.length === 0) {
			// If i > 2 but there are 0 primes, there must be less
			// than eight primes left
			return [];
		}

	}

	return primes;
}

/**
 * replaceDigits returns each combination of a number with wildcard
 * positions
 * @param  {Integer} The integer to add wildcards to
 * @return {Array}   An array of integers with wildcards
 */
function replaceDigits (n) {
	var combinations = [],
		string = n.toString().split('');

	// One digit replacements
	for (var i = 0; i < string.length; i++) {
		var combination = string.slice();
		combination[i] = '*';
		combinations.push(combination.join(''));
	}

	// Two digit replacements
	for (var i = 0; i < string.length - 1; i++) {
		for (var j = i + 1; j < string.length; j++) {
			var combination = string.slice();
			combination[i] = '*';
			combination[j] = '*';
			combinations.push(combination.join(''));
		}
	}

	// Three digit replacements
	for (var i = 0; i < string.length - 1; i++) {
		for (var j = i + 1; j < string.length; j++) {
			for (var k = j + i + 1; k < string.length; k++) {
				var combination = string.slice();
				combination[i] = '*';
				combination[j] = '*';
				combination[k] = '*';
				combinations.push(combination.join(''));
			}
		}
	}

	// 4+ digit replacements not necessary

	return combinations;
}

module.exports = function (limit) {
	var sieve = util.createSieve(125000 * 10),
		checks = {};

	// Loop through all numbers
	for (var i = 0; i < sieve.length; i++) {
		// Get their replacements
		var results = replaceDigits(i);

		// Loop through all digit replacements
		for (var j = 0; j < results.length; j++) {
			var n = results[j];

			// Check to see if we're done it before
			if (!checks[n]) {
				// Break when we find the first number
				if (possiblePrimes(n, sieve).length === limit) {
					return possiblePrimes(n, sieve)[0];
				}

				checks[n] = true;
			}
		}
	}

	return [];
};
