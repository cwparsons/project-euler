/**
 * problems/01x/015.js
 * Lattice paths
 */

var util = require('../util.js');

module.exports = function (size) {
	size = parseInt(size, 10);

	var n = size * 2; // Row
	var r = size;     // Position in row

	var nCr = util.factorial(n) / (util.factorial(r) * util.factorial(n - r));

	return Math.floor(nCr);
};
