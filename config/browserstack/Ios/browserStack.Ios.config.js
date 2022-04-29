const createCapabilitiesiOS = require('../../utils/create.capabilitiesiOS');
const {config} = require('../wdio.browserstack.conf');
const iOSStackInfo = require('./iOSStackInfo');

// Appium capabilities
config.capabilities = createCapabilitiesiOS(iOSStackInfo)

//config.cucumberOpts.tagExpression = '@IosApp'; // pass tag to run tests specific to android

exports.config = config;
