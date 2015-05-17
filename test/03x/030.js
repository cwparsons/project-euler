/**
 * test/03x/030.js
 */

var problem = require('../../problems/03x/030.js');
var assert = require('assert');

describe('Problem #030', function () {
	it('should return 19316 when the limit is 4', function () {
		assert.equal(19316, problem(4));
	});

	it('should return 443839 when the limit is 5', function () {
		assert.equal(443839, problem(5));
	});
});
