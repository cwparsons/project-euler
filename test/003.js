/**
 * test/003.js
 */

var problem = require('../problems/003.js');
var assert = require('assert');

describe('Problem #3', function () {
	it('should return 44 when the prime factor is 13,195', function () {
		assert.equal(29, problem(13195));
	});

	it('should return 6,857 when the prime factor is 600,851,475,143', function () {
		assert.equal(6857, problem(600851475143));
	});
});
