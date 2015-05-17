/**
 * test/03x/035.js
 */

var problem = require('../../problems/03x/035.js');
var assert = require('assert');

describe('Problem #035', function () {
	it('should return 55 when the limit is 1,000,000', function () {
		assert.equal(55, problem(1000000));
	});
});
