const {series, watch} = require("gulp");

function defaultFunc (cb) {
    console.log("Hurray!! You created a Gulp task.");
    cb();
}

function html (cb) {
    console.log("Imagine something useful in HTML being done here.");
    cb();
}

function styles (cb) {
    console.log("Imagine SASS or PostCSS tasks running here...");
    cb();
}

function watchTask (cb) {
    watch("./app/index.html", html);
    watch("./app/assets/styles/**/*.css", styles);
    cb();
}

exports.default = defaultFunc;
exports.watch = watchTask;
