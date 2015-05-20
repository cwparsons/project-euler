/**
 * test/05x/054.js
 */

var problem = require('../../problems/05x/054.js');
var assert = require('assert');

describe('Problem #054', function () {
	it('should return 376 when the file is ./054.json', function () {
		assert.equal(376, problem('./054.json'));
	});
});
