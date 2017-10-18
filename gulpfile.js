var gulp = require('gulp');
var connect = require('gulp-connect');
var browserify = require("browserify");
var source = require('vinyl-source-stream');
var tsify = require("tsify");

gulp.task('scripts', function() {
  return browserify({
    basedir: '.',
    debug: true,
    entries: ['src/main.ts'],
    cache: {},
    packageCache: {}
  })
  .plugin(tsify)
  .bundle()
  .pipe(source('bundle.js'))
  .pipe(gulp.dest('dist'));
});

gulp.task('connect', function() {
  connect.server({
    root: 'dist',
    livereload: true,
    port: 4000
  });
});

gulp.task('watch', function() {
  gulp.watch('src/*.ts', ['scripts']);
});

gulp.task('live_server', ['connect', 'watch']);