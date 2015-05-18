/**
 * test/03x/036.js
 */

var problem = require('../../problems/03x/036.js');
var assert = require('assert');

describe('Problem #036', function () {
	it('should return 872,187 when the limit is 1,000,000', function () {
		assert.equal(872187, problem(1000000));
	});
});
