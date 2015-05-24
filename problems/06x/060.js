/**
 * problems/06x/060.js
 * Prime pair sets
 */

var util =  require('../util.js');

function isPairsetPrime (a, b) {
	var ab = a.toString().concat(b);
	var ba = b.toString().concat(a);

	return util.isPrime(ab) && util.isPrime(ba);
}

module.exports = function (limit) {
	var primes = util.createPrimeList(limit),
		length = primes.length;

	for (var a = 0; a < length; a++) {
		for (var b = a + 1; b < length; b++) {
			if (isPairsetPrime(primes[a], primes[b])) {
				for (var c = b + 1; c < length; c++) {
					if (isPairsetPrime(primes[a], primes[c]) &&
						isPairsetPrime(primes[b], primes[c])) {
						for (var d = c + 1; d < length; d++) {
							if (isPairsetPrime(primes[a], primes[d]) &&
								isPairsetPrime(primes[b], primes[d]) &&
								isPairsetPrime(primes[c], primes[d])) {
								for (var e = d + 1; e < length; e++) {
									if (isPairsetPrime(primes[a], primes[e]) &&
										isPairsetPrime(primes[b], primes[e]) &&
										isPairsetPrime(primes[c], primes[e]) &&
										isPairsetPrime(primes[d], primes[e])) {
										var set = [primes[a], primes[b], primes[c], primes[d], primes[e]];

										return set.reduce(function (previous, n) { return previous + n; }, 0);
									}
								}
							}
						}
					}
				}
			}
		}
	}

	return 0;
};
