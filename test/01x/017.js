/**
 * test/01x/017.js
 */

var problem = require('../../problems/01x/017.js');
var assert = require('assert');

describe('Problem #017', function () {
	it('should return 19 when the limit is 5', function () {
		assert.equal(19, problem(5));
	});

	it('should return 21,124 when the limit is 1000', function () {
		assert.equal(21124, problem(1000));
	});
});
