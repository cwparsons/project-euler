/**
 * problems/03x/037.js
 * Truncatable primes
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

module.exports = function (limit) {
	limit = parseInt(limit, 10);

	var sieve = createSieve(limit),
		primes = [];

	// Create array of primes
	for (var i = 0; i < sieve.length; i++) {
		if (sieve[i]) {
			primes.push(i);
		}
	}

	// Find the truncatable primes
	var truncatablePrimes = primes.filter(function (prime) {
		var truth = prime > 10;

		prime = prime.toString();

		// Loop through the length of the number
		for (var i = 1; i < prime.length && truth; i++) {
			// Check to see if the first slice or last slices are primes
			truth = sieve[prime.slice(0, i)]
				&& sieve[prime.slice(prime.length - i, prime.length)];
		}

		return truth;
	});

	var sum = truncatablePrimes.reduce(function (previous, prime) {
		return previous + prime;
	}, 0);

	return sum;
};
