const {config} = require('./wdio.conf');

const drivers = {
    chrome: {version: 'latest'}, // https://chromedriver.chromium.org/
}

config.capabilities = [
    //Leave the desired browsers uncommented to run them

    {
        maxInstances: 1,
        //
        browserName: 'chrome',
        chromeOptions: {
            mobileEmulation: {'deviceName': ''},
            args: ['--no-sandbox',
                '--disable-gpu',
                '--start-fullscreen',
                '--disable-notifications',
                //
                '--user-agent=Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/61.0.3163.100 Safari/537.36'
            ]
        }
    }
];

config.specs = [
    'test/tests/home_page_mobile_spec.js'
];

config.services = [
    // ['selenium-standalone',
    //     {
    //         logPath: 'logs',
    //         installArgs: {drivers}, // drivers to install
    //         args: {drivers} // drivers to use
    //     },
    // ]
    'devtools'
];

exports.config = config;