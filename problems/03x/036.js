/**
 * problems/03x/036.js
 * Double-base palindromes
 */

// Check to see if a number is a palindrome
function isPalindrome (n) {
	var test = true;

	n = n.toString().split('');

	// Loop through the first half of the characters
	for (var i = 0; i < n.length / 2; i++) {
		test = n[i] === n[n.length - i - 1];

		if (!test) {
			break;
		}
	}

	return test;
}

// Convert an integer from base 10 to base 2
function toBaseN (n, base) {
	var convert = '';

	while (n > 0) {
		convert += n % base === 0 ? 0 : 1;
		n = Math.floor(n / base);
	}

	return convert;
}

module.exports = function (limit) {
	limit = parseInt(limit, 10);

	var palindromes = [];

	for (var i = 0; i < limit; i++) {
		if (isPalindrome(i) && isPalindrome(toBaseN(i, 2))) {
			palindromes.push(i);
		}
	}

	return palindromes.reduce(function (sum, n) {
		return sum + n; },
	0);
};
