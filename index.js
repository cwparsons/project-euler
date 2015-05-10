/**
 * index.js
 */

var problemNumber = process.argv[2];
var args = process.argv[3];

var problem = require('./problems/' + problemNumber + '.js');

console.log(problem(args));
