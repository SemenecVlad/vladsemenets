"use strict";

// TODO: Обновить gulpfile и все зависимости

// Dependencies
var gulp = require('gulp'),
    watch = require('gulp-watch'),
    notify = require('gulp-notify'),
    stylus = require('gulp-stylus'),
    autoprefixer = require('gulp-autoprefixer'),
    browserSync = require('browser-sync'),
    reload = browserSync.reload,
    cssmin = require('gulp-clean-css'),
    watchify = require('watchify'),
    uglify = require('gulp-uglify'),
    sourcemaps = require('gulp-sourcemaps'),
    rigger = require('gulp-rigger'),
    watch = require('gulp-watch');

// Configuration of tasks
var notify_Stylus = 'Styles compilation is complete!',
    notify_Html = 'HTML compilation is complete!',
    notify_JS = 'JavaScript compilation is complete!',
    notify_Img = 'Images are updated!';

var styles_Watch = './src/css/',
    styles_From = './src/css/main.styl',
    styles_To = './build/css/';

var html_Dir = './src/**/*.html',
    html_Watch = './src/**/*.html',
    html_From = './src/html/*.html',
    html_To = './build/';

var js_Watch = './src/js/index.js';
var img_Watch = './src/img';
var preprocessContext = {
        NODE_ENV: 'dev',
        BUILD: 'dev',
        DEBUG: true
};

var config = {
      server: {
        baseDir: './build'
      },
      tunnel: true,
      host: 'localhost',
      port: 9000,
      logPrefix: 'I am Vlad Semenets'
};

// Tasks
gulp.task('html', function () {
  return gulp.src('./src/**/*.html')
      .pipe(rigger())
      .pipe(gulp.dest('./build/'))
      .pipe(notify({ message: notify_Html }))
      .pipe(reload({ stream: true }))
})
gulp.task('styles', function() {
  return gulp.src('./src/css/main.styl')
        //.pipe(sourcemaps.init())
          .pipe(stylus({
            'include css': true,
            compress: true
          }
          ))
          .pipe(autoprefixer())
          .pipe(cssmin())
        //.pipe(sourcemaps.write())
        .pipe(gulp.dest('./build/css/'))
        .pipe(notify({ message: notify_Stylus }))
        .pipe(reload({ stream: true }))
});
gulp.task('js', function() {
  return gulp.src('./src/js/index.js')
        .pipe(rigger())
        .pipe(sourcemaps.init())
        .pipe(sourcemaps.write())
        .pipe(gulp.dest('./build/js/'))
        .pipe(notify({ message: notify_JS }))
        .pipe(reload({ stream: true }))
})
gulp.task('img', function() {
  return gulp.src('./src/img/*.*')
        .pipe(gulp.dest('./build/img'))
        .pipe(reload({ stream: true }))
})
// Task runners
gulp.task('watch', function() {
  watch([html_Watch], function (event, cb) {
    gulp.start('html')
  });
  watch([styles_Watch], function (event, cb) {
    gulp.start('styles')
  });
  watch([js_Watch], function (event, cb) {
    gulp.start('js')
  });
  watch([img_Watch], function (event, cb) {
    gulp.start('img')
  });
});
  gulp.task('webserver', function () {
    browserSync(config)
  });

gulp.task('default', [ 'styles','html', 'js', 'img', 'webserver','watch' ]);
// gulp.task('wp_build', ['html', 'styles']);
