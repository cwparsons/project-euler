/**
 * test/03x/034.js
 */

var problem = require('../../problems/03x/034.js');
var assert = require('assert');

describe('Problem #034', function () {
	it('should return 40,730 when the limit is 100,000', function () {
		assert.equal(40730, problem(100000));
	});
});
