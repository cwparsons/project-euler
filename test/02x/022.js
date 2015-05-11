/**
 * test/02x/022.js
 */

var problem = require('../../problems/02x/022.js');
var assert = require('assert');

describe('Problem #022', function () {
	it('should return 871,198,282 when the file is ./names.json', function () {
		assert.equal(871198282, problem('./names.json'));
	});
});
