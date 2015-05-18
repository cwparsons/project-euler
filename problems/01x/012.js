/**
 * problems/01x/012.js
 * Highly divisible triangular number
 */

var util = require('../util.js');

module.exports = function (divisors) {
	var triangleNumber = 1;

	for (var i = 2; util.numberOfDivisors(triangleNumber) <= divisors; i++) {
		triangleNumber += i;
	}

	return triangleNumber;
};