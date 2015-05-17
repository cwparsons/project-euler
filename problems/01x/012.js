/**
 * problems/01x/012.js
 * Highly divisible triangular number
 */

function numberOfDivisors (n) {
	var divisors = 0;

	for (var i = 1; i < Math.floor(Math.sqrt(n)); i++) {
		if (n % i === 0) {
			divisors++;
		}
	}

	return divisors * 2;
}

module.exports = function (divisors) {
	var triangleNumber = 1;

	for (var i = 2; numberOfDivisors(triangleNumber) <= divisors; i++) {
		triangleNumber += i;
	}

	return triangleNumber;
};