/**
 * problems/01x/015.js
 * Lattice paths
 */

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
