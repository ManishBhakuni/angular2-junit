// Karma configuration file, see link for more information
// https://karma-runner.github.io/1.0/config/configuration-file.html

module.exports = function (config) {
  config.set({
    basePath: '',
    frameworks: ['jasmine', '@angular/cli'],
    plugins: [
      require('karma-jasmine'),
      require('karma-phantomjs-launcher'),
      require('karma-chrome-launcher'),
      require('karma-jasmine-html-reporter'),
      require('karma-coverage-istanbul-reporter'),
      require('@angular/cli/plugins/karma'),
	    require('karma-coverage')
    ],
    client:{
      clearContext: false // leave Jasmine Spec Runner output visible in browser
    },
    /*
	 coverageReporter: {
      dir : 'coverage/',
        reporters: [
          { type: 'html' },
          { type: 'lcov' }
        ]
    },
    */
    coverageReporter: {
     type:'text'
    },
    coverageIstanbulReporter: {
      reports: [ 'html', 'lcovonly' ],
      fixWebpackSourcePaths: true
    },
    angularCli: {
      config: './angular-cli.json',
      codeCoverage: 'coverage',
      environment: 'dev'
    },
    reporters: ['progress', 'coverage'],
	  port: 9876,
    colors: true,
    logLevel: config.LOG_INFO,
    autoWatch: true,    
    browsers: ['PhantomJS'],    
    singleRun: true
  });
};

