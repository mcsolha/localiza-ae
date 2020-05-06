const { js, watchJs } = require('./tasks/javascript');
const { css, watchCss } = require('./tasks/css');
const { html, watchHtml } = require('./tasks/html');
const { series } = require('gulp');
const gls = require('gulp-live-server');

function watchFiles() {
    watchCss();
    watchJs();
    watchHtml();
}

function serve() {
    const server = gls.static('dist', 3000);

    server.start();

    css();
    html();
    js();
    watchFiles();
}

module.exports = {
    build: series(html, css, js),
    html,
    css,
    js,
    serve,
    watch: watchFiles,
};
