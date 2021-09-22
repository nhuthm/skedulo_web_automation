"use strict";
const commons = require("../commons/commons_action")
const globalVariables = require("../commons/global_variables")

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
})

/**
 * Verify action
 */
step("Verify page title is <pageTitle>", async(pageTitle) => {

})