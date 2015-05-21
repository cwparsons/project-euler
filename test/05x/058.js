/**
 * test/05x/058.js
 */

var problem = require('../../problems/05x/058.js');
var assert = require('assert');

describe('Problem #058', function () {
	it('should return 26,241 when the limit is 0.1', function () {
		assert.equal(26241, problem(0.1));
	});
});
