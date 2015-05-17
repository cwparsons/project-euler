/**
 * problems/02x/028.js
 * Number spiral diagonals
 */

// Use the corners (9, 25, 49) and the size of the spiral
// to determine the diagonals. This is easier than creating
// the spiral.
module.exports = function (size) {
	var sum = 1;

	size = parseInt(size, 10) / 2;

	for (var i = 1; i < size; i++) {
		var n = i * 2 + 1;
		var corner = Math.pow(n, 2);

		// Simplified the four corners sumation
		sum += 4 * corner - (6 * n - 6);
	}

	return sum;
};
