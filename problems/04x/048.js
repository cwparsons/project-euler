/**
 * problems/04x/048.js
 * Self powers
 */

/**
 * power uses arrays to do basic multiplication and only returns
 * the last ten digits.
 * @param  {Integer} An integer to put to a power of itself
 * @return {Array}   An array containing the last ten digits of n^n
 */
function power (n) {
	var digits = [1],
		carryover = 0;

	// Multiply n times
	for (var i = 0; i < n; i++) {
		carryover = 0;

		// Multiple n across each digit in the array
		for (var j = digits.length - 1; j >= 0; j--) {
			digits[j] = digits[j] * n + carryover;

			// If the digit is now more than 9, carry over the value
			// to the next digit
			if (digits[j] > 9) {
				carryover = Math.floor(digits[j] / 10);
				digits[j] %= 10;

				// If we're on the left most digit...
				if (j === 0) {
					// If we're not on the last ten digits, we need
					// to create new digits in the digits array
					if (digits.length <= 10) {
						// If carryover is greater than 10, we need
						// to loop through the carryover and create
						// multiple new digits
						do {
							digits.unshift(carryover % 10);
							carryover = Math.floor(carryover / 10);
						} while (carryover > 0 && digits.length <= 10);

						carryover = 0;
					} else {
						// If we're over 10 digits already, let us
						// throw away the carryover
						digits[0] %= 10;
					}
				}
			} else {
				carryover = 0;
			}
		}
	}

	return digits;
}

module.exports = function (limit) {
	var list = [];

	// Loop through the digits, get their powers' last ten digits
	for (var i = 1; i <= limit; i++) {
		var digits = parseInt(power(i).join(''), 10);
		list.push(digits);
	}

	// Add the digits together and get their last ten digits
	return list.reduce(function (sum, summand) {
		return sum + summand;
	}).toString().slice(-10);
};