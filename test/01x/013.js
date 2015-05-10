/**
 * test/01x/013.js
 */

var problem = require('../../problems/01x/013.js');
var assert = require('assert');

describe('Problem #013', function () {
	it('should return 5,537,376,230 when the number of digits is 10', function () {
		assert.equal(5537376230, problem(10));
	});
});
