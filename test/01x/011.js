/**
 * test/01x/011.js
 */

var problem = require('../../problems/01x/011.js');
var assert = require('assert');

describe('Problem #011', function () {
	it('should return 70,600,674 when the digits are 4', function () {
		assert.equal(70600674, problem(4));
	});
});
