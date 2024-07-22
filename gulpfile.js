const gulp = require('gulp');
const less = require('gulp-less');

gulp.task('less', function () {
    return gulp.src('./less/styles.less')
        .pipe(less())
        .pipe(gulp.dest('./'));
});

gulp.task('watch', function () {
    gulp.watch('./less/**/*.less', gulp.series('less'));
});

gulp.task('default', gulp.series('less', 'watch'));
