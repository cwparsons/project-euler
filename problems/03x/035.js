/**
 * problems/03x/035.js
 * Circular primes
 */

var util = require('../util.js');

// Create a list of rotations
function getRotations (prime) {
	var digits = util.splitInteger(prime);

	return rotate(digits);
}

function isCircularPrime (previous, prime, sieve) {
	return previous && isPrime(prime, sieve);
}

function isPrime (n, sieve) {
	return sieve[parseInt(n, 10)];
}

function rotate (list) {
	var rotations = [];

	// Rotate through the list of elements
	for (var i = 0; i < list.length; i++) {
		var rotation = [];

		// Rotate through the indexes, and use the `mod`
		// function to loop back through the list
		for (var j = 0; j < list.length; j++) {
			rotation.push(list[(i + j) % list.length]);
		}

		rotations.push(rotation.join(''));
	}

	return rotations;
}

module.exports = function (limit) {
	var sieve = util.createSieve(limit),
		list = util.createPrimeList(sieve),
		circularPrimes = [2]; // Add 2 for ease later on

	// Filter through prime list
	list.filter(function (prime) {
		// If any of the digits are divisible by 2, skip it, since
		// one of the rotations must end in a non-prime number.
		// Fails on 2, so we need to add 2 earlier on.
		if (!util.splitInteger(prime).some(function (digit) {
			return digit % 2 === 0;
		})) {
			var rotations = getRotations(prime);

			// Reduce through the primes
			if (rotations.reduce(function (previous, prime) {
				return isCircularPrime(previous, prime, sieve);
			}, true)) {
				circularPrimes.push(prime);
			}
		}
	});

	return circularPrimes.length;
};
