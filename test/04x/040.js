/**
 * test/04x/040.js
 */

var problem = require('../../problems/04x/040.js');
var assert = require('assert');

describe('Problem #040', function () {
	it('should return 1 when the array is [12]', function () {
		assert.equal(1, problem([12]));
	});

	it('should return 210 when the array is [1, 10, 100, 1000, 10000, 100000]', function () {
		assert.equal(210, problem([1, 10, 100, 1000, 10000, 100000]));
	});
});
