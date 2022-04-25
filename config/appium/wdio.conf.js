const { generate } = require('multiple-cucumber-html-reporter');
const { removeSync} = require('fs-extra');
const allure = require('allure-commandline')
const cucumberJson = require('wdio-cucumberjs-json-reporter').default;
const allureReporter = require('@wdio/allure-reporter').default
const ScreenManagerMobile = require('../../src/components/native/ScreenManagerMobile');
const AppCapabilities = require('../utils/AppCapabilities');

let allure_config = {
  outputDir: 'allure-results',
  disableWebdriverStepsReporting: true,
  disableWebdriverScreenshotsReporting: false,
  useCucumberStepReporter: true,
  addConsoleLogs: true
};

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
    requireModule: [
    ],
    failAmbiguousDefinitions: false,
    failFast: false,
    ignoreUndefinedDefinitions: false,
    name: [
    ],
    profile: [
    ],
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

  reporters: ["spec", ['allure', allure_config],
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

  // Controla o APP: app desligado == 1; ligado == 4
  beforeScenario: async (world, context) => {
    await allureReporter.addFeature(world.name);
    const status = await driver.queryAppState(AppCapabilities.appId);
    if(status === 1){
      await driver.launchApp();
      await driver.switchContext('NATIVE_APP');

    }

  },

  afterScenario: async (world, result, context) => {
    await driver.terminateApp(AppCapabilities.appId);
  },

  afterStep: async function (step, scenario, result) {

    cucumberJson.attach(await driver.takeScreenshot(), 'image/png');
  },


  beforeFeature: async (uri, feature) => {
    allureReporter.addStep("Iniciando Fetaure: " + feature.name);

  },


  before: async (capabilities, specs, browser) => {
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
    await removeSync('reports/html');
    await removeSync('reports/json');
    await removeSync('allure-results');
  },

  onComplete: async (exitCode, config, capabilities, results) => {
    generate({
      jsonDir: './reports/json',
      reportPath: './reports/html',
      openReportInBrowser: true,

    });
    const reportError = new Error('Could not generate Allure report')
    const generation = allure(['generate', 'allure-results', '--clean'])
    return new Promise((resolve, reject) => {
        const generationTimeout = setTimeout(
            () => reject(reportError),
            5000)

        generation.on('exit', function(exitCode) {
            clearTimeout(generationTimeout)

            if (exitCode !== 0) {
                return reject(reportError)
            }

            console.log('Allure report successfully generated')
            resolve()
        })
    })
  },

};
