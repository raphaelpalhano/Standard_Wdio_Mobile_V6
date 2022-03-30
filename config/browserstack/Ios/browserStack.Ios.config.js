const createCapabilities = require('../utils/create.capabilities');
const {config} = require('../wdio.browserstack.conf');
const IosStackInfo = require('./IosStackInfo');

// Appium capabilities
config.capabilities = createCapabilities(IosStackInfo)

config.cucumberOpts.tagExpression = '@IosApp'; // pass tag to run tests specific to android

exports.config = config;
