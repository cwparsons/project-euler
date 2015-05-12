/**
 * test/02x/027.js
 */

var problem = require('../../problems/02x/027.js');
var assert = require('assert');

describe('Problem #027', function () {
	it('should return -59,231 when the limit is 1000', function () {
		assert.equal(-59231, problem(1000));
	});
});
