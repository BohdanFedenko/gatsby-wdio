const {config} = require('./wdio.conf');

let androidCapabilitiesGalaxyA51 = {
    'bstack:options': {
        "osVersion" : "10.0",
        "deviceName" : "Samsung Galaxy A51",
        "realMobile" : "true",
        "local" : "true",
        "debug" : "true",
        "networkLogs" : "true",
        "browserName" : "Android"
    },
    "browserName": "Android"
}

let androidCapabilitiesGalaxyS10 = {
    'bstack:options': {
        "osVersion" : "9.0",
        "deviceName" : "Samsung Galaxy S10",
        "realMobile" : "true",
        "local" : "true",
        "debug" : "true",
        "networkLogs" : "true",
        "browserName" : "Android"
    },
    "browserName": "Android"
}

let isOSCapabilitiesiPhone8 = {
    'bstack:options': {
        "osVersion" : "13",
        "deviceName" : "iPhone 8",
        "realMobile" : "true",
        "local" : "true",
        "debug" : "true",
        "networkLogs" : "true",
        "browserName" : "Android"
    },
    "browserName": "iPhone"
}

let isOSCapabilitiesiPhoneXS = {
    'bstack:options': {
        "osVersion" : "12",
        "deviceName" : "iPhone XS",
        "realMobile" : "true",
        "local" : "true",
        "debug" : "true",
        "networkLogs" : "true",
        "browserName" : "Android"
    },
    "browserName": "iPhone"
}

//BrowserStack ACCESS KEY
config.user = 'bohdan_RuKmwf';
config.key = '5ymqUzX9SKqpAfpVEwZv';

config.capabilities = [
    //Leave the desired browsers uncommented to run them

    //It works only in BrowserStack. Should uncommented for work
    androidCapabilitiesGalaxyA51,
    androidCapabilitiesGalaxyS10,
    isOSCapabilitiesiPhone8,
    isOSCapabilitiesiPhoneXS
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