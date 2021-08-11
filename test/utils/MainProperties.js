import testData from '../data/url.json';

export default class MainProperties {

    constructor() {
        this.data = testData;
    }

    title = () => this.data.text.title;
    wrongTitle = () => this.data.text.wrongTitle;
}