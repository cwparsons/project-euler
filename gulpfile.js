/**
 * gulpfile.js
 * Runs code style and tests on Project Euler solutions.
 */

var gulp = require('gulp');
var gulpsync = require('gulp-sync')(gulp);
var jscs = require('gulp-jscs');
var mocha = require('gulp-mocha');

gulp.task('jscs', function () {
	return gulp.src([
			'problems/**/*.js',
			'test/**/*.js'
		])
		.pipe(jscs());
});

gulp.task('mocha', function () {
	return gulp.src([
			'test/**/*.js'
		])
		.pipe(mocha());
});

gulp.task('test', gulpsync.sync(['jscs', 'mocha']));
