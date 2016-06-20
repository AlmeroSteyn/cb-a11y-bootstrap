var gulp = require("gulp");
var less = require("gulp-less");

gulp.task("less", function() {
  gulp.src("less/bootstrap.grey.less")
    .pipe(less())
    .pipe(gulp.dest("css"));
  gulp.src("less/bootstrap.blue-grey.less")
    .pipe(less())
    .pipe(gulp.dest("css"));
});
