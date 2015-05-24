/**
 * test/06x/062.js
 */

var problem = require('../../problems/06x/062.js');
var assert = require('assert');

describe('Problem #062', function () {
	it('should return 41,063,625 when the limit is 3', function () {
		assert.equal(41063625, problem(3));
	});

	it('should return 127,035,954,683 when the limit is 5', function () {
		assert.equal(127035954683, problem(5));
	});
});
