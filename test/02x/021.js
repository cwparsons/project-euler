/**
 * test/02x/021.js
 */

var problem = require('../../problems/02x/021.js');
var assert = require('assert');

describe('Problem #021', function () {
	it('should return 31626 when the limit is 10000', function () {
		assert.equal(31626, problem(10000));
	});
});
