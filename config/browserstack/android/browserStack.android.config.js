const {config} = require('../wdio.browserstack.conf');
const AndroidStackInfo = require('./AndroidStackInfo');
const createCapabilities = require('../utils/create.capabilities');

// Appium capabilities
config.capabilities = createCapabilities(AndroidStackInfo);

config.cucumberOpts.tagExpression = '@androidApp'; // pass tag to run tests specific to android

exports.config = config;
