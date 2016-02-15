var gulp = require('gulp'),
	gutil = require('gulp-util'),
	shell = require('gulp-shell');



gulp.task('upload', shell.task([
	'aws s3 cp * s3://media.kbia.org/2016/feb/mizzou-state-fund/ --recursive'
]));


gulp.task('watch',function(){
	gutil.log('Gulp will say that this task has finished, but don\'t believe its dirty lies.');
	gutil.log('Hit \^c to actually exit watch mode.');
});