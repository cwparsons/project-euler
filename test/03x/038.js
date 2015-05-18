/**
 * test/03x/038.js
 */

var problem = require('../../problems/03x/038.js');
var assert = require('assert');

describe('Problem #038', function () {
	it('should return 932,718,654 when the number of digits is 9', function () {
		assert.equal(932718654, problem(9));
	});
});
