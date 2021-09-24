"use strict";
const {
  $,
  click,
  dropDown,
  evaluate,
  goto,
  into,
  textBox,
  waitFor,
  write,
} = require("taiko");
const chai = require("chai")
const expect = chai.expect
const assert = require("assert")

class baseAction {

    /* Enter action */
    async enterToFieldByID(ID, value) {
        await write(value, into(textBox({ id: ID })))
    }

    /* Get action */
    async getText(xpath) {
        return await $(xpath).text()
    }

    /* Click action */
    async clickElementByXpath(xpath) {
        await click($(xpath))
    }

    async clickElementByXpathSpecial(xpath) {
        await click($(xpath),{waitForEvents:['loadEventFired']})
    }

    async forceClickElementByXpath(xpath) {
        await click($(xpath), {force: true})
    }

    async clickElementByXpathAndID(ID) {
        await click($("//*[@id = '" + ID + "']"))
    }

    async clickElementByXpathAndIDSpecial(ID) {
        await click($("//*[@id = '" + ID + "']"),{waitForEvents:['loadEventFired']})
    }

    async clickElementByXpathAndName(name) {
        await click($("//*[@name = '" + name + "']"))
    }

    async clickElementByXpathAndNameSpecial(name) {
        await click($("//*[@name = '" + name + "']"),{waitForEvents:['loadEventFired']})
    }
    
    /* Navigate action */
    async navigateTo(url) {
        await goto(url,{waitForStart: 0})
    }

    /* Select method */
    async selectDropDownByName(dropdownName, dropDownOption) {
        await dropDown({ name: dropdownName }).select(dropDownOption)
    }

    /* Sleep method */
    sleep(ms) {
        return new Promise((resolve) => setTimeout(resolve, ms))
    }

    async waitForPageLoad(){
        try{
            var waitCount = 0;
            var state = (await evaluate(()=>{return document.readyState}))
            while(state != 'complete' &&waitCount<120){
                //wait for page load with document ready state
                await waitFor(2000);
                state = await evaluate(()=>{return document.readyState})
                waitCount ++;
            }
        } catch (ex){}
    }

    /* Verify method */
    async verifyXpathDisplay(xpath) {
        expect(await $(xpath).exists()).to.be.true
    }

    async verifyActualAndExpectedResult(actual, expected) {
        assert.equal(
            actual,
            expected,
            "Actual: " + actual + " But Expected: " + expected
          );
    }
}
module.exports = new baseAction()