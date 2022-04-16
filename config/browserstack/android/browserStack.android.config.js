const {config} = require('../wdio.browserstack.conf');
const AndroidStackInfo = require('./AndroidStackInfo');
const createCapabilitiesAndroid = require('../../utils/create.capabilitiesAndroid');

// Appium capabilities
config.capabilities = createCapabilitiesAndroid(AndroidStackInfo);

//config.cucumberOpts.tagExpression = '@androidApp'; // pass tag to run tests specific to android

exports.config = config;
