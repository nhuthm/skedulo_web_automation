"use strict";
const {
  $,
  above,
  attach,
  below,
  button,
  clear,
  click,
  closeTab,
  dragAndDrop,
  dropDown,
  doubleClick,
  evaluate,
  hover,
  fileField,
  focus,
  goto,
  goBack,
  into,
  link,
  openTab,
  press,
  reload,
  rightClick,
  scrollTo,
  scrollDown,
  text,
  textBox,
  to,
  toRightOf,
  waitFor,
  write,
  switchTo,
} = require("taiko");

class baseAction {
    async navigateTo(url) {
        await goto(url, { waitForNavigation: false })
    }
}
module.exports = new baseAction()