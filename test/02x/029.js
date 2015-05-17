/**
 * test/02x/029.js
 */

var problem = require('../../problems/02x/029.js');
var assert = require('assert');

describe('Problem #029', function () {
	it('should return 15 when the limit is 5', function () {
		assert.equal(15, problem(5));
	});

	it('should return 9183 when the limit is 100', function () {
		assert.equal(9183, problem(100));
	});
});
