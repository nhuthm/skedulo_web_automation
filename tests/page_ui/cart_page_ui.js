class Cart {
    constructor() {
        this.show_cart_button_id = "hlb-view-cart-announce"
        this.product_price_at_item_xpath = "//*[contains(@class,'list-item-content')][%s]//span[contains(@class,'price')]"
        this.subtotal_information_xpath = "//*[contains(@class,'sc-number-of-items') and contains(@id,'subtotal-label-buybox')]"
        this.subtotal_price_xpath = "//*[@id='sc-buy-box']//*[contains(@id,'subtotal-amount')]/span"
    }
}
module.exports = new Cart()