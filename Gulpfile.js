var gulp = require('gulp');
var clean = require('gulp-clean');
var typescript = require('gulp-typescript');
var mocha = require('gulp-mocha');

var config = {
  src: [
    'src/**/*.ts',    
  ],
  dest: 'dest',
};

gulp.task('clean', function() {
  return gulp.src(config.dest, { allowEmpty: true })
    .pipe(clean());
});

gulp.task('typescript', gulp.series('clean', function() {
  return gulp.src(config.src)
    .pipe(typescript({
      module: 'commonjs',
      target: 'ES6',
      typescript: require('typescript')
    }))
    .pipe(gulp.dest(config.dest));
}));

gulp.task('build', gulp.series('typescript'));

gulp.task('test', gulp.series('typescript', function() {
  return gulp.src(config.dest + '/**/*.spec.js')
    .pipe(mocha({ reporter: 'spec' }))
}));

gulp.task('default', gulp.series('clean', 'typescript', function() {
  gulp.watch([
    config.src
  ], gulp.series('typescript'));
}));
