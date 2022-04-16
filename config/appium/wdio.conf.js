const { generate } = require('multiple-cucumber-html-reporter');
const { removeSync } = require('fs-extra');

const ScreenManagerMobile = require('../../src/components/native/ScreenManagerMobile');
const AppCapabilities = require('../utils/AppCapabilities');

exports.config = {
    // ====================
    // Runner Configuration
    // ====================

    runner: 'local',

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

    beforeScenario: async function (world, context) {
      const status = await driver.queryAppState(AppCapabilities.appId);
      if(status === 1){
        await driver.launchApp();
        await driver.switchContext('NATIVE_APP');

      }

    },

    afterScenario: async function (world, result, context) {
      await driver.terminateApp(AppCapabilities.appId);
    },


    before: async function(capabilities, specs, browser) {
      require('@babel/register');
      await AppCapabilities.setAppId('br.com.paguemenos.anjodaguarda',
      'br.com.paguemenos.anjodaguardaw');
      await ScreenManagerMobile.setHome();
      await ScreenManagerMobile.setHeader();
      await ScreenManagerMobile.setMenu();
      await ScreenManagerMobile.setMoreOptions();
      await ScreenManagerMobile.setLogin();
      await ScreenManagerMobile.setProductSeachResult();
      await ScreenManagerMobile.setProductDetails();

    },


    onPrepare: async () => {
      // Remove the `.tmp/` folder that holds the json and report files
      removeSync('reports/html');
      removeSync('reports/json');
  },

    onComplete: async function(exitCode, config, capabilities, results) {
        generate({
            jsonDir: './reports/json',
            reportPath: './reports/html',
            openReportInBrowser: true,

        });
    },

}
