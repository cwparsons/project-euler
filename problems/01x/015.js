/**
 * problems/01x/015.js
 * Lattice paths
 */

//         1 			0
//       1   1			1
//      1  2  1			2	1x1
//     1  3 3  1		3
//    1 4  6  4 1		4	2x2
//   1 5 10 10 5 1		5
//  1 6 15 20 15 6 1	6	3x3

function factorial (n) {
	if (n === 1) {
		return 1;
	}

	return n * factorial(n - 1);
}

module.exports = function (size) {
	size = parseInt(size, 10);

	var n = size * 2; // Row
	var r = size;     // Position in row

	var nCr = factorial(n) / (factorial(r) * factorial(n - r));

	return Math.floor(nCr);
};
