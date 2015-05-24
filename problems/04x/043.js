/**
 * problems/04x/043.js
 * Sub-string divisibility
 */

var util = require('../util.js');

module.exports = function (limit) {
	var sum = 0,
		sieve = util.createSieve(limit),
		primes = util.createPrimeList(sieve),

		// Remove 5 since d6 must be 5
		permutations = util.permutate('012346789'.split(''));

	// Find all permutations that match the prime divisor lists
	permutations = permutations.filter(function (permutation) {
		var hasProperty = true;

		// Re-add 5 back in
		permutation = permutation.substr(0, 5) + '5' + permutation.substr(5);

		// Reverse through the list, since there are less numbers that
		// are divisible with 17
		for (var i = 8; hasProperty && i > 1; i--) {
			var n = parseInt(permutation[i - 1] + permutation[i] + permutation[i + 1], 10);
			hasProperty = n % primes[i - 2] === 0;
		}

		if (hasProperty) {
			sum += parseInt(permutation, 10);
		}
	});

	return sum;
};
