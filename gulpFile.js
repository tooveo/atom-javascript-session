"use strict";

var gulp = require('gulp');
var concat = require('gulp-concat');
var minify = require('gulp-uglify');
var rename = require('gulp-rename');
var selfExecute = require('gulp-self-execute');

gulp.task('js', function () {
  return gulp.src(['atom-session-sdk/src/*class.js'])
    .pipe(concat('session.sdk.js'))
    .pipe(selfExecute())
    .pipe(gulp.dest('dist/'))
    .pipe(rename('session.sdk.min.js'))
    .pipe(minify())
    .pipe(gulp.dest('dist/'))
});

gulp.task('default', ['js'], function () {});
