var url = process.env.WEB_URL || 'https://www.amazon.com.au/';
var headless_chrome = process.env.HEADLESS_CHROME !== "false";

module.exports = {
  url,
  headless_chrome,
};
