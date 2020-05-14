const gulp = require('gulp');
const pug = require('gulp-pug');
const Less = require('gulp-less');
const cssmin = require('gulp-cssmin');
const browsersync = require('browser-sync');
const LessAutoprefix = require('less-plugin-autoprefix');
const path = require('path');

const autoprefix = new LessAutoprefix({ browsers: ['last 2 versions'] });

const html = () => gulp
  .src('./src/index.pug')
  .pipe(pug())
  .pipe(gulp.dest('./dist'));

const less = () => gulp
  .src('./src/style.less')
  .pipe(Less({
    plugins: [autoprefix],
  }))
  .pipe(cssmin())
  .pipe(gulp.dest('./dist'))
  .pipe(browsersync.stream());

const assets = () => gulp
  .src('./images/**/*')
  .pipe(gulp.dest('./dist'));

const server = () => {
  html();
  less();
  assets();

  browsersync.init({
    server: {
      baseDir: 'dist',
    },
  });

  gulp.watch('./src/index.pug', html);
  gulp.watch('./src/*.less', less);
  gulp.watch('./images', assets);
  gulp.watch('./dist/*.html').on('change', () => browsersync.reload());
}

gulp.task('default', server);
