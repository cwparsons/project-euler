/**
 * problems/03x/032.js
 * Pandigital products
 */

var util = require('../util.js');

module.exports = function (digit) {
	var products = [];

	digit = parseInt(digit, 10);

	// Loop through all possible multiplicands
	for (var i = 1; i < 100; i++) {
		var multiplicand = i.toString().split('');

		// Check for duplicates early for speed
		if (!util.hasDuplicatesOrZero(multiplicand)) {
			// Loop through all possible multipliers
			// The product must be less than 10,000 since we need to have
			// a max of 9 digits across all three numbers
			for (var j = i; j * i < 10000; j++) {
				var multiplier = j.toString().split('');
				var product = (i * j).toString().split('');

				var combined = multiplicand.concat(multiplier).concat(product);

				if (combined.length === digit && !util.hasDuplicatesOrZero(combined)) {
					products.push(i * j);
				}
			}
		}
	}

	// Sort the products to easily remove duplicates
	products = products.sort(function (a, b) { return a - b; });

	// Reduce through the array, skip duplicates
	return products.reduce(function (sum, product, index, array) {
		if (!index || product !== array[index - 1]) {
			return sum + product;
		} else {
			return sum;
		}
	}, 0);
};
