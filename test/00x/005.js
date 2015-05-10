/**
 * test/00x/005.js
 */

var problem = require('../../problems/00x/005.js');
var assert = require('assert');

describe('Problem #5', function () {
	it('should return 2,520 when the limit is 10', function () {
		assert.equal(2520, problem(10));
	});

	it('should return 232,792,560 when the limit is 20', function () {
		assert.equal(232792560, problem(20));
	});
});
