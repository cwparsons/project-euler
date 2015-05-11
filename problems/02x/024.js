/**
 * problems/02x/024.js
 * Lexicographic permutations
 */

// Loop through all permutations of an array
function permutate(values) {
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
}

module.exports = function (n) {
	var values = [];

	// Create strings
	for (var i = 0; i <= 9; i++) {
		values.push(i.toString());
	}

	var permutations = permutate(values);

	if (permutations.length >= n) {
		return permutations[n - 1];
	}
};
