/**
 * test/04x/044.js
 */

var problem = require('../../problems/04x/044.js');
var assert = require('assert');

describe('Problem #044', function () {
	it('should return 5482660 when the limit is y', function () {
		this.timeout(1000 * 1000);
		assert.equal(5482660, problem(10000));
	});
});
