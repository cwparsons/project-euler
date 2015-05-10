/**
 * test/00x/006.js
 */

var problem = require('../../problems/00x/006.js');
var assert = require('assert');

describe('Problem #6', function () {
	it('should return 2,640 when the limit is 10', function () {
		assert.equal(2640, problem(10));
	});

	it('should return 25,164,150 when the limit is 100', function () {
		assert.equal(25164150, problem(100));
	});
});
