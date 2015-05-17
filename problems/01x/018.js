/**
 * problems/01x/018.js
 * Maximum path sum I
 */

module.exports = function (triangle) {
	// Loop through each row of the triangle
	for (var y = 1; y < triangle.length; y++) {
		// Loop through each item in the row
		for (var x = 0; x < triangle[y].length; x++) {
			// If we're on the left side, take the only element
			// Otherwise, take the larger parent element
			if (x === 0 || triangle[y - 1][x - 1] < triangle[y - 1][x]) {
				triangle[y][x] += triangle[y - 1][x];
			} else {
				triangle[y][x] += triangle[y - 1][x - 1];
			}
		}
	}

	return triangle[triangle.length - 1].reduce(function (maximum, sum) {
		return sum > maximum ? sum : maximum;
	}, 0);
};