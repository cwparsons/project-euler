/**
 * test/02x/023.js
 */

var problem = require('../../problems/02x/023.js');
var assert = require('assert');

describe('Problem #023', function () {
	it('should return 4179871 when the limit is 28123', function () {
		assert.equal(4179871, problem(28123));
	});
});
