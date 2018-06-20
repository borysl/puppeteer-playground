/* eslint-env browser */
'use strict';

const { openSite } = require('./openSite');

async function takeScreenshot(url, showBrowser, emulatedDevice, fileName) {
  let { page, browser } = await openSite(url, showBrowser, emulatedDevice);
  
  await page.screenshot({path: fileName});
  await browser.close();
  console.log(`Website ${url} is screenshoted to ${fileName}`);
}

module.exports.takeScreenshot = takeScreenshot;