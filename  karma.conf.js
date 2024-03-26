module.exports = function (config) {
  config.set({
    basePath: './',
    frameworks: ['jasmine', '@angular-devkit/build-angular'],
    plugins: [
      require('karma-jasmine'),
      require('karma-chrome-launcher'),
      require('karma-jasmine-html-reporter'),
      require('karma-coverage'),
      require('@angular-devkit/build-angular/plugins/karma'),
      require('karma-spec-reporter'),
    ],
    client: {
      jasmine: {
        failSpecWithNoExpectations: true,
      },
      clearContext: false,
    },
    jasmineHtmlReporter: {
      suppressAll: true,
    },
    // thresholds: {
    //   emitWarning: false,
    //   global: {
    //     statements: 80,
    //     lines: 80,
    //     branches: 80,
    //     functions: 80,
    //   },
    //   each: {
    //     statements: 80,
    //     lines: 80,
    //     branches: 80,
    //     functions: 80,
    //   },
    // },
    coverageReporter: {
      dir: require('path').join(__dirname, './coverage'),
      subdir: '.',
      reporters: [{ type: 'html' }, { type: 'text-summary' }, { type: 'lcov' }],
      fixWebpackSourcePaths: true,
    },
    reporters: ['progress', 'kjhtml', 'spec'],
    port: 9876,
    colors: true,
    autoWatch: true,
    browsers: ['Chrome'],
    singleRun: false,
    restartOnFileChange: true,
    customLaunchers: {
      ChromeHeadlessNoSandbox: {
        base: 'ChromeHeadless',
        flags: ['--headless', '--no-sandbox', '--remote-debugging-port=9222'],
      },
      ChromeDebug: {
        base: 'Chrome',
        flags: ['--remote-debugging-port=9222'],
        debug: true,
      },
      ChromeHeadlessDocker: {
        base: 'ChromeHeadless',
        flags: ['--no-sandbox'],
      },
    },
    browserDisconnectTolerance: 8,
    browserNoActivityTimeout: 60000,
    browserDisconnectTimeout: 20000,
    captureTimeout: 210000,
    specReporter: {
      maxLogLines: 5,
      suppressErrorSummary: false,
      suppressFailed: false,
      suppressPassed: false,
      suppressSkipped: false,
      showSpecTiming: true,
      failFast: false,
      prefixes: {
        success: '    OK: ',
        failure: 'FAILED: ',
        skipped: 'SKIPPED: ',
      },
    },
    logLevel: config.LOG_INFO,
  });
};
