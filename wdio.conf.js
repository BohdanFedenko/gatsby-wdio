import allure from '@wdio/allure-reporter';

const drivers = {
    chrome: {version: 'latest'}, // https://chromedriver.chromium.org/
    firefox: {version: 'latest'}, // https://github.com/mozilla/geckodriver/releases
    chromiumedge: { version: 'latest' } // https://developer.microsoft.com/en-us/microsoft-edge/tools/webdriver/
}

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

exports.config = {

    //BrowserStack ACCESS KEY
    user: '',
    key: '',

    runner: 'local',

    //Options for a test run
    specs: [
        'test/tests/*.js'
    ],
    exclude: [
        // 'path/to/excluded/files'
    ],

    maxInstances: 1,

    capabilities: [

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
        },
        {
            maxInstances: 1,
            browserName: 'firefox',
            'moz:firefoxOptions': {
                prefs: {
                    'intl.accept_languages': 'en,EN'
                },

                //Switch on/off headless mode in Firefox
                args: ['-headless']
            },
        },
        {
            browserName: 'MicrosoftEdge',
        }

        //It works only in BrowserStack. Should uncommented for work

        // safariCapabilities

    ],

    // Level of logging verbosity: trace | debug | info | warn | error | silent
    logLevel: 'info',

    bail: 0,

    baseUrl: '',

    waitforTimeout: 30000,

    connectionRetryTimeout: 120000,

    connectionRetryCount: 3,

    services: [

        //It runs any browsers in BrowserStack

        // ['browserstack', {
        //     browserstackLocal: true
        // }],

        //It runs only Chrome and Firefox browser locally

        ['selenium-standalone',
            {
                logPath: 'logs',
                installArgs: {drivers}, // drivers to install
                args: {drivers} // drivers to use
            },
        ],
    ],

    framework: 'mocha',

    reporters: ['spec', ['allure', {
        outputDir: 'allure-results',
        disableWebdriverStepsReporting: true,
        disableWebdriverScreenshotsReporting: false,
    }]],

    mochaOpts: {
        ui: 'bdd',
        timeout: 100000,
        // require: ['@babel/register'],

    },
    //
    // =====
    // Hooks
    // =====
    // WebdriverIO provides several hooks you can use to interfere with the test process in order to enhance
    // it and to build services around it. You can either apply a single function or an array of
    // methods to it. If one of them returns with a promise, WebdriverIO will wait until that promise got
    // resolved to continue.
    /**
     * Gets executed once before all workers get launched.
     * @param {Object} config wdio configuration object
     * @param {Array.<Object>} capabilities list of capabilities details
     */
    // onPrepare: function (config, capabilities) {
    // },
    /**
     * Gets executed before a worker process is spawned and can be used to initialise specific service
     * for that worker as well as modify runtime environments in an async fashion.
     * @param  {String} cid      capability id (e.g 0-0)
     * @param  {[type]} caps     object containing capabilities for session that will be spawn in the worker
     * @param  {[type]} specs    specs to be run in the worker process
     * @param  {[type]} args     object that will be merged with the main configuration once worker is initialised
     * @param  {[type]} execArgv list of string arguments passed to the worker process
     */
    // onWorkerStart: function (cid, caps, specs, args, execArgv) {
    // },
    /**
     * Gets executed just before initialising the webdriver session and test framework. It allows you
     * to manipulate configurations depending on the capability or spec.
     * @param {Object} config wdio configuration object
     * @param {Array.<Object>} capabilities list of capabilities details
     * @param {Array.<String>} specs List of spec file paths that are to be run
     */
    // beforeSession: function (config, capabilities, specs) {
    // },
    /**
     * Gets executed before test execution begins. At this point you can access to all global
     * variables like `browser`. It is the perfect place to define custom commands.
     * @param {Array.<Object>} capabilities list of capabilities details
     * @param {Array.<String>} specs        List of spec file paths that are to be run
     * @param {Object}         browser      instance of created browser/device session
     */
    before: function (capabilities, specs) {
    },
    /**
     * Runs before a WebdriverIO command gets executed.
     * @param {String} commandName hook command name
     * @param {Array} args arguments that command would receive
     */
    beforeCommand: async function (commandName, args) {
        await browser.pause(100);
    },
    /**
     * Hook that gets executed before the suite starts
     * @param {Object} suite suite details
     */
    beforeSuite: function (suite) {
        global.allure = allure;
        allure.addFeature(suite.name);
        allure.addDescription("Generating Allure reports " + suite.name);
    },
    /**
     * Function to be executed before a test (in Mocha/Jasmine) starts.
     */
    beforeTest: function (test, context) {
        global.browsersName = browser.capabilities.browserName;
        allure.addEnvironment("BROWSER", browser.capabilities.browserName);
        allure.addDescription("Generating Allure reports " + test.title);
    },
    /**
     * Hook that gets executed _before_ a hook within the suite starts (e.g. runs before calling
     * beforeEach in Mocha)
     */
    beforeHook: function (test, context) {
        browser.maximizeWindow();
    },
    /**
     * Hook that gets executed _after_ a hook within the suite starts (e.g. runs after calling
     * afterEach in Mocha)
     */
    afterHook: async function (test, context, {error, result, duration, passed, retries}) {
        if (!passed) {
            await browser.takeScreenshot();
        }
    },
    /**
     * Function to be executed after a test (in Mocha/Jasmine).
     */
    afterTest: async function (test, context, {error, result, duration, passed, retries}) {
        if (!passed) {
            await browser.takeScreenshot();
        }
    },

    /**
     * Hook that gets executed after the suite has ended
     * @param {Object} suite suite details
     */
    // afterSuite: function (suite) {
    // },
    /**
     * Runs after a WebdriverIO command gets executed
     * @param {String} commandName hook command name
     * @param {Array} args arguments that command would receive
     * @param {Number} result 0 - command success, 1 - command error
     * @param {Object} error error object if any
     */
    // afterCommand: function (commandName, args, result, error) {
    // },
    /**
     * Gets executed after all tests are done. You still have access to all global variables from
     * the test.
     * @param {Number} result 0 - test pass, 1 - test fail
     * @param {Array.<Object>} capabilities list of capabilities details
     * @param {Array.<String>} specs List of spec file paths that ran
     */
    // after: function (result, capabilities, specs) {
    // },
    /**
     * Gets executed right after terminating the webdriver session.
     * @param {Object} config wdio configuration object
     * @param {Array.<Object>} capabilities list of capabilities details
     * @param {Array.<String>} specs List of spec file paths that ran
     */
    // afterSession: function (config, capabilities, specs) {
    // },
    /**
     * Gets executed after all workers got shut down and the process is about to exit. An error
     * thrown in the onComplete hook will result in the test run failing.
     * @param {Object} exitCode 0 - success, 1 - fail
     * @param {Object} config wdio configuration object
     * @param {Array.<Object>} capabilities list of capabilities details
     * @param {<Object>} results object containing test results
     */
    onComplete: function (exitCode, config, capabilities, results) {
    },
    /**
     * Gets executed when a refresh happens.
     * @param {String} oldSessionId session ID of the old session
     * @param {String} newSessionId session ID of the new session
     */
    //onReload: function(oldSessionId, newSessionId) {
    //}
}