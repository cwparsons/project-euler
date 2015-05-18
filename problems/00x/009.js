/**
 * problems/00x/009.js
 * Special Pythagorean triplet
 */

module.exports = function (sum) {
	// Since a < b < c, and a + b + c = sum,
	// a + (a + 1) + (a + 2) <= sum
	// 3a <= sum - 3
	// a <= (sum - 3)/3

	var largestA = Math.ceil((sum - 3) / 3),
		largestB = sum - largestA;

	// Loop through possible a's
	for (var a = 1; a <= largestA; a++) {
		// Loop through possible b's
		for (var b = a + 1; b <= largestB; b++) {
			// Since a + b + c = sum
			var c = sum - a - b;

			// If a^2 + b^2 = c^2, then return
			if (a * a + b * b == c * c) {
				return a * b * c;
			}
		}
	}
};
