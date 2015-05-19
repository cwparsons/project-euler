/**
 * problems/05x/052.js
 * Permuted multiples
 */

/**
 * sortedNumber creates a string that is sorted
 * @param  {Integer} The integer to sort the digits of
 * @return {String}  The sorted integer digits in array
 */
function sortedNumber (n) {
	return n.toString().split('').sort().join('');
}

/**
 * checkNumber checks to see if a sorted string and an
 * integer is equal, allowing us to check if two numbers
 * have the same digits
 * @param  {String}  The string to check
 * @param  {Integer} The integer to sort and check against a string
 * @return {Boolean} Return true if the string and integer have the same digits
 */
function checkNumber (sorted, n) {
	return sorted === sortedNumber(n);
}

module.exports = function (multiple) {
	var limit = Math.pow(10, 7),
		digits = 10,
		index = 2;

	// Loop through each number
	for (var i = 1; i < limit; i++) {
		// If the number is greater than a multiple, move to the
		// next largest number
		if (i * multiple > digits) {
			i = digits;
			digits *= 10;
		}

		var check = true,
			n = sortedNumber(i);

		// Loop through our multiples
		for (var j = 2; check && j <= multiple; j++) {
			check = checkNumber(n, i * j);
		}

		if (check) {
			return i;
		}
	}

	return 0;
};