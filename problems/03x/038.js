/**
 * problems/03x/038.js
 * Pandigital multiples
 */

// Returns true if an array has duplicates or zeroes,
// similar properties to a pandigital
function hasDuplicatesOrZero(array) {
	var values = {};

	for (var i = 0; i < array.length; i++) {
		var value = array[i];

		if (value === '0' || Object.prototype.hasOwnProperty.call(values, value)) {
			return true;
		}

		values[value] = true;
	}

	return false;
}

module.exports = function (digits) {
	digits = parseInt(digits, 10);

	var pandigitals = [];

	// Loop to 10000. Any farther, concats of n * 2 would be too
	// large to be a 9-digit pandigital.
	for (var i = 1; i < Math.pow(10, 4); i++) {
		var concat = [],
			power = 7 - Math.ceil((Math.log(i) / Math.log(10)));

		// Loop through the number of n's that can reach 100000000
		for (var n = 1; n < power; n++) {
			concat.push(i * n);

			var string = concat.join('');

			// If our concatenated number is large enough
			if (string.length > 8) {
				string = string.split('');

				if (!hasDuplicatesOrZero(string)) {
					pandigitals.push(string.join(''));
					break;
				}
			}
		}
	}

	// Sort to find the largest pandigital, and get the largest
	return pandigitals.sort()[pandigitals.length - 1];
};
