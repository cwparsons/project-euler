/**
 * test/00x/009.js
 */

var problem = require('../../problems/00x/009.js');
var assert = require('assert');

describe('Problem #9', function () {
	it('should return 31,875,000 when the sum is 1000', function () {
		assert.equal(31875000, problem(1000));
	});
});
