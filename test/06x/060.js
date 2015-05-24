/**
 * test/06x/060.js
 */

var problem = require('../../problems/06x/060.js');
var assert = require('assert');

describe('Problem #060', function () {
	it('should return 26,033 when the limit is 10,000', function () {
		this.timeout(20000);
		assert.equal(26033, problem(10000));
	});
});
