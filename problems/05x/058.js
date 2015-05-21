/**
 * problems/05x/058.js
 * Spiral primes
 */

var util = require('../util.js');

module.exports = function (limit) {
	var primes = 3;

	// Replaced `i` and `n` from previous spiral for easier reading
	// Switched base case, since primes = 0, side = 3 will fail
	// immediately
	for (var side = 5; primes / (side * 2 + 1) > limit; side += 2) {
		// While there is more arithmetic done by minuses sides,
		// it makes the corners add in numerical order
		var corner = Math.pow(side, 2) - 3 * side + 3;

		// Loop through the corners
		for (var j = 0; j < 4; j++) {
			if (util.isPrime(corner)) {
				primes++;
			}

			corner = corner + side - 1;
		}
	}

	return side;
};
