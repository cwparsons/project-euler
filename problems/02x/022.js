/**
 * problems/02x/022.js
 * Names scores
 */

module.exports = function (filename) {
	var names = require(filename);
	var alphabet = { A: 1, B: 2, C: 3, D: 4, E: 5, F: 6, G: 7, H: 8, I: 9, J: 10, K: 11, L: 12, M: 13, N: 14, O: 15, P: 16, Q: 17, R: 18, S: 19, T: 20, U: 21, V: 22, W: 23, X: 24, Y: 25, Z: 26 };

	names = names.sort();

	return names.reduce(function (sum, name, index) {
		var value = 0;

		for (var i = 0; i < name.length; i++) {
			value += alphabet[name[i]];
		}

		return sum + value * (index + 1);
	}, 0);
};
