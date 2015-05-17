/**
 * problems/03x/034.js
 * Digit factorials
 */

function factorial (n) {
	return n <= 1 ? 1 : n * factorial(n - 1);
}

function splitInteger (n) {
	var array = n.toString().split('');

	return array.map(function (item) {
		return parseInt(item, 10);
	});
}

module.exports = function (limit) {
	var sum = 0;

	// Skip 1, 2
	for (var i = 3; i < limit; i++) {
		var split = splitInteger(i);

		split = split.map(factorial);

		var curious = i === split.reduce(function (previous, value) {
			return previous + value;
		}, 0);

		if (curious) {
			sum += i;
		}
	}

	return sum;
};
