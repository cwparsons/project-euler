/**
 * test/00x/001.js
 */

var problem = require('../../problems/00x/001.js');
var assert = require('assert');

describe('Problem #001', function () {
	it('should return 23 when the limit is 10', function () {
		assert.equal(23, problem(10));
	});

	it('should return 233,168 when the limit is 1,000', function () {
		assert.equal(233168, problem(1000));
	});
});
