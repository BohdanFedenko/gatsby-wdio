const {config} = require('./wdio.conf');

const drivers = {
    chrome: {version: 'latest'}, // https://chromedriver.chromium.org/
}

// Win browsers capabilities
config.capabilities = [
    //Leave the desired browsers uncommented to run them
    {
        maxInstances: 1,
        browserName: 'chrome',
        'goog:chromeOptions': {
            prefs: {
                'intl.accept_languages': 'en,EN'
            },

            //Switch on/off headless mode in Chrome

            args: [
                'headless',
                'lang=en',
                // Use --disable-gpu to avoid an error from a missing Mesa
                // library, as per
                // https://chromium.googlesource.com/chromium/src/+/lkgr/headless/README.md
                'disable-gpu',
                'window-size=1980,1080'
            ],
        },
        acceptInsecureCerts: true
    }
];

config.specs = [
    'test/tests/*.js'
];

config.services = [
    ['selenium-standalone',
        {
            logPath: 'logs',
            installArgs: {drivers}, // drivers to install
            args: {drivers} // drivers to use
        },
    ],
];

exports.config = config;