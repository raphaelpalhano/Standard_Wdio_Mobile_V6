const path = require('path');
const {config} = require('../wdio.conf');
const AndroidInfo = require('./AndroidInfo');

// Appium capabilities
config.capabilities = [
    {
        platformName: 'Android',
        noReset: true,
        fullReset: false,
        maxInstances: 1,
        automationName: 'uiautomator2',
        deviceName: AndroidInfo.deviceName(),
        platformVersion: AndroidInfo.platFormVersion(),
        //appPackage: AndroidInfo.packageName(),
        //appActivity: AndroidInfo.activity()
        app: path.resolve(`./apps/${AndroidInfo.appName()}`)
    }
];

config.cucumberOpts.tagExpression = '@androidApp'; // pass tag to run tests specific to android

exports.config = config;

