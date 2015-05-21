/**
 * problems/05x/057.js
 * Square root convergents
 */

var bigInt = require('big-integer');

module.exports = function (limit) {
	var moreDigits = 0,
		t = bigInt(0),
		n = bigInt(3),
		d = bigInt(2);

	// While looking at the formula, realized there was a pattern
	// in the numerators and denominators
	for (var i = 1; i < limit; i++) {
		t = n.add(d);
		n = t.add(d);
		d = t;

		if (n.toString().length > d.toString().length) {
			moreDigits++;
		}
	}

	return moreDigits;
};
