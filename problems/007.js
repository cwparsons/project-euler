/**
 * 7.js
 * 10001st prime
 */

module.exports = function (nthPrime) {
	var i,
		size = 150000, // Math.pow(nthPrime, 2)
		sieve = [],
		primeFactor = 0;

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

	// Loop through the sieve to get the nth prime
	for (i = 0; i <= sieve.length; i++) {
		if (sieve[i]) {
			nthPrime--;
		}

		if (nthPrime === 0) {
			break;
		}
	}

	return i;
};
