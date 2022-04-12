const { generate } = require('multiple-cucumber-html-reporter');
const browserstack = require('browserstack-local');
const ScreenManagerMobile = require('../../src/components/native/ScreenManagerMobile');
const AppCapabilities = require('../../src/utils/AppCapabilities');



exports.config = {
    // ====================
    // Runner Configuration
    // ====================
    user: process.env.BROWSERSTACK_USERNAME || 'raphaelangel_4AJ9VN',
    key: process.env.BROWSERSTACK_ACCESS_KEY || 'MXLt6m2yDyFogVZUsKzn',
    services: [
        ['browserstack', {
            browserstackLocal: true
        }]
    ],

    "browserstack.appium_version": "1.17.0",
    "browserstack.use_w3c": "true",


    baseUrl: '',
    sync: true,


    // ==================
    // Specify Test Files
    // ==================
    specs: [
        './src/features/*.feature'
    ],
    // Patterns to exclude.
    exclude: [
        // 'path/to/excluded/files'
    ],
    maxInstances: 10,
    logLevel: 'info',
    coloredLogs: true,

    bail: 0,
    // Default timeout for all waitFor* commands.
    waitforTimeout: 10000,
    connectionRetryTimeout: 90000,
    connectionRetryCount: 3,


    framework: 'cucumber',
    cucumberOpts: {
        backtrace: false,
        requireModule: [],
        failAmbiguousDefinitions: false,
        failFast: false,
        ignoreUndefinedDefinitions: false,
        name: [],
        profile: [],
        require: [
            './src/steps/native/common/*.js',
            './src/steps/web/common/*.js',
            './src/steps/native/**/*.steps.js',
            './src/steps/web/**/*.steps.js'
        ],
        snippetSyntax: undefined,
        snippets: true,
        source: true,
        strict: false,
        tagsInTitle: false,
        timeout: 50000,
        retry: 0
    },

    reporters: [
        [
            'cucumberjs-json', {
                jsonFolder: './reports/json',
                language: 'en',
            }
        ]
    ],
    // =====
    // Hooks
    // =====

    beforeScenario: function (world, context) {
      const status = driver.queryAppState(AppCapabilities.appId);
      if(status === 1){
        driver.launchApp();
        driver.pause(2000);
        driver.switchContext('NATIVE_APP');

      }

    },

    afterScenario: function (world, result, context) {
      driver.terminateApp(AppCapabilities.appId);
    },

    before: function() {
      require('@babel/register');
      AppCapabilities.setAppId('br.com.paguemenos.anjodaguarda',
      'br.com.paguemenos.anjodaguardaw');
      ScreenManagerMobile.setHome();
      ScreenManagerMobile.setHeader();
      ScreenManagerMobile.setMenu();
      ScreenManagerMobile.setMoreOptions();
      ScreenManagerMobile.setLogin();
      ScreenManagerMobile.setProductSeachResult();
      ScreenManagerMobile.setProductDetails();
     },
    // Code to start browserstack local before start of test
    onPrepare: (config, capabilities) => {
      console.log("Connecting local");
      return new Promise( (resolve, reject) => {
        exports.bs_local = new browserstack.Local();
        exports.bs_local.start({'key': exports.config.key }, (error) => {
          if (error) return reject(error);
          console.log('Connected. Now testing...');
          resolve();
        });
      });
    },

    // Code to stop browserstack local after end of test
    onComplete: (capabilties, specs) => {
      console.log("Closing local tunnel");
      return new Promise( (resolve, reject) => {
        exports.bs_local.stop( (error) => {
          if (error) return reject(error);
          console.log("Stopped BrowserStackLocal");
          resolve();
        });
      });
    },

    onComplete: function(exitCode, config, capabilities, results) {
        generate({
            jsonDir: './reports/json',
            reportPath: './reports/html',
            openReportInBrowser: true,

        });
    },

}
