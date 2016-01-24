// Karma configuration
// Generated on Sat Jan 23 2016 16:03:47 GMT+0000 (GMT Standard Time)

var webpackConfig = require('./webpack.config.js');
webpackConfig.entry = {};

module.exports = function (config) {
    config.set({

        // base path that will be used to resolve all patterns (eg. files, exclude)
        basePath: '',

        // frameworks to use
        // available frameworks: https://npmjs.org/browse/keyword/karma-adapter
        frameworks: ['mocha', 'chai'],

        // list of files / patterns to load in the browser
        files: [
            './node_modules/phantomjs-polyfill/bind-polyfill.js',
            // 'src/*.js',
            // 'test/*.spec.js',
            'bundle.js'
            //,
            //{
            //    pattern: 'src/**/*.ts',
            //    watched: true,
            //    served: false,
            //    included: false,
            //    nocache: false
            //}
            //,
            //{
            //    pattern: 'test/**/*.ts',
            //    watched: true,
            //    served: true,
            //    included: true,
            //    nocache: true
            //},
            //{
            //    pattern: 'tsconfig.json',
            //    watched: true,
            //    served: false,
            //    included: false,
            //    nocache: false
            //}
        ],

        // list of files to exclude
        exclude: [
        ],

        // preprocess matching files before serving them to the browser
        // available preprocessors: https://npmjs.org/browse/keyword/karma-preprocessor
        preprocessors: {
            // ['test/**/*.js']: ['webpack']
            ['src/**/*.ts']: ['webpack'],
            ['test/**/*.ts']: ['webpack']
        },

        webpack: webpackConfig,

        //webpackMiddleware: {
        //    noInfo: true
        //},

        // test results reporter to use
        // possible values: 'dots', 'progress'
        // available reporters: https://npmjs.org/browse/keyword/karma-reporter
        reporters: ['progress'],

        // web server port
        port: 9876,

        // enable / disable colors in the output (reporters and logs)
        colors: true,

        // level of logging
        // possible values: config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
        logLevel: config.LOG_INFO,

        // enable / disable watching file and executing tests whenever any file changes
        autoWatch: true,

        // start these browsers
        // available browser launchers: https://npmjs.org/browse/keyword/karma-launcher
        browsers: ['Chrome', 'PhantomJS'],

        // Continuous Integration mode
        // if true, Karma captures browsers, runs the tests and exits
        singleRun: false,

        // Concurrency level
        // how many browser should be started simultaneous
        concurrency: Infinity
    });
};
