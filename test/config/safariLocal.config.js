const {config} = require('./wdio.conf');

config.capabilities = [
    {
        browserName: 'safari'
    }
];

config.specs = [
    'test/tests/*.js'
];

config.services = [
    'safaridriver'
];

exports.config = config;