let gulp = require('gulp');
let rename = require('gulp-rename');
let uglify = require('gulp-uglify');
let minify = require('gulp-minify');

//task
gulp.task('jsfinal', () => {
    return gulp.src('dialog-plugin.js').pipe(uglify()).pipe(rename('dialog.min.js')).pipe(gulp.dest('dist'));
});



gulp.task('watch', () => {
	gulp.watch('*.js', ['jsfinal']);
});

gulp.task('default', ['watch']);