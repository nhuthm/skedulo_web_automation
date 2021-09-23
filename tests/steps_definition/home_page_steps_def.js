"use strict"
const HomePage = require("../page_object/home_page_object")
const homePage = new HomePage()
/**
 * Click action
 */
step("Click on the <tabOption> tab", async(tabOption) => {
    await homePage.clickOnTabOption(tabOption)
})