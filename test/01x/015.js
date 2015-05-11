/**
 * test/01x/015.js
 */

var problem = require('../../problems/01x/015.js');
var assert = require('assert');

describe('Problem #015', function () {
	it('should return 6 when the grid size is 2x2', function () {
		assert.equal(6, problem(2));
	});

	it('should return 6 when the grid size is 20x20', function () {
		assert.equal(137846528820, problem(20));
	});
});
