/**
 * problems/06x/062.js
 * Cubic permutations
 */

var util = require('../util.js');

module.exports = function (limit) {
	var cubes = {};

	// Loop through all cubes
	for (var i = 1; i < Math.pow(10, limit); i++) {
		// Determine permutations by sorting the strings
		var c = i * i * i,
			n = c.toString().split('').sort().join('');

		// If the permutation has been seen before, add to it
		if (cubes[n]) {
			cubes[n].permutations++;

			// If the amount of permutations reaches our limit
			if (cubes[n].permutations === limit) {
				return cubes[n].smallest;
			}
		} else {
			cubes[n] = {
				smallest: c,
				permutations: 1
			};
		}
	}
};
