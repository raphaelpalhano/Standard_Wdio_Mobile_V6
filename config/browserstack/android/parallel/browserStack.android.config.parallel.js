const {config} = require('../../wdio.browserstack.conf');
const AndroidParallelInfo = require('./AndroidParallelInfo');
const createCapabilities = require('../../utils/create.capabilities');


config.capabilities = createCapabilities(AndroidParallelInfo);

config.cucumberOpts.tagExpression = '@androidApp'; // pass tag to run tests specific to android

exports.config = config;
