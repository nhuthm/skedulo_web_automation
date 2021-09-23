"use strict"
const HeaderPage = require("../page_object/header_page_object")
const headerPage = new HeaderPage()

const commons = require("../commons/commons_action")

/**
 * Click action
 */
step("Click on Amazon Logo on header", async() => {
    await headerPage.clickOnLogo()
})

step("Click on the search button", async() => {
    await headerPage.clickOnSearchButton()
})

/**
 * Enter action
 */
step("Enter <value> into search textbox field", async(value) => {
    await headerPage.enterValueToSearchTextBoxField(value)
})