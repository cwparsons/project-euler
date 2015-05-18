/**
 * problems/04x/045.js
 * Triangular, pentagonal, and hexagonal
 */

module.exports = function (start) {
	var triangleNumbers = {},
		pentagonalNumbers = {},
		hexagonalNumbers = {};

	// Loop through N and wait til there is another hexagon and pentagonal number
	for (var n = 2; n <= start || !(hexagonalNumbers[tn] && pentagonalNumbers[tn]); n++) {
		var tn = n * ((n + 1) / 2);

		triangleNumbers[tn] = true;
		pentagonalNumbers[n * ((3 * n - 1) / 2)] = true;
		hexagonalNumbers[n * (2 * n - 1)] = true;
	}

	return tn;
};
