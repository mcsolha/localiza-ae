const path = require('path');

const CWD = path.resolve(__dirname, '..');
const SRC_FOLDER = path.resolve(CWD, 'src');
const JS_INPUT = path.resolve(SRC_FOLDER, 'main.js');
const CSS_INPUT = path.resolve(SRC_FOLDER, 'style.css');
const HTML_INPUT = path.resolve(SRC_FOLDER, 'index.html');

const DEST_FOLDER = path.resolve(CWD, 'dist');

exports.CWD = CWD;
exports.DEST_FOLDER = DEST_FOLDER;
exports.SRC_FOLDER =SRC_FOLDER;

exports.JS_INPUT = JS_INPUT;
exports.CSS_INPUT = CSS_INPUT;
exports.HTML_INPUT = HTML_INPUT;
