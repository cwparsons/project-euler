/**
 * test/04x/043.js
 */

var problem = require('../../problems/04x/043.js');
var assert = require('assert');

describe('Problem #043', function () {
	it('should return 16695334890 when the limit is 18', function () {
		this.timeout(5000);

		assert.equal(16695334890, problem(18));
	});
});
