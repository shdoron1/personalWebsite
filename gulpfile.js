// include gulp
var gulp = require('gulp');

// Include Our Plugins
var jshint = require('gulp-jshint');
var sass = require('gulp-sass');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var rename = require('gulp-rename');
var livereload = require('gulp-livereload');

// for image compression: https://www.youtube.com/watch?v=v259QplNDKk
// auto prefixer for different browser versions also option

// so gulp doesn't terminate after errors
function errorLog(error) {
    console.error.bind(error);
    this.emit('end');
}
var paths = {
  images: 'client/img/**/*'
};

// Lint Task
gulp.task('lint', function() {
    return gulp.src('js/*.js')
        .pipe(jshint())
        .pipe(jshint.reporter('default'));
});

// Compile Our Sass
gulp.task('sass', function() {
    return gulp.src('scss/*.scss')
        .pipe(sass())
        .on('error', errorLog)
        .pipe(gulp.dest('build/css'))
        .pipe(livereload());
});

// Concatenate & Minify JS
gulp.task('scripts', function() {
    return gulp.src('js/*.js')
        .pipe(concat('all.js'))
        .pipe(gulp.dest('build/js'))
        .pipe(rename('all.min.js'))
        .pipe(uglify())
        .on('error', errorLog)
        .pipe(gulp.dest('build/js'));
});

// Watch Files For Changes
gulp.task('watch', function() {
    var server = livereload();
    gulp.watch('js/*.js', ['lint', 'scripts']);
    gulp.watch('scss/*.scss', ['sass']);
});


// Default Task
gulp.task('default', ['lint', 'sass', 'scripts', 'watch']);

