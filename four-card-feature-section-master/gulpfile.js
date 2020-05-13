const gulp = require('gulp');
const sass = require('gulp-sass');
const pug = require('gulp-pug');
const browsersync = require('browser-sync');

const html = () => gulp
  .src('./src/index.pug')
  .pipe(pug())
  .pipe(gulp.dest('./dist'))

const scss = () => gulp
  .src('./src/*.scss')
  .pipe(sass({
    onError: browsersync.notify,
    outputStyle: 'compressed',
  }))
  .pipe(gulp.dest('./dist'))
  .pipe(browsersync.stream());

const assets = () => gulp
  .src('./images/**/*')
  .pipe(gulp.dest('./dist'));

gulp.task('default', () => {
  html();
  scss();
  assets();

  browsersync.init({
    server: {
      baseDir: 'dist',
    },
  });

  gulp.watch('./src/*.scss', scss);
  gulp.watch('./src/index.pug', html);
  gulp.watch('./images/**/*', assets);
  gulp.watch('./dist/*.html').on('change', () => browsersync.reload());
})

