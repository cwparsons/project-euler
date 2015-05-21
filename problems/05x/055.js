/**
 * problems/05x/055.js
 * Lychrel numbers
 */

var bigInt = require('big-integer'),
	util = require('../util.js');

function reverse (n) {
	return bigInt(n.toString().split('').reverse().join(''), 10);
}

module.exports = function (limit) {
	var lychrelNumbers = 0;

	// Loop through every number below limit
	for (var i = 0; i <= limit; i++) {
		var isPalindrome = false,
			value = bigInt(i);

		// Loop through 50 iterations and check if palindrome
		for (var j = 0; !isPalindrome && j <= 50; j++) {
			value = value.add(reverse(value));
			isPalindrome = util.isPalindrome(value);
		}

		if (!isPalindrome) {
			lychrelNumbers++;
		}
	}

	return lychrelNumbers;
};
