import HeaderSteps from "../steps/HeaderSteps";
import Logger from "../utils/Logger";
import MainProperties from "../utils/MainProperties";

const headerSteps = new HeaderSteps();
const logger = new Logger();
const mainProperties = new MainProperties();
const logPreCondition = logger.logPreConditionStep();
const logPostCondition = logger.logPostConditionStep();
const log = logger.logStep();

describe('Home page spec', () => {

    beforeEach(() => {
        logPreCondition(1, 'Open Home Page');
        browser.url('http://localhost:8000');
    })

    afterEach(() => {
        logPostCondition(1, 'Clear Cookies');
    })

    //Passed test
    it('Passed test', () => {
        log(1, 'Check Home page title')
        headerSteps.checkTitle(mainProperties.title());
    })

    //Failed test
    it('Failed test', () => {
        log(1, 'Check Home page title')
        headerSteps.checkTitle(mainProperties.wrongTitle());
    })

    //Skipped test
    it.skip('Skipped test', () => {
        log(1, 'Check Home page title')
        headerSteps.checkTitle(mainProperties.title());
    })
})