const { HTML_INPUT, DEST_FOLDER } = require('../config');
const {
    src, dest, watch
} = require('gulp');

function html() {
    return src(HTML_INPUT)
        .pipe( dest(DEST_FOLDER) );
}

function watchHtml () {
    const watcher = watch([HTML_INPUT], html);

    watcher.on('change', function(_, stats) {
        console.log('HTML');
    });
}

module.exports = {
    html,
    watchHtml,
};
