const gulp = require('gulp');
const clean = require('gulp-clean');
const typescript = require('gulp-typescript');
const mocha = require('gulp-mocha');

const config = {
  src: [
    'src/**/*.ts',    
  ],
  dest: 'dest',
};

gulp.task('clean', () => {
  return gulp.src(config.dest, { allowEmpty: true })
    .pipe(clean());
});

gulp.task('typescript', gulp.series('clean', () => {
  return gulp.src(config.src)
    .pipe(typescript({
      module: 'commonjs',
      target: 'ES6',
      typescript: require('typescript')
    }))
    .pipe(gulp.dest(config.dest));
}));

gulp.task('build', gulp.series('typescript'));

gulp.task('test', gulp.series('typescript', () => {
  return gulp.src(config.dest + '/**/*.spec.js')
    .pipe(mocha({ reporter: 'spec' }))
}));

gulp.task('default', gulp.series('clean', 'typescript', () => {
  gulp.watch([
    config.src
  ], gulp.series('typescript'));
}));
