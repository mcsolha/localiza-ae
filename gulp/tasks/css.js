const { CSS_INPUT, DEST_FOLDER } = require('../config');
const {
    src, dest, watch
} = require('gulp');

function css() {
    return src(CSS_INPUT)
        .pipe( dest(DEST_FOLDER) );
}

function watchCss () {
    const watcher = watch([CSS_INPUT], css);

    watcher.on('change', function(_, stats) {
        console.log('CSS');
    });
}

module.exports = {
    css,
    watchCss,
};
