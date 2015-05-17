/**
 * problems/10.js
 * Summation of primes
 */

module.exports = function (size) {
	var i,
		sieve = [],
		sum = 0;

	// Create the sieve
	sieve[0] = false;
	sieve[1] = false;

	for (i = 2; i < size; i++) {
		sieve.push(true);
	}

	// Loop through sieve to create prime number list
	for (i = 2; i < sieve.length; i++) {
		for (var j = 2; j * i < sieve.length; j++) {
			sieve[j * i] = false;
		}
	}

	// Loop through sieve to sum the primes
	for (i = 2; i < sieve.length; i++) {
		if (sieve[i]) {
			sum += i;
		}
	}

	return sum;
};
