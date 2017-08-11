module.exports = function (config) {
  config.set({
    basePath: '',
    frameworks: ['jasmine', '@angular/cli'],
    plugins: [
      require('karma-jasmine'),
      require('karma-chrome-launcher'),
      require('karma-firefox-launcher'),
      require('karma-jasmine-html-reporter'),
      require('@angular/cli/plugins/karma'),
      require('karma-coverage')
    ],
    client:{
      clearContext: false // leave Jasmine Spec Runner output visible in browser
    },
    files: [
      { pattern: './src/test.ts', watched: false }
    ],
    preprocessors: {
      'dist/app/**/!(*spec).js': ['coverage'],
      './src/test.ts': ['@angular/cli']
    },
    mime: {
      'text/x-typescript': ['ts','tsx']
    },
    coverageReporter: {
      dir : 'coverage/',
        reporters: [
          { type: 'html' },
          { type: 'lcov' }
        ]
    },
    angularCli: {
      config: './angular-cli.json',
      codeCoverage: 'coverage',
      environment: 'dev'
    },
    reporters: ['coverage', 'coveralls'],
    port: 9876,
    colors: true,
    logLevel: config.LOG_INFO,
    autoWatch: true,
    browsers: ['Chrome', 'Firefox'],
    singleRun: false
  });
};


// Karma configuration file, see link for more information
// https://karma-runner.github.io/1.0/config/configuration-file.html

/*
module.exports = function (config) {
  config.set({
    basePath: '',
    frameworks: ['jasmine', '@angular/cli'],
    plugins: [
      require('karma-jasmine'),
      require('karma-chrome-launcher'),
      require('karma-jasmine-html-reporter'),
      require('karma-coverage-istanbul-reporter'),
      require('@angular/cli/plugins/karma'),
	  require('karma-coverage')
    ],
    client:{
      clearContext: false // leave Jasmine Spec Runner output visible in browser
    },
	 coverageReporter: {
      dir : 'coverage/',
        reporters: [
          { type: 'html' },
          { type: 'lcov' }
        ]
    },
    coverageIstanbulReporter: {
      reports: [ 'html', 'lcovonly' ],
      fixWebpackSourcePaths: true
    },
    angularCli: {
      codeCoverage: 'coverage',
      environment: 'dev'
    },
    reporters: ['progress', 'coverage', 'kjhtml'],
	port: 9876,
    colors: true,
    logLevel: config.LOG_INFO,
    autoWatch: true,
    browsers: ['Chrome'],
    singleRun: false
  });
};
*/
