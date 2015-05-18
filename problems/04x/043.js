/**
 * problems/04x/043.js
 * Sub-string divisibility
 */

var util = require('../util.js');

function permutate (values) {
	// Use a base case of two to try to save some time
	if (values.length === 2) {
		return [values[0] + values[1], values[1] + values[0]];
	}

	var permutations = [],
		usedValues = [];

	// Loop through each value of the array
	for (var i = values.length; i > 0; i--) {
		var value = values.shift();

		// Recursively get the permutations using the other values
		var list = permutate(usedValues.concat(values));

		// Use the initial value and all new permutations to create more permutations
		for (var j = 0; j < list.length; j++) {
			permutations.push(value + list[j]);
		}

		usedValues.push(value);
	}

	return permutations;
};

module.exports = function (limit) {
	var sum = 0,
		sieve = util.createSieve(limit),
		primes = util.createPrimeList(sieve),

		// Remove 5 since d6 must be 5
		permutations = permutate('012346789'.split(''));

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
