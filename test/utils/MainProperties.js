import testData from '/src/test/data/testData.json';

export default class MainProperties {

    constructor() {
        this.data = testData;
    }

    title = () => this.data.text.title;
    wrongTitle = () => this.data.text.wrongTitle;
}