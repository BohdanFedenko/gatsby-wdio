const {config} = require('./wdio.conf');

config.capabilities = [
    {
        browserName: 'safari',
        maxInstances: 1,
        "safariOptions": {technologyPreview: true}
    }
];

config.specs = [
    'test/tests/*.js'
];

config.services = [
    'safaridriver'
];

exports.config = config;