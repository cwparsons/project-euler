/**
 * test/007.js
 */

var problem = require('../problems/007.js');
var assert = require('assert');

describe('Problem #7', function () {
	it('should return 13 when the prime index is 6', function () {
		assert.equal(13, problem(6));
	});

	it('should return 104,743 when the prime index is 10,001', function () {
		assert.equal(104743, problem(10001));
	});
});
