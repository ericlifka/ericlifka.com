var pickFiles = require('broccoli-static-compiler');
var babelTranspiler = require('broccoli-babel-transpiler');
var fastBrowserify = require('broccoli-fast-browserify');
var concat = require('broccoli-concat');
var mergeTrees = require('broccoli-merge-trees');
var compileLess = require('broccoli-less-single');

var srcTree = pickFiles('app/src', {
    files: ['**/*.js'],
    srcDir: '.',
    destDir: './src'
});

var babelTree = babelTranspiler(srcTree, {
    sourceMap: 'inline'
});

var browserifyTree = fastBrowserify(babelTree, {
    bundles: {
        'app.js': {
            entryPoints: ['./src/app.js']
        }
    },
    browserify: {
        debug: true
    }
});

var orderedVendorFiles = [
    'lodash/lodash.js',
    'jquery/dist/jquery.js',
    'bootstrap/dist/js/bootstrap.js'
];
var vendorTreeJS = pickFiles('bower_components', {
    srcDir: '.',
    destDir: '.',
    files: orderedVendorFiles
});
var concatenatedVendorJS = concat(vendorTreeJS, {
    inputFiles: orderedVendorFiles,
    outputFile: '/vendor.js',
    separator: '\n;\n',
    wrapInEval: false,
    wrapInFunction: false
});

var vendorTreeCSS = pickFiles('bower_components', {
    srcDir: '.',
    destDir: '.',
    files: [
        'bootstrap/dist/css/bootstrap.css'
    ]
});
var concatenatedVendorCSS = concat(vendorTreeCSS, {
    inputFiles: ['**/*.css'],
    outputFile: '/vendor.css',
    separator: '\n\n',
    wrapInEval: false,
    wrapInFunction: false
});

var html = pickFiles('app', {
    srcDir: '/',
    destDir: '/',
    files: ['index.html']
});

var styles = compileLess(['app/styles'], 'app.less', 'app.css', {});

module.exports = mergeTrees([
    html,
    styles,
    browserifyTree,
    concatenatedVendorJS,
    concatenatedVendorCSS
]);
