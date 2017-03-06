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
    imagemin = require('gulp-imagemin'),
    htmlmin = require('gulp-htmlmin'),
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
    
var files_Watch = './src/files/';

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

//Setup configuration for local server
var config = {
      server: {
        baseDir: './build'
      },
      tunnel: true,
      host: 'localhost',
      port: 9000,
      logPrefix: 'I am Vlad Semenets'
};

// Task for HTML
gulp.task('html', function () {
  return gulp.src('./src/**/*.html')
      .pipe(rigger())
      .pipe(htmlmin({
        collapseWhitespace: true,
        removeComments: true,
        minifyJs: true,
        minifyCSS: true
      }))
      .pipe(gulp.dest('./build/'))
      .pipe(notify({ message: notify_Html }))
      .pipe(reload({ stream: true }))
})

//Task for CSS-styles
gulp.task('styles', function() {
  return gulp.src('./src/css/main.styl')
        //.pipe(sourcemaps.init())
          .pipe(stylus({
            'include css': true,
            compress: true
          }
          ))
          .pipe(autoprefixer({
            browsers: ['> 1%'],
            cascade: false
          }))
          .pipe(cssmin())
        //.pipe(sourcemaps.write())
        .pipe(gulp.dest('./build/css/'))
        .pipe(notify({ message: notify_Stylus }))
        .pipe(reload({ stream: true }))
});

//Task for Fonts
gulp.task('fonts', function() {
  return gulp.src('./src/fonts/*/*.*')
        .pipe(gulp.dest('./build/fonts/'))
        .pipe(reload({stream: true}))
})

//Task for JavaScript files
gulp.task('js', function() {
  return gulp.src('./src/js/index.js')
        .pipe(rigger())
        .pipe(sourcemaps.init())
        .pipe(uglify())
        .pipe(sourcemaps.write())
        .pipe(gulp.dest('./build/js/'))
        .pipe(notify({ message: notify_JS }))
        .pipe(reload({ stream: true }))
})

//Task for images
gulp.task('img', function() {
  return gulp.src('./src/img/*.*')
        .pipe(imagemin())
        .pipe(gulp.dest('./build/img'))
        .pipe(reload({ stream: true }))
})
//Task for additional files
gulp.task('files', function() {
  return gulp.src('./src/files/*.*')
        .pipe(gulp.dest('./build/files/'))
        .pipe(reload({stream: true}))
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
  watch([files_Watch], function (event, cb) {
    gulp.start('files')
  });
});
  gulp.task('webserver', function () {
    browserSync(config)
  });

gulp.task('default', [ 'styles','html', 'fonts', 'files', 'js', 'img', 'webserver','watch' ]);
// gulp.task('wp_build', ['html', 'styles']);
