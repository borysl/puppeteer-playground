/* eslint-env browser */
'use strict';

const puppeteer = require('puppeteer');
const devices = require('puppeteer/DeviceDescriptors');

async function openSite(url, fileName, showBrowser, emulatedDevice) {
  let opts = {
    headless: !showBrowser,
    args: [],
  };

  if (!emulatedDevice) await opts.args.push('--start-maximized');
  const browser = await puppeteer.launch(opts);
  const page = await browser.newPage();

  if (emulatedDevice) {
    if (devices[emulatedDevice]) {
      await page.emulate(devices[emulatedDevice]);
    } else {
      console.log('Unknown device!');
    }
  }
  else {
    let width = await page.evaluate(async () => await window.screen.availWidth);
    let height = await page.evaluate(async () => await window.screen.availHeight);
    await page.setViewport({ width, height });
  }

  await page.BrowserObject = browser;  

  await page.goto(url);
  
  return await page;
}

async function takeScreenshot(url, fileName, showBrowser, emulatedDevice) {
  let page = await openSite(url, showBrowser, emulatedDevice);
  
  await page.screenshot({path: fileName});
  await page.BrowserObject.close();
  console.log(`Website ${url} is screenshoted to ${fileName}`);
}

module.exports.takeScreenshot = takeScreenshot;