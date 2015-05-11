/**
 * problems/02x/020.js
 * Factorial digit sum
 */

module.exports = function (n) {
	var factorial = [],
		carryover;

	factorial.push(1);

	// Since JavaScript doesn't have a big integer type, we
	// need to find another way of getting all the integers.

	// Loop through the factorial, doubling the array each time.
	for (var i = 1; i <= n; i++) {
		carryover = 0;

		// Loop through each item of the element
		for (var j = factorial.length - 1; j >= 0; j--) {
			factorial[j] = factorial[j] * i + carryover;

			if (factorial[j] >= 10) {
				var remainder = Math.floor(factorial[j] / 10);
				factorial[j] = factorial[j] % 10;

				if (j === 0) {
					while (remainder >= 10) {
						factorial.unshift(remainder % 10);
						remainder = Math.floor(remainder / 10);
					}

					factorial.unshift(remainder % 10);
				} else {
					carryover = Math.ceil(remainder);
				}
			} else {
				carryover = 0;
			}
		}
	}

	return factorial.reduce(function (previous, digit) {
		return previous + digit;
	}, 0);
};
