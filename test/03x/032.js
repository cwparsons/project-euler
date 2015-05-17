/**
 * test/03x/032.js
 */

var problem = require('../../problems/03x/032.js');
var assert = require('assert');

describe('Problem #032', function () {
	it('should return 45228 when the number of digits is 9', function () {
		assert.equal(45228, problem(9));
	});
});
