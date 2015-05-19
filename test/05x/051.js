/**
 * test/05x/051.js
 */

var problem = require('../../problems/05x/051.js');
var assert = require('assert');

describe('Problem #051', function () {
	it('should return 121313 when the number of primes is 8', function () {
		this.timeout(3000);
		assert.equal(121313, problem(8));
	});
});
