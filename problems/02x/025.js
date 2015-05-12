/**
 * problems/02x/025.js
 * 1000-digit Fibonacci number
 */

function log10 (n) {
	return Math.log(n) / Math.LN10;
}

function fiblength (n) {
	var phi = 1.6180339887498;

	return Math.ceil(n * log10(phi) - (log10(5)) / 2);
}

module.exports = function (digits) {
	for (var i = 0; fiblength(i) < digits; i++) {
		continue;
	}

	return i;
};
