const commons = require("../commons/commons_action")
const listPageLocator = require(`../page_ui/list_page_ui`)
var printf = require('printf')

class ListPage {

    // Click action
    async clickOnTheDropdownFilter() {
        await commons.clickElementByXpath(listPageLocator.dropdown_xpath)
    }

    async clickOnDescendingOptionFromDropdownFilter() {
        await commons.selectDropDownByName(listPageLocator.dropdown_name, "Discount - high to low")
    }

    async clickOnNewestArrivalsOptionFromDropdownFilter() {
        await commons.selectDropDownByName(listPageLocator.sort_by_dropdown_name, "Newest Arrivals")
    }

    async clickToViewItemAtPositionInTheList(position) {
        await commons.clickElementByXpathSpecial(printf(listPageLocator.view_item_button_at_position_xpath, position))
    }

    async clickOnItemAtPositionInTheList(position) {
        await commons.clickElementByXpathSpecial(printf(listPageLocator.item_at_position_xpath, position))
    }
}
module.exports = ListPage