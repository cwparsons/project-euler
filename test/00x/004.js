/**
 * test/00x/004.js
 */

var problem = require('../../problems/00x/004.js');
var assert = require('assert');

describe('Problem #4', function () {
	it('should return 9,009 when the number of digits is 2', function () {
		assert.equal(9009, problem(2));
	});

	it('should return 906,609 when the number of digits is 3', function () {
		assert.equal(906609, problem(3));
	});
});
