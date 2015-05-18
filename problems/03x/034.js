/**
 * problems/03x/034.js
 * Digit factorials
 */

var util = require('../util.js');

module.exports = function (limit) {
	var sum = 0;

	// Skip 1, 2
	for (var i = 3; i < limit; i++) {
		var split = util.splitInteger(i);

		split = split.map(util.factorial);

		var curious = i === split.reduce(function (previous, value) {
			return previous + value;
		}, 0);

		if (curious) {
			sum += i;
		}
	}

	return sum;
};
