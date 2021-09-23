const commons = require("../commons/commons_action")
const homePageLocator = require(`../page_ui/home_page_ui`)
var printf = require('printf')

class HomePage {

    // Click action
    async clickOnTabOption(tabOption) {
        await commons.clickElementByXpathSpecial(printf(homePageLocator.tab_option_xpath, tabOption))
    }
}
module.exports = HomePage