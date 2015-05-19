/**
 * test/05x/050.js
 */

var problem = require('../../problems/05x/050.js');
var assert = require('assert');

describe('Problem #050', function () {
	it('should return 41 when the size is 100', function () {
		assert.equal(41, problem(100));
	});

	it('should return 953 when the size is 1,000', function () {
		assert.equal(953, problem(1000));
	});

	it('should return 997,651 when the size is 1,000,000', function () {
		assert.equal(997651, problem(1000000));
	});
});
