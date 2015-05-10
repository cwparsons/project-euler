/**
 * test/01x/014.js
 */

var problem = require('../../problems/01x/014.js');
var assert = require('assert');

describe('Problem #014', function () {
	it('should return 837799 when the limit is 1,000,000', function () {
		assert.equal(837799, problem(1000000));
	});
});
