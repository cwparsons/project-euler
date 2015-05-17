/**
 * problems/03x/030.js
 * Digit fifth powers
 */

module.exports = function (power) {
	power = parseInt(power, 10);

	var sumOfPowers = 0,
		limit = Math.pow(10, power + 1);

	// Loop through all integers
	for (var i = 2; i < limit; i++) {
		var n = i.toString(),
			sum = 0;

		for (var j = 0; j < n.length; j++) {
			var digit = parseInt(n[j], 10);

			sum += Math.pow(digit, power);
		}

		if (sum === i) {
			sumOfPowers += i;
		}
	}

	return sumOfPowers;
};