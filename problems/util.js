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
	if (typeof sieve !== 'object') {
		sieve = util.createSieve(sieve);
	}

	var primes = [],
		length = sieve.length;

	for (var i = 0; i < length; i++) {
		if (sieve[i]) {
			primes.push(i);
		}
	}

	return primes;
};


/**
 * factorial returns the factorial of n (e.g. n!)
 * @param  {Integer} The number to factorial
 * @return {Integer} The value of n!
 */
util.factorial = function (n) {
	return util.factorialDivided(n, 1);
};


/**
 * factorial returns the factorial of n (e.g. n!)
 * @param  {Integer} The number to factorial
 * @return {Integer} The value of n!
 */
util.factorialDivided = function (n, r) {
	if (typeof r === 'undefined') {
		r = 1;
	}

	return n <= r ? 1 : n * util.factorialDivided(n - 1, r);
};


/**
 * getLetterPosition returns the position in the alphabet of a
 * letter. E.g. S returns 19.
 * @param  {String}  The character to find a position of
 * @return {Integer} The position of the character
 */
util.getLetterPosition = function (char) {
	if (char.length > 1) {
		throw new  'getLetterPosition only supports one character';
	}

	var alphabet = {
		A:  1, B:  2, C:  3, D:  4, E:  5,
		F:  6, G:  7, H:  8, I:  9, J: 10,
		K: 11, L: 12, M: 13, N: 14, O: 15,
		P: 16, Q: 17, R: 18, S: 19, T: 20,
		U: 21, V: 22, W: 23, X: 24, Y: 25,
		Z: 26
	};

	return alphabet[char.toUpperCase()];
};


/**
 * hasDuplicatesOrZero returns true if the given array has
 * duplicate elements (e.g. [1, 1, 2]) or one of it's values
 * is '0' or 0.
 * @param  {Array}   The array to check over
 * @return {Boolean} Returns true if has duplicate values or
 *                   has a zero
 */
util.hasDuplicatesOrZero = function (array) {
	var values = {},
		length = array.length;

	for (var i = 0; i < length; i++) {
		var value = array[i];

		if (value === '0'
			|| value === 0
			|| Object.prototype.hasOwnProperty.call(values, value)) {
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

	var isPandigital = true;

	for (var i = 1; isPandigital && i <= n; i++) {
		isPandigital = integer.indexOf(i) > -1;
	}

	return isPandigital;
};


/**
 * isPalindrome returns true if the integer is a palindrome.
 * @param  {Integer} The integer to check
 * @return {Boolean} Returns true if integer is a palindrome
 */
util.isPalindrome = function (n) {
	var isPalindrome = true;

	n = n.toString().split('');
	length = n.length;

	// Loop through the first half of the characters
	for (var i = 0; isPalindrome && i < length / 2; i++) {
		isPalindrome = n[i] === n[length - i - 1];
	}

	return isPalindrome;
};


/**
 * nCr aka `from n choose r`
 * @param  {Integer} n A combination of `n` things
 * @param  {Integer} r Taken `r` at a time
 * @return {Integer}   The number of combinations
 */
util.nCr = function (n, r) {
	return util.factorialDivided(n, r) / util.factorialDivided(n - r);
};


/**
 * numberOfDivisors returns the number of divisors
 * @param  {Integer} The number to find the divisors for
 * @return {Integer} The number of divisors
 */
util.numberOfDivisors = function (n) {
	var divisors = 0,
		limit = Math.floor(Math.sqrt(n));

	for (var i = 1; i < limit; i++) {
		if (n % i === 0) {
			divisors++;
		}
	}

	return divisors * 2;
};


/**
 * splitInteger splits a number into an array of digits
 * @param  {Integer} The integer to split
 * @return {Array}   An array of digits
 */
util.splitInteger = function (n) {
	var array = n.toString().split('');

	return array.map(function (item) {
		return parseInt(item, 10);
	});
};


/**
 * sumOfProperDivisors creates a list of proper divisors and
 * adds them all together
 * @param  {Integer} The integer to find the divisors from
 * @return {Integer} The sum of all proper divisors
 */
util.sumOfProperDivisors = function (n) {
	var divisors = [],
		limit = Math.floor(Math.sqrt(n));

	// Loop through the first half of divisors
	for (var i = 1; i <= limit; i++) {
		if (n % i === 0) {
			divisors.push(i);

			// Do not include number, and don't double count
			// squares
			if (i !== 1 && n / i !== i) {
				divisors.push(n / i);
			}
		}
	}

	// Return the sum of these divisors
	return divisors.reduce(function (sum, divisor) {
		return sum + divisor;
	}, 0);
};


/**
 * toBase converts an integer into another base
 * @param  {Integer}   An integer to convert to another base
 * @param  {[Integer]} The base to convert to
 * @return {String}    The converted number as a string
 */
util.toBase = function (n, base) {
	if (typeof base === 'undefined') {
		base = 2;
	}

	var convert = [];

	while (n > 0) {
		convert.push(n % base === 0 ? 0 : 1);
		n = Math.floor(n / base);
	}

	return convert.join('');
};

module.exports = util;
