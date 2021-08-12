const {config} = require('./wdio.conf');
// const androidInfo = require('./android.info');

// appium capabilities
config.capabilities = [
    {
        platformName: 'Android',
        browserName: 'Chrome',
        automationName: 'uiautomator2',
        maxInstances: 1,
        deviceName: 'Pixel 3',
        platformVersion: '11.0'
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
    config.appium = {
        command: 'appium'
    }
config.port = 4723,
    config.path = '/wd/hub',


    exports.config = config;