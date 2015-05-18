/**
 * problems/04x/040.js
 * Champernowne's constant
 */

module.exports = function (keep) {
	var integers = 0,
		limit = Math.max.apply(null, keep),
		d = [];

	// Loop through integers until we hit the max keep
	for (var i = 1; integers <= limit; i++) {
		var n = i.toString().split('');

		// Split the integers and count them so we don't
		// have to keep a giant array
		for (var j = 0; j < n.length; j++) {
			integers++;

			if (keep.indexOf(integers) > -1) {
				d.push(parseInt(n[j], 10));
			}
		}
	}

	return d.reduce(function (previous, n) {
		return previous * n;
	}, 1);
};
