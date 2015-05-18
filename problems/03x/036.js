/**
 * problems/03x/036.js
 * Double-base palindromes
 */

var util = require('../util.js');

module.exports = function (limit) {
	var palindromes = [];

	for (var i = 0; i < limit; i++) {
		if (util.isPalindrome(i) && util.isPalindrome(util.toBase(i, 2))) {
			palindromes.push(i);
		}
	}

	return palindromes.reduce(function (sum, n) {
		return sum + n; },
	0);
};
