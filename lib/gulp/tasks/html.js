'use strict';

var gulp            = require('gulp'),
    config          = require('../gulpconfig.json'),
    jade            = require('gulp-jade'),
    jadeInheritance = require('gulp-jade-inheritance'),
    changed         = require('gulp-changed'),
    cached          = require('gulp-cached'),
    gulpif          = require('gulp-if'),
    filter          = require('gulp-filter'),
    browserSync     = require('browser-sync'),
    reload          = browserSync.reload;

gulp.task('html', function() {
  return gulp.src(config.src_path + 'html/*.jade')
    .pipe(jade({
      pretty: true
    }))
    .pipe(gulp.dest(config.dist_path))
    .pipe(reload({ stream: true }));
});