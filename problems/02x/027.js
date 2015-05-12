/**
 * problems/02x/027.js
 * Quadratic primes
 */

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

// Quadratic formula
function formula(n, a, b) {
	return (n * n) + (a * n) + b;
}

module.exports = function (limit) {
	var sieve = createSieve(Math.pow(10, 6)),
		length = 0,
		longestA = 0,
		longestB = 0,
		primes = [];

	// Since the first value is n = 0, b must be prime.
	// Create a list of primes to use as b
	for (var i = 0; i < sieve.length; i++) {
		if (sieve[i] && i <= limit) {
			primes.push(i);
			primes.push(i * -1);
		}
	}

	// Loop through all values of a
	for (var a = -1 * (limit) - 1; a < limit; a++) {
		// Loop through all primes less than 1000 for b
		for (var bIndex = 0; bIndex < primes.length; bIndex++) {
			var b = primes[bIndex];

			for (i = 0; sieve[formula(i, a, b)]; i++) {
				continue;
			}

			if (i > length) {
				length = i;
				longestA = a;
				longestB = b;
			}
		}
	}

	return longestA * longestB;
};
