/**
 * test/04x/041.js
 */

var problem = require('../../problems/04x/041.js');
var assert = require('assert');

describe('Problem #041', function () {
	it('should return 7,652,413 when the limit is 7', function () {
		this.timeout(2000);

		assert.equal(7652413, problem(7));
	});
});
