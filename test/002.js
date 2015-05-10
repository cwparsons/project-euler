/**
 * test/002.js
 */

var problem = require('../problems/002.js');
var assert = require('assert');

describe('Problem #2', function () {
	it('should return 44 when the limit is 100', function () {
		assert.equal(44, problem(100));
	});

	it('should return 4,613,732 when the limit is 4,000,000', function () {
		assert.equal(4613732, problem(4000000));
	});
});
