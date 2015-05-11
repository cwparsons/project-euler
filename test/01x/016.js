/**
 * test/01x/016.js
 */

var problem = require('../../problems/01x/016.js');
var assert = require('assert');

describe('Problem #016', function () {
	it('should return 26 when the exponent is 15', function () {
		assert.equal(26, problem(15));
	});

	it('should return 1,366 when the exponent is 1000', function () {
		assert.equal(1366, problem(1000));
	});
});
