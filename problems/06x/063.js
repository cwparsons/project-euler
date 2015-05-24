/**
 * problems/06x/063.js
 * Powerful digit counts
 */

module.exports = function (limit) {
	// Skip 1^1 since it breaks our array
	var i = 1;

	for (var x = 2; x < limit; x++) {
		// 10^(n - 1) <= x^n < 10^n
		for (var n = 1; Math.pow(x, n) < Math.pow(10, n); n++) {
			if (Math.pow(10, n - 1) <= Math.pow(x, n)) {
				i++;
			}
		}
	}

	return i;
};
