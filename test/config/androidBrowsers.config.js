const {config} = require('./wdio.conf');
const androidInfo = require('./android.info');

// appium capabilities
config.capabilities = [
    {
        platformName: 'iOS',
        browserName: 'Safari',
        automationName: 'uiautomator2',
        maxInstances: 1,
        deviceName: androidInfo.deviceName,
        platformVersion: androidInfo.platformVersion
    }
];

config.specs = [
    'test/tests/*.js'
];

config.services = ['appium'];

config.appium = {
    command: 'appium',
    args: {},
},
config.port = 4723,

    exports.config = config;