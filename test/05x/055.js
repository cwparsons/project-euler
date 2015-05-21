/**
 * test/05x/055.js
 */

var problem = require('../../problems/05x/055.js');
var assert = require('assert');

describe('Problem #055', function () {
	it('should return 249 when the limit is 10,000', function () {
		assert.equal(249, problem(10000));
	});
});
