/**
 * test/04x/046.js
 */

var problem = require('../../problems/04x/046.js');
var assert = require('assert');

describe('Problem #046', function () {
	it('should return 5,777 when the limit is 10,000', function () {
		assert.equal(5777, problem(10000));
	});
});
