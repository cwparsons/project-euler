/**
 * problems/06x/061.js
 * Cyclical figurate numbers
 */

var util = require('../util.js');

/**
 * isCyclic returns true if the last two numbers are equal to the first two
 * numbers. E.g. (8123, 2391) returns true.
 * @param  {Integer}  a
 * @param  {Integer}  b
 * @return {Boolean}    Returns true if numbers are cylical
 */
function isCyclic (a, b) {
	return a.toString().substring(0, 2) === b.toString().slice(2);
}

/**
 * isFourDigits returns true if the length is four
 * @param  {Integer}  n
 * @return {Boolean}
 */
function isFourDigits (n) {
	return n.toString().length === 4;
}

/**
 * recurse is a depth first search through the possible cyclic values
 * @param  {Array}   last
 * @param  {Array}   generators
 * @return {Integer}            The sum of the cyclic set
 */
function recurse (last, generators) {
	var search = generators.map(function (generator) {
		return generator.filter(function (n) {
			return isCyclic(n, last[last.length - 1]) &&
				last.indexOf(n) === -1;
		});
	});

	// If we've run of out generators, we're at the end
	if (generators.length === 1) {
		// If the last generator has a valid cyclic number
		if (search[0].length && isCyclic(last[0], search[0])) {
			// Return the sum of the numbers
			return last.concat(search[0]).reduce(function (previous, n) {
				return previous + n;
			}, 0);
		}
	} else {
		// Otherwise, we look through all the remaining generators
		for (var i = 0; i < search.length; i++) {
			// Create a copy of the generator without the current generator
			var copy = generators.slice();
			copy.splice(i, 1);

			// Loop through the current generator values
			for (var j = 0; j < search[i].length; j++) {
				var answer = recurse(last.concat([search[i][j]]), copy);
			}

			if (answer > 0) {
				return answer;
			}
		}
	}

	return 0;
}

module.exports = function (limit) {
	var array = util.createArray(limit),
		generators = [
			array.map(function (n) { return n * (n + 1) / 2 }).filter(isFourDigits),
			array.map(function (n) { return n * n }).filter(isFourDigits),
			array.map(function (n) { return n * (3 * n - 1) / 2 }).filter(isFourDigits),
			array.map(function (n) { return n * (2 * n - 1) }).filter(isFourDigits),
			array.map(function (n) { return n * (5 * n - 3) / 2 }).filter(isFourDigits),
			array.map(function (n) { return n * (3 * n - 2) }).filter(isFourDigits)
		],
		picked;

	// Loop through the all the possible starting numbers.
	// Reverse through the generators, since it arrives at the answer faster.
	for (var i = generators.length - 1; i > 0; i--) {
		for (var j = 0; j < generators[i].length; j++) {
			var copy = generators.slice();
			copy.splice(i, 1);

			var answer = recurse([generators[i][j]], copy);

			if (answer > 0) {
				return answer;
			}
		}
	}

	return 0;
};
