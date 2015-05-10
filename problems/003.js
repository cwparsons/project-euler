/**
 * 3.js
 * Largest prime factor
 */

module.exports = function (prime) {
	// Find the largest factor
	var largestFactor = Math.ceil(Math.sqrt(prime));

	var i,
		sieve = [],
		primeFactor = 0;

	// Create the sieve
	sieve[0] = false;
	sieve[1] = false;

	for (i = 2; i < largestFactor; i++) {
		sieve.push(true);
	}

	// Loop through sieve to create prime number list
	for (i = 2; i < sieve.length; i++) {
		for (var j = 2; j * i < sieve.length; j++) {
			sieve[j * i] = false;
		}
	}

	// Loop through prime numbers to find largest prime factor
	for (i = 2; i < sieve.length; i++) {
		if (sieve[i] && prime % i === 0) {
			factor = i;
		}
	}

	return factor;
};
