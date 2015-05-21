/**
 * problems/05x/059.js
 * XOR decryption
 */

/**
 * decrypt does an XOR against each integer and converts it
 * back to an ASCII character
 * @param  {Array}  Array of integers to decrypt
 * @param  {Array}  The keys in order to check against
 * @return {String} The decrypted output
 */
function decrypt (array, keys) {
	// Loop through each integer in the array
	return array.map(function (item, index) {
		// Select the key that matches the current index
		// XOR (^) the two integers
		return String.fromCharCode(item ^ keys[index % 3]);
	});
}

module.exports = function (filename) {
	var file = require(filename),
		start = 'a'.charCodeAt(0),
		end = 'z'.charCodeAt(0);

	// Loop through three lowercase keys
	for (var a = start; a <= end; a++) {			// Always
		for (var b = start; b <= end; b++) {		// Be
			for (var c = start; c <= end; c++) {	// Crypting
				var contents = decrypt(file, [a, b, c]).join('');

				// Look for common words, ignore case. Added 'was' once
				// I manually read through the few results.
				if (contents.match(/the/i) &&
					contents.match(/and/i) &&
					contents.match(/was/i)) {
					// Reduce through the array to add the character values
					return contents.split('').reduce(function (previous, string) {
						return previous + string.charCodeAt(0);
					}, 0);
				}
			}
		}
	}
};
