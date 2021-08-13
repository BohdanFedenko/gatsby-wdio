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

config.safaridriverArgs = ['-p 4444'], // use the specified port. Default is 4444
    config.safaridriverLogs = './',

    exports.config = config;