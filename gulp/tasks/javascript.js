const { JS_INPUT, DEST_FOLDER } = require('../config');
const {
    dest, watch
} = require('gulp');
const browserify = require('browserify');
const source = require('vinyl-source-stream');
const buffer = require('vinyl-buffer');
const uglify = require('gulp-uglify');
const debug = require('gulp-debug');
const sourcemaps = require('gulp-sourcemaps');

function js() {
    var b = browserify({
        entries: JS_INPUT,
        debug: true,
    });

    return b.bundle()
        .pipe(source('main.js'))
        .pipe(buffer())
        .pipe(sourcemaps.init({loadMaps: true}))
        .pipe(uglify())
        .pipe(sourcemaps.write('./'))
        .pipe(debug({title: 'JavaScript bundle:', showCount: false}))
        .pipe(dest(DEST_FOLDER));
}

function watchJs() {
    const watcher = watch([JS_INPUT], js);

    watcher.on('change', function(_, stats) {
        console.log('JS', stats);
    });
}

module.exports = {
    js,
    watchJs,
};
