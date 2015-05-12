/**
 * test/02x/025.js
 */

var problem = require('../../problems/02x/025.js');
var assert = require('assert');

describe('Problem #025', function () {
	it('should return 12 when the number of digits is 3', function () {
		assert.equal(12, problem(3));
	});

	it('should return 4782 when the number of digits is 1000', function () {
		assert.equal(4782, problem(1000));
	});
});
