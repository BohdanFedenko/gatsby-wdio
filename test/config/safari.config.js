const {config} = require('./wdio.conf');

let safariCapabilities = {
    'bstack:options': {
        "os": "OS X",
        "osVersion": "Big Sur",
        "resolution": "1920x1080",
        "local": "true",
        "debug": "true",
        "networkLogs": "true",
        "seleniumVersion": "3.14.0",
        'safari': {
            "allowAllCookies": "true",
        }
    },
    "browserName": "Safari",
    "browserVersion": "14.0"
}

//BrowserStack ACCESS KEY
config.user = '';
config.key = '';

config.capabilities = [
    //Leave the desired browsers uncommented to run them

    //It works only in BrowserStack. Should uncommented for work
    safariCapabilities
];

config.specs = [
    'test/tests/*.js'
];

config.services = [
    //It runs any browsers in BrowserStack

    ['browserstack', {
        browserstackLocal: true
    }]
];

exports.config = config;