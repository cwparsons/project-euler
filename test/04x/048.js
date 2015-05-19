/**
 * test/04x/048.js
 */

var problem = require('../../problems/04x/048.js');
var assert = require('assert');

describe('Problem #048', function () {
	it('should return 0,405,071,317 when the limit is 10', function () {
		assert.equal('0405071317', problem(10));
	});

	it('should return 9,110,846,700 when the limit is 1000', function () {
		assert.equal('9110846700', problem(1000));
	});
});
