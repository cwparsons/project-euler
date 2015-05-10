/**
 * test/010.js
 */

var problem = require('../problems/010.js');
var assert = require('assert');

describe('Problem #10', function () {
	it('should return 17 when the limit is 10', function () {
		assert.equal(17, problem(10));
	});

	it('should return 142,913,828,922 when the limit is 2,000,000', function () {
		assert.equal(142913828922, problem(2000000));
	});
});
