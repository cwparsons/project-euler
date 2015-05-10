/**
 * problems/01x/014.js
 * Longest Collatz sequence
 */

function sequenceLength (n, sequences) {
	i = 1;

	while (n !== 1) {
		if (typeof sequences[n] !== 'undefined') {
			return i + sequences[n] - 1;
		} else if (n % 2 === 0) {
			n = n / 2;
		} else {
			n = 3 * n + 1;
		}

		i++;
	}

	return i;
}

module.exports = function (limit) {
	var sequences = [],
		longestChain = 1,
		startingNumber = 1;

	// Loop through every number until our limit
	for (var i = 1; i <= limit; i++) {
		// Create a list of sequences to cache the numbers
		sequences[i] = sequenceLength(i, sequences);

		if (sequences[i] > longestChain) {
			longestChain = sequences[i];
			startingNumber = i;
		}
	}

	return startingNumber;
};
