const {config} = require('./wdio.conf');

config.capabilities = [
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
        }
    },
    {
        browserName: 'safari'
    }
];

config.specs = [
    'test/tests/*.js'
];

config.services = [
    'chromedriver'
];

exports.config = config;