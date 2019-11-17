// Abaixo com a versão Gulp 4

var gulp = require('gulp');
var sass = require('gulp-sass');

gulp.task('sass', gulp.series( function() {
    return gulp.src('sass/*.sass')
    // converter o Sass em CSS
    .pipe(sass({outputStyle: 'compressed'}).on('error', sass.logError)) 
    .pipe(gulp.dest('css'));
}));

gulp.task('watch', gulp.series( function() {
    gulp.watch('sass/*.sass', gulp.parallel( ['sass'] ));
}));

gulp.task('default', gulp.series( ['sass', 'watch'] ));



// CÓDIGO FUNCIONANDO => BEM DE BOA
// var gulp = require('gulp');
// var sass = require('gulp-sass');

// gulp.task('sass', gulp.series( function() {
//     return gulp.src('sass/*.sass')
//     .pipe(sass()) // converter o Sass em CSS
//     .pipe(gulp.dest('css'));
// }));

// gulp.task('watch', gulp.series( function() {
//     gulp.watch('sass/*.sass', gulp.parallel( ['sass'] ));
// }));

// gulp.task('default', gulp.series( ['sass', 'watch'] ));
