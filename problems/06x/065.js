/**
 * problems/06x/065.js
 * Convergents of e
 */

var bigInt = require('big-integer');

/**
 * createSequence creates the [1, 2, 1, 1, 4, 1 ... 1, k, 1] sequence
 * @param  {Integer} n The length of the sequence
 * @return {Array}     The created sequence
 */
function createSequence (n) {
	// Start the sequence with a two
	var array = [2];

	for (var k = 1; k <= n / 3; k++) {
		array.push(1);
		array.push(k * 2);
		array.push(1);
	}

	return array.slice(0, n);
}

module.exports = function (limit) {
	var sequence = createSequence(limit),
		// Need to use big integers since our numerator becomes very large
		fraction = [bigInt(1), bigInt(sequence[sequence.length - 1])];

	// Loop through the sequence backwards
	for (var i = sequence.length - 1; i > 0; i--) {
		// Determine the next denominator
		var n = fraction[1].multiply(sequence[i - 1]);
		fraction[0] = fraction[0].add(n);

		// 1/(1/n) === n/1
		fraction = [fraction[1], fraction[0]];
	}

	// We miss the last inverse of the fraction, so instead of using
	// the numerator, sum the digits of the denominator.
	return fraction[1].toString().split('').reduce(function (previous, n) {
		return previous + parseInt(n, 10);
	}, 0);
};
