/**
 * problems/00x/004.js
 * Largest palindrome product
 */

var util = require('../util.js');

module.exports = function (digits) {
	var largestProduct = 0,
		start = Math.pow(10, digits),
		limit = Math.pow(10, digits - 1);

	// Loop through all three digit numbers to create products
	for (var i = start; i > limit; i--) {
		for (var j = start; j > limit; j--) {
			product = i * j;

			// If the product is a palindrome and greater than our last product
			if (util.isPalindrome(product.toString()) && product > largestProduct) {
				largestProduct = product;
			}
		}
	}

	return largestProduct;
};
