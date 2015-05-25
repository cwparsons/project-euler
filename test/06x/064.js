/**
 * test/06x/064.js
 */

var problem = require('../../problems/06x/064.js');
var assert = require('assert');

describe('Problem #064', function () {
	it('should return 1,322 when the limit is 10,000', function () {
		assert.equal(1322, problem(10000));
	});
});
