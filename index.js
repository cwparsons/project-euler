/**
 * index.js
 */

var fs = require('fs');

var action = process.argv[2];

// Create a new problem and test file
if (action === 'new') {
	var folder = process.argv[3];
	var filename = process.argv[4];

	if (folder && filename) {
		var problemFolder = './problems/' + folder;

		fs.exists(problemFolder, function (folderExists) {
			if (!folderExists) {
				fs.mkdirSync(problemFolder, '0766');
			}

			var problemFilepath = problemFolder + '/' + filename + '.js';

			fs.exists(problemFilepath, function (exists) {
				if (exists) {
					console.log('Problem already exists');
				} else {
					var problemTemplate = '\/**\r\n * problems/' + folder + '/' + filename + '.js\r\n *\/\r\n\r\nmodule.exports = function (arg) {\r\n\r\n};';

					fs.writeFile(problemFilepath, problemTemplate, function (err) {
						if (err) {
							return console.log(err);
						}
					});
				}
			});
		});

		var testFolder = './test/' + folder;

		fs.exists(testFolder, function (folderExists) {
			if (!folderExists) {
				fs.mkdirSync(testFolder, 0766);
			}

			var testFilepath = testFolder + '/' + filename + '.js';

			fs.exists(testFilepath, function (exists) {
				if (exists) {
					console.log('Test already exists');
				} else {
					var testTemplate = '\/**\r\n * test\/' + folder + '\/' + filename + '.js\r\n */\r\n\r\nvar problem = require(\'../../problems/' + folder + '/' + filename + '.js\');\r\nvar assert = require(\'assert\');\r\n\r\ndescribe(\'Problem #' + filename + '\', function () {\r\n\t\/\/ it(\'should return x when the limit is y\', function () {\r\n\t\t\/\/ assert.equal(x, problem(y));\r\n\t\/\/ });\r\n});\r\n';

					fs.writeFile(testFilepath, testTemplate, function (err) {
						if (err) {
							return console.log(err);
						}
					});
				}
			});
		});
	}
} else {
	var args = process.argv[3];
	var problem = require('./problems/' + action + '.js');

	console.log(problem(args));
}
