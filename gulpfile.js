const gulp = require('gulp');
const eslint = require('gulp-eslint');

var files = ['./lib/**/*.js', 'gulpfile.js', 'server.js', './test/**/*test.js'];

gulp.task('lint', () => {
  return gulp.src('./test/**/*test.js')
  .pipe(eslint({
    'env': [
      'mocha'
    ]
  }))
  .pipe(eslint.format());
});
