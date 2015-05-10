/**
 * 4.js
 * Largest palindrome product
 */

module.exports = function (digits) {
	var largestProduct = 0;

	function isPalindrome (string) {
		var test = true;

		for (var i = 0; i < string.length / 2; i++) {
			test = string[i] === string[string.length - i - 1];

			if (!test) {
				break;
			}
		}

		return test;
	}

	// Loop through all three digit numbers to create products
	for (var i = Math.pow(10, digits); i > Math.pow(10, digits - 1); i--) {
		for (var j = Math.pow(10, digits); j > Math.pow(10, digits - 1); j--) {
			product = i * j;

			// If the product is a palindrome and greater than our last product
			if (isPalindrome(product.toString()) && product > largestProduct) {
				largestProduct = product;
			}
		}
	}

	return largestProduct;
};