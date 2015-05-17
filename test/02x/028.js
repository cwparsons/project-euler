/**
 * test/02x/028.js
 */

var problem = require('../../problems/02x/028.js');
var assert = require('assert');

describe('Problem #028', function () {
	it('should return x when the spiral size is 5', function () {
		assert.equal(101, problem(5));
	});
	it('should return x when the spiral size is 1001', function () {
		assert.equal(669171001, problem(1001));
	});
});
