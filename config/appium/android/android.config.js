const path = require('path');
const {config} = require('../wdio.conf');
const AndroidInfo = require('./AndroidInfo');

// Appium capabilities
config.capabilities = [
    {
      'cjson:metadata': {
        device: AndroidInfo.deviceName(),
        platform: {
            name: 'Android',
            version: AndroidInfo.platFormVersion()
        },
        browser: {
            name: 'chrome',
            version: '100.0',
        },
        // for an app
        app: {
            name: 'Super app Pague menos',
            version: '3.18',
        },
    },
    platformName: 'Android',
    noReset: true,
    fullReset: false,
    maxInstances: 1,
    automationName: 'uiautomator2',
    deviceName: AndroidInfo.deviceName(),
    platformVersion: AndroidInfo.platFormVersion(),
    locale: AndroidInfo.locale(),
    language: AndroidInfo.language(),
    //autoGrantPermissions: true,
    //autoAcceptAlerts: true,
    //autoAcceptAlerts: 'true',
    app: path.resolve(`./apps/${AndroidInfo.appName()}`)
    }
];

//config.cucumberOpts.tagExpression = '@androidApp'; // pass tag to run tests specific to android

exports.config = config;

