/**
 * test/03x/037.js
 */

var problem = require('../../problems/03x/037.js');
var assert = require('assert');

describe('Problem #037', function () {
	it('should return 748,317 when the limit is 1,000,000', function () {
		assert.equal(748317, problem(1000000));
	});
});
