module.exports = function(config) {
	'use strict';
	config.set({
		basePath: '',
		frameworks: ['jasmine'],

		files: [
			'dist/*.js',
			'test/*_spec.js'
		],

		exclude: [
		],

		preprocessors: {
			'dist/*.js': ['coverage'],
		},


		reporters: ['coverage', 'karma-remap-istanbul'],
		coverageReporter: {
			dir: 'coverage/dist',
			reporters: [
				{
					type: 'html'
				},
			]
		},
		remapIstanbulReporter: {
			remapOptions: {}, //additional remap options
			reportOptions: {}, //additional report options
			reports: {
				lcovonly: 'coverage/remap/lcov/lcov.info',
				html: 'coverage/remap/html',
				cobertura: 'coverage/remap/cobertura/cobertura.xml'
			}
		},

		// web server port
		port: 9876,

		// enable / disable colors in the output (reporters and logs)
		colors: true,

		// level of logging
		// possible values: config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
		logLevel: config.LOG_DEBUG,

		// enable / disable watching file and executing tests whenever any file changes
		autoWatch: true,


		// start these browsers
		// available browser launchers: https://npmjs.org/browse/keyword/karma-launcher
		browsers: ['Chrome'],

		// Continuous Integration mode
		// if true, Karma captures browsers, runs the tests and exits
		singleRun: false,

		// Concurrency level
		// how many browser should be started simultaneous
		concurrency: Infinity
	});
};
