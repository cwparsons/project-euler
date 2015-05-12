/**
 * test/02x/026.js
 */

var problem = require('../../problems/02x/026.js');
var assert = require('assert');

describe('Problem #026', function () {
	it('should return 7 when the limit is 10', function () {
		assert.equal(7, problem(10));
	});

	it('should return 983 when the limit is 1000', function () {
		assert.equal(983, problem(1000));
	});
});
