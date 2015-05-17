/**
 * problems/02x/028.js
 * Number spiral diagonals
 */

// 43 44 45 46 47 48 49
// 42 21 22 23 24 25 26
// 41 20  7  8  9 10 27
// 40 19  6  1  2 11 28
// 39 18  5  4  3 12 29
// 38 17 16 15 14 13 30
// 37 36 35 34 33 32 31

// fn(3) =  25
// fn(5) = 101
// fn(7) = 261

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
