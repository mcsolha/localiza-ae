const { HTML_INPUT, DEST_FOLDER } = require('../config');
const {
    src, dest, watch
} = require('gulp');
const replace = require('gulp-replace');

function html() {
    return src(HTML_INPUT)
        .pipe(replace('@@maps_api_key', process.env.MAPS_API_KEY))
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
