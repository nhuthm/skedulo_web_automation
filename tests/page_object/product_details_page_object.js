const commons = require("../commons/commons_action")
const productDetailsPageLocator = require(`../page_ui/product_details_page_ui`)

class ProductDetailsPage {

    // Click action
    async clickOnAddToCartButton() {
        await commons.clickElementByXpathAndID(productDetailsPageLocator.add_to_cart_id)
    }

    async clickOnCartButton() {
        await commons.clickElementByXpathAndIDSpecial(productDetailsPageLocator.cart_button_id)
    }

    // Select action
    async selectOptionFromQuantityDropdown(quantityOption) {
        await commons.selectDropDownByName(productDetailsPageLocator.quantity_name, quantityOption-1)
    }
}
module.exports = ProductDetailsPage