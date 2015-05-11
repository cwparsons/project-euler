/**
 * problems/02x/021.js
 * Amicable numbers
 */

function sumOfProperDivisors (n) {
	var divisors = [];

	// Loop through the first half of divisors
	for (var i = 1; i < Math.floor(Math.sqrt(n)); i++) {
		if (n % i === 0) {
			divisors.push(i);

			if (i !== 1) {
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
	var sum = 0;

	// Loop through all the numbers
	for (var a = 1; a < limit; a++) {
		var b = sumOfProperDivisors(a);

		if (a !== b) {
			var db = sumOfProperDivisors(b);

			if (a === db) {
				// Don't add b as to not double count
				sum += a;
			}
		}
	}

	return sum;
};
