"use strict"
const ProductDetailsPage = require("../page_object/product_details_page_object")
const productDetailsPage = new ProductDetailsPage()

const commons = require("../commons/commons_action")

/**
 * Click action
 */
step("Click on Add To Cart button", async() => {
    await productDetailsPage.clickOnAddToCartButton()
})

step("Click on Cart button", async() => {
    await productDetailsPage.clickOnCartButton()
})

/**
 * Select action
 */
step("Select <quantity> items at the Quantity filter", async(quantity) => {
    await productDetailsPage.selectOptionFromQuantityDropdown(quantity)
})