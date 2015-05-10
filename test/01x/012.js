/**
 * test/01x/012.js
 */

var problem = require('../../problems/01x/012.js');
var assert = require('assert');

describe('Problem #012', function () {
	it('should return 28 when the limit is 5 divisors', function () {
		assert.equal(28, problem(5));
	});

	it('should return 76,576,500 when the limit is 500 divisors', function () {
		assert.equal(76576500, problem(500));
	});
});
