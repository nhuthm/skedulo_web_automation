var url = process.env.WEB_URL || 'https://www.google.com';
var headless_chrome = process.env.HEADLESS_CHROME !== "false";

module.exports = {
  url,
  headless_chrome,
};
