const {config} = require('../../wdio.browserstack.conf');
const iOSStackInfo = require('./iOSStackInfo');
const createCapabilities = require('../../../utils/create.capabilitiesAndroid');


config.capabilities = createCapabilities(iOSStackInfo);

//config.cucumberOpts.tagExpression = '@androidApp'; // pass tag to run tests specific to android

exports.config = config;
