const commons = require("../commons/commons_action")
const commonPageLocator = require(`../page_ui/commons_page_ui`)
var printf = require('printf')

class CommonPage {
    
    // Verify action
    async verifyPageTitleAppears(title) {
        await commons.verifyXpathDisplay(printf(commonPageLocator.page_title_xpath, title))
    }
}
module.exports = CommonPage