/**
 * problems/02x/023.js
 * Non-abundant sums
 */

var util = require('../util.js');

module.exports = function (limit) {
	var abundantNumbers = [],
		abundantSieve = [],
		sum = 0,
		i;

	// Create a list of abudent numbers and a sieve for faster
	// access.
	for (i = 0; i <= limit; i++) {
		if (i < util.sumOfProperDivisors(i)) {
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
