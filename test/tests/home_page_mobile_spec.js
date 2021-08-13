import HeaderSteps from "../steps/HeaderSteps";
import Logger from "../utils/Logger";
import MainProperties from "../utils/MainProperties";

const headerSteps = new HeaderSteps();
const logger = new Logger();
const mainProperties = new MainProperties();
const logPreCondition = logger.logPreConditionStep();
const logPostCondition = logger.logPostConditionStep();
const log = logger.logStep();
let device;

describe('Home page spec', () => {

    before(() => {
        browser.emulateDevice('iPhone X');
        browser.url('https://metanit.com/web/javascript/');
    });

    // beforeEach(() => {
    //
    // })

    // afterEach(() => {
    //     logPostCondition(1, 'Clear Cookies');
    // })

    // Passed test
    it('Passed test', () => {
        log(1, 'Check Home page title')
        $('#header > div.socialbtns > ul > li:nth-child(1) > a').click();
        browser.pause(10000);
    })

    // // Failed test
    // it('Failed test', () => {
    //     log(1, 'Check Home page title')
    //
    // })
    //
    // //Skipped test
    // it.skip('Skipped test', () => {
    //     log(1, 'Check Home page title')
    //     headerSteps.checkTitle(mainProperties.title());
    // })
})