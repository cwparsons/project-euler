/**
 * test/04x/047.js
 */

var problem = require('../../problems/04x/047.js');
var assert = require('assert');

describe('Problem #047', function () {
	it('should return 14 when the number of consecutive primes is 2', function () {
		assert.equal(14, problem(2));
	});

	it('should return 644 when the number of consecutive primes is 3', function () {
		assert.equal(644, problem(3));
	});

	it('should return 134,043 when the number of consecutive primes is 4', function () {
		assert.equal(134043, problem(4));
	});
});
