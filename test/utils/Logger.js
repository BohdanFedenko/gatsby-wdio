import logger from "@wdio/logger";

export default class Logger {

    log = new logger('For test');

    logStep() {
        return (number, description) => {
            this.log.info(`Test Step ${number}: ${description}`);
        }
    }

    logPreConditionStep() {
        return (number, description) => {
            this.log.info(`Pre-Condition Step ${number}: ${description}`);
        }
    }

    logPostConditionStep() {
        return (number, description) => {
            this.log.info(`Post-Condition Step ${number}: ${description}`);
        }
    }

    logAddInfo() {
        return info => {
            this.log.info(`Additional info: ${info}`);
        }
    }
}