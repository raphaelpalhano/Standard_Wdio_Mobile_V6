const {config} = require('../wdio.conf');
const iOSInfo = require('./iOSInfo');

// Appium capabilities
config.capabilities = [
  {
    platformName: 'iOS',
    browserName: 'safari',
    maxInstances: 1,
    automationName: 'XCUITest',
    deviceName: iOSInfo.deviceName(),
    platformVersion: iOSInfo.platFormVersion()
  }
];

config.cucumberOpts.tagExpression = '@iosBrowser';// pass tag to run tests specific to ios

exports.config = config;
