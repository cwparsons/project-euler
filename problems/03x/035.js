/**
 * problems/03x/035.js
 * Circular primes
 */

// The number, 197, is called a circular prime because all
// rotations of the digits: 197, 971, and 719, are
// themselves prime.

// There are thirteen such primes below 100: 2, 3, 5, 7, 11,
// 13, 17, 31, 37, 71, 73, 79, and 97.

// How many circular primes are there below one million?

// Create sieve for prime numbers
function createSieve (limit) {
	var i,
		sieve = [];

	// Create the sieve
	sieve[0] = false;
	sieve[1] = false;

	for (i = 2; i < limit; i++) {
		sieve.push(true);
	}

	// Loop through sieve to create prime number list
	for (i = 2; i < sieve.length; i++) {
		for (var j = 2; j * i < sieve.length; j++) {
			sieve[j * i] = false;
		}
	}

	return sieve;
}

// Create a list of rotations
function getRotations (prime) {
	var digits = splitInteger(prime);

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

// Split an integer into an array of digits
function splitInteger (n) {
	var array = n.toString().split('');

	return array.map(function (item) {
		return parseInt(item, 10);
	});
}

module.exports = function (limit) {
	limit = parseInt(limit, 10);

	var sieve = createSieve(limit),
		list = [],
		circularPrimes = [2]; // Add 2 for ease later on

	// Create array of primes
	for (var i = 0; i < sieve.length; i++) {
		if (sieve[i]) {
			list.push(i);
		}
	}

	// Filter through prime list
	list.filter(function (prime) {
		// If any of the digits are divisible by 2, skip it, since
		// one of the rotations must end in a non-prime number.
		// Fails on 2, so we need to add 2 earlier on.
		if (!splitInteger(prime).some(function (digit) {
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
