/**
 * test/02x/020.js
 */

var problem = require('../../problems/02x/020.js');
var assert = require('assert');

describe('Problem #020', function () {
	it('should return 27 when the factorial is 10', function () {
		assert.equal(27, problem(10));
	});

	it('should return 648 when the factorial is 100', function () {
		assert.equal(648, problem(100));
	});
});
