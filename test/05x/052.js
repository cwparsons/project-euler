/**
 * test/05x/052.js
 */

var problem = require('../../problems/05x/052.js');
var assert = require('assert');

describe('Problem #052', function () {
	it('should return 142857 when the max multiple is 6', function () {
		assert.equal(142857, problem(6));
	});
});
