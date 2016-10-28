var gulp = require('gulp');
var clean = require('gulp-clean');
var typescript = require('gulp-typescript');

var config = {
  src: 'src/**/*.ts',
  dest: 'dest'
};

gulp.task('clean', function() {
  return gulp.src(config.dest)
    .pipe(clean());
});

gulp.task('typescript', ['clean'], function() {
  return gulp.src(config.src)
    .pipe(typescript({
      module: 'commonjs',
      target: 'ES5',
      typescript: require('typescript')
    }))
    .pipe(gulp.dest(config.dest));
});

gulp.task('build', function() {
  gulp.start('typescript');
});

gulp.task('default', ['clean'], function() {
  gulp.start('typescript');
  gulp.watch([
    config.src
  ], ['typescript']);
});
