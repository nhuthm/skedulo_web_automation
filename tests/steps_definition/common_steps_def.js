"use strict";
const commons = require("../commons/commons_action")
const globalVariables = require("../commons/global_variables")

const CommonPage = require("../page_object/common_page_object")
const commonPage = new CommonPage()

/**
 * Click action
 */
 step("Click on <buttonName> button", async(buttonName) => {
    
})

/**
 * Navigate action
 */
step("Navigate to amazon website", async() => {
    await commons.navigateTo(globalVariables.url)
    await commons.sleep(5000)
})

/**
 * Verify action
 */
step("Verify page title is <pageTitle>", async(pageTitle) => {
    await commonPage.verifyPageTitleAppears(pageTitle)
})