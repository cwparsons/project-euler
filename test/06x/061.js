/**
 * test/06x/061.js
 */

var problem = require('../../problems/06x/061.js');
var assert = require('assert');

describe('Problem #061', function () {
	it('should return 28,684 when the limit is 200', function () {
		assert.equal(28684, problem(200));
	});
});
