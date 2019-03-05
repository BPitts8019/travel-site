const {watch, src, dest} = require("gulp"),
postcss = require("gulp-postcss"),
autoprefixer = require("autoprefixer"),
cssVars = require("postcss-simple-vars"),
postcssNested = require("postcss-nested");

function defaultFunc (cb) {
    console.log("Hurray!! You created a Gulp task.");
    cb();
}

function html (cb) {
    console.log("Imagine something useful in HTML being done here.");
    cb();
}

function styles () {
    return src("./app/assets/styles/styles.css")
        .pipe(postcss([cssVars, postcssNested, autoprefixer]))
        .pipe(dest("./app/.tmp/styles"));
}

function watchTask (cb) {
    watch("./app/index.html", html);
    watch("./app/assets/styles/**/*.css", styles);
    cb();
}

exports.default = defaultFunc;
exports.watch = watchTask;
