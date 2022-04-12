const { generate } = require('multiple-cucumber-html-reporter');
const { removeSync } = require('fs-extra');

const ScreenManagerMobile = require('../../src/components/native/ScreenManagerMobile');
const AppCapabilities = require('../../src/utils/appCapabilities');


exports.config = {
    // ====================
    // Runner Configuration
    // ====================

    runner: 'local',
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

    logLevel: 'info',

    bail: 0,
    // Default timeout for all waitFor* commands.
    waitforTimeout: 20000,

    connectionRetryTimeout: 120000,
    //
    // Default request retries count
    connectionRetryCount: 3,

    appium: { command: 'appium' },
    port: 4723,
    path: '/wd/hub',

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
        driver.pause(1800);
        driver.switchContext('NATIVE_APP');

      }

    },

    afterScenario: function (world, result, context) {
      driver.terminateApp(AppCapabilities.appId);
    },


    before: function(capabilities, specs, browser) {
      require('@babel/register');
      AppCapabilities.setAppId('br.com.paguemenos.anjodaguarda',
      'br.com.paguemenos.anjodaguardaw');
      //ScreenManagerMobile.setCelsiusToFahrenheit();
      ScreenManagerMobile.setHome();
      ScreenManagerMobile.setHeader();
      ScreenManagerMobile.setMenu();
      ScreenManagerMobile.setMoreOptions();
      ScreenManagerMobile.setLogin();
      ScreenManagerMobile.setProductSeachResult();
      ScreenManagerMobile.setProductDetails();

    },


    onPrepare: () => {
      // Remove the `.tmp/` folder that holds the json and report files
      removeSync('reports/html');
      removeSync('reports/json');
  },

    onComplete: function(exitCode, config, capabilities, results) {
        generate({
            jsonDir: './reports/json',
            reportPath: './reports/html',
            openReportInBrowser: true,

        });
    },

}
