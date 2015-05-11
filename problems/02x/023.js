/**
 * problems/02x/023.js
 * Non-abundant sums
 */

function sumOfProperDivisors (n) {
	var divisors = [];

	// Loop through the first half of divisors
	for (var i = 1; i <= Math.floor(Math.sqrt(n)); i++) {
		if (n % i === 0) {
			divisors.push(i);

			// Do not include number, and don't double count
			// squares
			if (i !== 1 && n / i !== i) {
				divisors.push(n / i);
			}
		}
	}

	// Return the sum of these divisors
	return divisors.reduce(function (sum, divisor) {
		return sum + divisor;
	}, 0);
}

module.exports = function (limit) {
	var abundantNumbers = [],
		abundantSieve = [],
		sum = 0,
		i;

	// Create a list of abudent numbers and a sieve for faster
	// access.
	for (i = 0; i <= limit; i++) {
		if (i < sumOfProperDivisors(i)) {
			abundantNumbers.push(i);
			abundantSieve.push(true);
		} else {
			abundantSieve.push(false);
		}

		sum += i;

		// Loop through all the abundant numbers we know
		for (var j = 0; j < abundantNumbers.length; j++) {
			var difference = i - abundantNumbers[j];

			if (difference >= 0 && abundantSieve[difference]) {
				sum -= i;
				break;
			}
		}
	}

	return sum;
};
