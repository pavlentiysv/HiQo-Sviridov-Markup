var gulp = require("gulp");
var sass = require("gulp-sass");
var htmlValidator = require("gulp-html");
var htmlmin = require("gulp-htmlmin");
var autoprefixer = require("gulp-autoprefixer");
var change = require("gulp-change");
var browserSync = require("browser-sync").create();

var allStyles = "./scss/**/*.scss";
var input = "./scss/style.scss";
var output = "./assets";
var htmlFile = "./index.html";

var sassOptions = {
  errLogToConsole: true,
  outputStyle: "expanded"
};

var autoprefixerOptions = {
  browsers: ["last 2 versions", "> 5%", "Firefox ESR"]
};

gulp.task("serve", ["validate-html", "add css"], function() {
  browserSync.init({
    open: false,
    server: {
      baseDir: "./",
      index: "assets/index.html"
    }
  });

  gulp.watch(allStyles, ["add css"]);
  gulp.watch(htmlFile, ["validate-html"]);
  gulp.watch("assets/index.html").on("change", browserSync.reload);
});

gulp.task("sass", ["remove css"], function() {
  return gulp
    .src(allStyles)
    .pipe(sass(sassOptions).on("error", sass.logError))
    .pipe(autoprefixer(autoprefixerOptions))
    .pipe(gulp.dest(output))
    .pipe(browserSync.stream());
});

gulp.task("remove css", function() {
  return gulp
    .src("./index.html")
    .pipe(
      change(function(html) {
        return html.replace(/<link .*(style.css") \/>/, "");
      })
    )
    .pipe(gulp.dest("."));
});

gulp.task("validate-html", function() {
  return gulp
    .src("./index.html")
    .pipe(htmlValidator())
    .pipe(htmlmin({ collapseWhitespace: true }))
    .pipe(gulp.dest("assets/"));
});

gulp.task("add css", ["sass"], function() {
  return gulp
    .src("./index.html")
    .pipe(
      change(function(html) {
        return html.replace(
          /<\/head>/,
          '<link rel="stylesheet" href="/assets/style.css" /></head>'
        );
      })
    )
    .pipe(gulp.dest("."));
});

gulp.task("default", ["validate-html", "remove css", "serve"]);

gulp.task("prod", function() {
  return gulp
    .src(input)
    .pipe(sass({ outputStyle: "compressed" }))
    .pipe(autoprefixer(autoprefixerOptions))
    .pipe(gulp.dest(output));
});
