/**
 * problems/01x/016.js
 * Power digit sum
 */

module.exports = function (exponent) {
	var power = [],
		carryover;

	power.push(1);

	// Since JavaScript doesn't have a big integer type, we
	// need to find another way of getting all the integers.

	// Create an array where each item is a digit of the power,
	// then double the array each time. Use a carryover if any
	// individual element is greater than 10.

	// Loop through the exponent, doubling the array each time.
	for (var i = 0; i < exponent; i++) {
		carryover = 0;

		// Loop through each item of the element, doubling it
		for (var j = power.length - 1; j >= 0; j--) {
			power[j] = power[j] * 2 + carryover;

			if (power[j] >= 10) {
				power[j] = power[j] % 10;

				if (j === 0) {
					power.unshift(1);
				} else {
					carryover = 1;
				}
			} else {
				carryover = 0;
			}
		}
	}

	return power.reduce(function (previous, digit) {
		return previous + digit;
	}, 0);
};
