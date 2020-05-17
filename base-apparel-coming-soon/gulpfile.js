const gulp = require('gulp');
const less = require('gulp-less');
const pug = require('gulp-pug');
const browsersync = require('browser-sync');
const concat = require('gulp-concat');
const babel = require('gulp-babel');
const cssmin = require('gulp-cssmin');
const uglify = require('gulp-uglify');

const LessAutoprefix = require('less-plugin-autoprefix');

const autoprefix = new LessAutoprefix({ browsers: ['last 2 versions'] });

const compile_html = () => gulp
  .src('./src/index.pug')
  .pipe(pug())
  .pipe(gulp.dest('./dist'));

const compile_less = () => gulp
  .src('./src/less/main.less')
  .pipe(less({
    plugins: [autoprefix],
  }))
  .pipe(cssmin())
  .pipe(gulp.dest('./dist'))
  .pipe(browsersync.stream());

const scripts = () => gulp
  .src('./src/javascript/*.js')
  .pipe(concat('main.js'))
  .pipe(babel({
    presets: ['@babel/env'],
  }))
  .pipe(uglify())
  .pipe(gulp.dest('./dist'));

const assets = () => gulp
  .src('./images/*')
  .pipe(gulp.dest('./dist'));

const server = () => {
  compile_html();
  compile_less();
  scripts();
  assets();

  browsersync.init({
    server: {
      baseDir: 'dist',
    },
  });

  gulp.watch('./src/index.pug', compile_html);
  gulp.watch('./src/less/*.less', compile_less);
  gulp.watch('./src/javascript/*.js', scripts);
  gulp.watch('./images/*', assets);
  gulp.watch(['./dist/*.html', './dist/*.js']).on('change', () => browsersync.reload());
}

gulp.task('default', server);
