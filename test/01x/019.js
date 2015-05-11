/**
 * test/01x/019.js
 */

var problem = require('../../problems/01x/019.js');
var assert = require('assert');

describe('Problem #019', function () {
	it('should return 171 when the end year is 2001', function () {
		assert.equal(171, problem(2001));
	});
});
