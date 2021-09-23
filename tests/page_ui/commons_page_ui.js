class Common {
    constructor() {
        //Page title
        this.page_title_xpath = '//h1[text()="%s"]'
    }
}
module.exports = new Common()