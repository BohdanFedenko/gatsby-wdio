import Header from "../pages/Header";

export default class HeaderSteps {

    header = new Header();

    checkTitle(title) {
        allure.addStep(`Check that the page url is equal to: ${title}`);
        expect(this.header.getTitle()).toHaveText(title);
    }
}