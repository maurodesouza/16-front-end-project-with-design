const gulp = require('gulp');
const sass = require('gulp-sass');
const pug = require('gulp-pug');
const browsersync = require('browser-sync');

const html = () => gulp
  .src('./src/index.pug')
  .pipe(pug())
  .pipe(gulp.dest('./dist'));

const scss = () => gulp
  .src('./src/*.scss')
  .pipe(sass({
    outputStyle: 'compressed',
    onError: browsersync.notify,
  }))
  .pipe(gulp.dest('./dist'))
  .pipe(browsersync.stream());

const server = () => {

  html();
  scss();

  browsersync.init({
    server: {
      baseDir: 'dist',
    }
  });

  gulp.watch('./src/index.pug', html);
  gulp.watch('./src/*.scss', scss);
  gulp.watch('./dist/*.html').on('change', () =>  browsersync.reload());
}

gulp.task('default', server);




