/**
 * test/008.js
 */

var problem = require('../problems/008.js');
var assert = require('assert');

describe('Problem #8', function () {
	it('should return 5,832 when the number of digits is 4', function () {
		assert.equal(5832, problem(4));
	});

	it('should return 23,514,624,000 when the number of digits is 13', function () {
		assert.equal(23514624000, problem(13));
	});
});
