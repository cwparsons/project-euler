/**
 * test/02x/024.js
 */

var problem = require('../../problems/02x/024.js');
var assert = require('assert');

describe('Problem #024', function () {
	it('should return 2,783,915,460 when the limit is 1,000,000', function () {
		this.timeout(5000);

		assert.equal(2783915460, problem(1000000));
	});
});
