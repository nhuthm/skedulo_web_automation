const commons = require("../commons/commons_action")
const headerPageLocator = require(`../page_ui/header_page_ui`)
var printf = require('printf')

class HeaderPage {
    // Click action
    async clickOnLogo() {
        await commons.clickElementByXpathAndIDSpecial(headerPageLocator.logo_id)
    }

    async clickOnSearchButton() {
        await commons.clickElementByXpathAndIDSpecial(headerPageLocator.search_button_id)
    }

    // Enter action
    async enterValueToSearchTextBoxField(value) {
        await commons.enterToFieldByID(headerPageLocator.search_textbox_id, value)
    }
}
module.exports = HeaderPage