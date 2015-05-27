/**
 * test/06x/067.js
 */

var problem = require('../../problems/06x/067.js');
var assert = require('assert');

describe('Problem #067', function () {
	it('should return 7,273 when the filename is 067.json', function () {
		assert.equal(7273, problem('./067.json'));
	});
});
