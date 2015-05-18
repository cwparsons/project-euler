/**
 * problems/04x/044.js
 * Pentagon numbers
 */

module.exports = function (limit) {
	var pentagonals = {},
		found = false;

	// Create a list of pentagonal numbers
	for (var i = 1; !found && i <= limit; i++) {
		var pn = i * ((3 * i - 1) / 2);
		pentagonals[pn] = true;

		// Loop through previous pentagonals
		for (var pentagonal in pentagonals) {
			// If the difference between our new and old pentagonal
			// is another pentagonal
			if (pentagonals[pn - pentagonal]) {
				// Check to see if the difference between those are
				// also pentagonal
				if (pentagonals[pentagonal - (pn - pentagonal)]) {
					found = true;
					break;
				}
			}
		}
	}

	// Return the first result
	return pentagonal - (pn - pentagonal);
};
