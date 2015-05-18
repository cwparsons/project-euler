/**
 * util.js | Common utility functions
 */

var util = {};

/**
 * createSieve returns an array of boolean values that are
 * true on primes and false otherwise.
 * @param  {Integer} The length of the sieve
 * @return {Array}   The sieve array
 */
util.createSieve = function (limit) {
	// Create the sieve
	var sieve = [false, false];

	for (var i = 2; i < limit; i++) {
		sieve.push(true);
	}

	// Loop through sieve to create prime number list
	var sqrtLimit = Math.ceil(Math.sqrt(limit));

	// Loop through all primes to remove integers that have primes
	for (var i = 2; i < sqrtLimit; i++) {
		if (sieve[i]) {
			for (var j = i * i; j < limit; j += i) {
				sieve[j] = false;
			}
		}
	}

	return sieve;
};

/**
 * createPrimeList returns an array of prime numbers.
 * @param  {Array} A sieve of primes
 * @return {Array} An array of prime numbers
 */
util.createPrimeList = function (sieve) {
	var primes = [],
		length = sieve.length;

	for (var i = 0; i < length; i++) {
		if (sieve[i]) {
			primes.push(i);
		}
	}

	return primes;
},

/**
 * hasDuplicatesOrZero returns true if the given array has
 * duplicate elements (e.g. [1, 1, 2]) or one of it's values
 * is '0' or 0.
 * @param  {Array}   The array to check over
 * @return {Boolean} Returns true if has duplicate values or
 *                   has a zero
 */
util.hasDuplicatesOrZero = function (array) {
	var values = {};

	for (var i = 0; i < array.length; i++) {
		var value = array[i];

		if (value === '0' || value === 0 || Object.prototype.hasOwnProperty.call(values, value)) {
			return true;
		}

		values[value] = true;
	}

	return false;
};

/**
 * isPandigital checks to see if an integer is pandigital,
 * that is, contains all digits 1 to n exactly once.
 * @param  {Integer}   The number to check
 * @param  {[Integer]} The number of digits necessary
 * @return {Boolean}   Returns true if integer is pandigital
 */
util.isPandigital = function (integer, n) {
	integer = integer.toString();

	if (typeof n === 'undefined') {
		n = integer.length;
	} else if (n > 9) {
		throw 'Pandigital numbers cannot have an n larger than 9';
	}

	if (util.hasDuplicatesOrZero(integer.split(''))) {
		return false;
	}

	var truth = true;

	for (var i = 1; truth && i <= n; i++) {
		truth = integer.indexOf(i) > -1;
	}

	return truth;
};

module.exports = util;

