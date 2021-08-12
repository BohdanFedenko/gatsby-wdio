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

let chromeCapabilities = {
    'bstack:options': {
        "os": "Windows",
        "osVersion": "10",
        "resolution": "1920x1080",
        "local": "true",
        "debug": "true",
        "networkLogs": "true",
        "seleniumVersion": "3.14.0"
    },
    "browserName": "Chrome",
    "browserVersion": "latest"
}

let firefoxCapabilities = {
    'bstack:options': {
        "os": "Windows",
        "osVersion": "10",
        "resolution": "1920x1080",
        "local": "true",
        "debug": "true",
        "networkLogs": "true",
        "seleniumVersion": "3.14.0"
    },
    "browserName": "Firefox",
    "browserVersion": "latest"
}

let edgeCapabilities = {
    'bstack:options': {
        "os": "Windows",
        "osVersion": "10",
        "resolution": "1920x1080",
        "local": "true",
        "debug": "true",
        "networkLogs": "true",
        "seleniumVersion": "3.14.0"
    },
    "browserName": "Edge",
    "browserVersion": "latest"
}

//BrowserStack ACCESS KEY
config.user = 'bohdan_RuKmwf';
config.key = '5ymqUzX9SKqpAfpVEwZv';

config.capabilities = [
    //Leave the desired browsers uncommented to run them

    //It works only in BrowserStack. Should uncommented for work
    chromeCapabilities,
    firefoxCapabilities,
    edgeCapabilities,
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