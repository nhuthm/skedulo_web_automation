class Home {
    constructor() {
        //Header - Navigation bar
        this.tab_option_xpath = '//*[@id="navbar"]//*[@id="nav-xshop-container"]//a[contains(@class,"nav") and text()="%s"]'
    }
}
module.exports = new Home()