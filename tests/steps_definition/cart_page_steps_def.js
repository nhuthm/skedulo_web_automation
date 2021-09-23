"use strict"
const CartPage = require("../page_object/cart_page_object")
const cartPage = new CartPage()

const commons = require("../commons/commons_action")

/**
 * Click action
 */
step("Click on Cart button to show cart page", async() => {
    await cartPage.clickOnShowCartButton()
})

/**
 * Verify action
 */
step("Verify the price of the <positionNumber> product is <productPrice>", async(positionNumber, productPrice) => {
    let position = parseInt(positionNumber, 10)
    await commons.verifyActualAndExpectedResult(await cartPage.getPriceInformationOfItemAtPosition(position), productPrice)
})

step("Verify <subTotalInformation> and price is <totalPrice>", async(subTotalInformation, totalPrice) => {
    await commons.verifyActualAndExpectedResult(await cartPage.getSubTotalInformationFromBuyBoxSection(), subTotalInformation, )
    await commons.verifyActualAndExpectedResult(await cartPage.getSubTotalPriceInformationFromBuyBoxSection(), totalPrice)
})