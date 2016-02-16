var gulp = require('gulp');
var uglify = require('gulp-uglify');
var rename = require("gulp-rename");

var paths = {
  scripts: ['src/**/*.js']
};

gulp.task('scripts', function() {
  return gulp.src(paths.scripts)
    .pipe(uglify())
    .pipe(rename({suffix: '.min'})) 
    .pipe(gulp.dest('dist'));
});

