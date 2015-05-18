/**
 * problems/02x/026.js
 * Reciprocal cycles
 */

function recurringCycle (n) {
	var cycle = [],
		remainder = 1;

	// Let's `do` some long division
	do {
		cycle.push(Math.floor(remainder * 10 / n));

		// If the remainders repeat, this is a repeating number
		if (remainder * 10 % n === remainder) {
			return [n];
		}

		remainder = remainder * 10 % n;

		// If the remainder is zero, then this is a rational number
		if (remainder === 0 || cycle.length > 10000) {
			return [];
		}
	} while (remainder > 1);

	return cycle;
}

module.exports = function (limit) {
	var length = 0,
		d = 0;

	for (var i = 2; i < limit; i++) {
		var cycle = recurringCycle(i);

		if (cycle.length > length) {
			length = cycle.length;
			d = i;
		}
	}

	return d;
};
