var gulp = require('gulp');
var connect = require('gulp-connect');

gulp.task('serve', function () {
    connect.server({
        root: 'www',
        port: 8000,
        livereload: true
    });
});
