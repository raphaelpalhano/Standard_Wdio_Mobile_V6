const {config} = require('../wdio.browserstack.conf');
const IosStackInfo = require('./IosStackInfo');

// Appium capabilities
config.capabilities = [
    {
      project: IosStackInfo.project(),
      build: IosStackInfo.build(),
      name: IosStackInfo.name(),
      device: IosStackInfo.deviceName(),
      os_version: IosStackInfo.osVersion(),
      app: process.env.BROWSERSTACK_APP_ID || IosStackInfo.appName(),
      'browserstack.local': true,
      'browserstack.debug': true
    }
];

config.cucumberOpts.tagExpression = '@androidApp'; // pass tag to run tests specific to android

exports.config = config;
