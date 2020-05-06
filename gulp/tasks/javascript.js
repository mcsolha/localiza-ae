const { JS_INPUT, DEST_FOLDER, SRC_FOLDER } = require('../config');
const {
    dest, watch
} = require('gulp');
const browserify = require('browserify');
const source = require('vinyl-source-stream');
const buffer = require('vinyl-buffer');
const uglify = require('gulp-uglify');
const debug = require('gulp-debug');
const sourcemaps = require('gulp-sourcemaps');
const replace = require('gulp-replace');
const path = require('path');

function js() {
    var b = browserify({
        entries: JS_INPUT,
        debug: true
    }).transform('babelify', {presets: ['@babel/preset-env']});

    return b.bundle()
        .pipe(source('main.js'))
        .pipe(buffer())
        .pipe(sourcemaps.init({loadMaps: true}))
        .pipe(replace('@@maps_api_key', process.env.MAPS_API_KEY))
        .pipe(uglify())
        .pipe(sourcemaps.write('./'))
        .pipe(debug({title: 'JavaScript bundle:', showCount: false}))
        .pipe(dest(DEST_FOLDER));
}

function watchJs() {
    const JS_GLOB = path.resolve(SRC_FOLDER, 'js/*.js');
    console.log(JS_GLOB);
    const watcher = watch([JS_INPUT, SRC_FOLDER], js);

    watcher.on('change', function(_, stats) {
        console.log('JS', stats);
    });
}

module.exports = {
    js,
    watchJs,
};
