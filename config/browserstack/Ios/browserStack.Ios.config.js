const createCapabilitiesIos = require('../../utils/create.capabilitiesIos');
const {config} = require('../wdio.browserstack.conf');
const IosStackInfo = require('./IosStackInfo');

// Appium capabilities
config.capabilities = createCapabilitiesIos(IosStackInfo)

//config.cucumberOpts.tagExpression = '@IosApp'; // pass tag to run tests specific to android

exports.config = config;
