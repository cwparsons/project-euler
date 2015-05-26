/**
 * test/06x/065.js
 */

var problem = require('../../problems/06x/065.js');
var assert = require('assert');

describe('Problem #065', function () {
	it('should return 17 on the 10th convergent', function () {
		assert.equal(17, problem(10));
	});

	it('should return 272 on the 100th convergent', function () {
		assert.equal(272, problem(100));
	});
});
