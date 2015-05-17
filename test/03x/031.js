/**
 * test/03x/031.js
 */

var problem = require('../../problems/03x/031.js');
var assert = require('assert');

describe('Problem #031', function () {
	it('should return 73682 when the limit is 200', function () {
		assert.equal(73682, problem(200));
	});
});
