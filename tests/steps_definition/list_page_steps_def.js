"use strict"
const ListPage = require("../page_object/list_page_object")
const listPage = new ListPage()

/**
 * Click action
 */
step("Select an option <optionName> from filter dropdown", async(optionName) => {
    switch (optionName) {
        case "Discount - high to low":
            await listPage.clickOnDescendingOptionFromDropdownFilter()
            break
    } 
})

step("Click on the <buttonName> button at the <positionNumber> product", async(buttonName, positionNumber) => {
    let position = parseInt(positionNumber, 10)
    await listPage.clickToViewItemAtPositionInTheList(position)
})