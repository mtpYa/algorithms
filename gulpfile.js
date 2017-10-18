var gulp = require('gulp');
var ts = require('gulp-typescript');
var connect = require('gulp-connect');

gulp.task('scripts', function() {
  return gulp.src('src/**/*.ts')
    .pipe(ts({
      noImplicitAny: true,
      outFile: 'bundle.js'
    }))
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