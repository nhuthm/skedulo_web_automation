const commons = require("../commons/commons_action")
const cartPageLocator = require(`../page_ui/cart_page_ui`)
var printf = require('printf')

class CartPage {
    // Click action
    async clickOnShowCartButton() {
        await commons.clickElementByXpathAndIDSpecial(cartPageLocator.show_cart_button_id)
    }

    // Get action
    async getPriceInformationOfItemAtPosition(position) {
        return await commons.getText(printf(cartPageLocator.product_price_at_item_xpath, position))
    }

    async getSubTotalInformationFromBuyBoxSection() {
        return await commons.getText(cartPageLocator.subtotal_information_xpath)
    }

    async getSubTotalPriceInformationFromBuyBoxSection() {
        return await commons.getText(cartPageLocator.subtotal_price_xpath)
    }
}
module.exports = CartPage