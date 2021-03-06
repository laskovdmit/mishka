'use strict';

const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const postcss = require('gulp-postcss');
const posthtml = require('gulp-posthtml');
const include = require('posthtml-include');
const autoprefixer = require('autoprefixer');
const minify = require('gulp-csso');
const webp = require('gulp-webp');
const rename = require('gulp-rename');
const del = require('del');

gulp.task('clean', function() {
  return del('build');
});

gulp.task('copy', function() {
  return gulp.src([
    './img/**',
    './js/**',
    './css/**'
  ], {
    base: '.'
  })
  .pipe(gulp.dest('./build'));
});

gulp.task('style', function(){
    return gulp.src('./sass/style.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(postcss([ autoprefixer() ]))
    .pipe(gulp.dest('./build/css'))
    .pipe(minify())
    .pipe(rename("style.min.css"))
    .pipe(gulp.dest('./build/css'));
});

gulp.task('html', function() {
  return gulp.src('./*.html')
  .pipe(posthtml([
    include()
  ]))
  .pipe(gulp.dest('./build'));
});

gulp.task('build', gulp.series(
  'clean',
  'copy',
  'style',
  'html',
  function (done) {
    done();
  }
));

gulp.task('watch', function() {
  gulp.watch('./sass/**/*.scss', gulp.series('style'));
  gulp.watch('*.html', gulp.series('html'));
});

gulp.task('webp', function() {
  return gulp.src('./img/**/*.{png,jpg}')
  .pipe(webp({quality: 90}))
  .pipe(gulp.dest('./img'));
});