const {config} = require('./wdio.conf');

config.capabilities = [
    {
        browserName: 'safari',
        port: 4445
    }
];

config.specs = [
    'test/tests/*.js'
];

config.services = [
    'safaridriver'
];

exports.config = config;