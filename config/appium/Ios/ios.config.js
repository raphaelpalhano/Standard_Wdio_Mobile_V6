const {config} = require('../wdio.conf');
const iOSInfo = require('./iOSInfo');

// Appium capabilities
config.capabilities = [
  {
     'cjson:metadata': {
            device: iOSInfo.deviceName(),
            platform: {
                name: 'iOS',
                version: iOSInfo.platFormVersion()
            },
            browser: {
              name: 'chrome',
              version: '100.0',
            },
            // for an app
            app: {
              name: 'Super app Pague menos',
              version: '2.2.69',
            },
        },
    noReset: true,
    fullReset: false,
    maxInstances: 1,
    automationName: 'XCUITest',
    deviceName: iOSInfo.deviceName(),
    platformVersion: iOSInfo.platFormVersion(),
    app: iOSInfo.appName() // use - path.resolve(`./apps/${IosInfo.appName()}`) if passing a custom app
  }


];

// config.cucumberOpts.tagExpression = '@iosApp';// pass tag to run tests specific to ios

exports.config = config;
