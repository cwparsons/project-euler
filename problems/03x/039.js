/**
 * problems/03x/039.js
 * Integer right triangles
 */

module.exports = function (limit) {
	var triangles = [],
		longest = 0,
		longestIndex = 0;

	for (var i = 0; i <= limit; i++) {
		var sides = [];

		// Set side A
		for (var a = 1; a < i - 2; a++) {
			// Set side B, which we can assume is greater than A
			// so that we do not count it multiple times
			for (var b = a; b <= i - a - 1; b++) {
				// We can now assume C
				c = i - a - b;

				if (a * a + b * b === c * c) {
					sides.push([a, b, c]);
				}
			}
		}

		triangles[i] = sides;
	}

	triangles.reduce(function (previous, sides, index) {
		if (sides.length > previous) {
			longestIndex = index;

			return sides.length;
		} else {
			return previous;
		}
	}, 0);

	return longestIndex;
};