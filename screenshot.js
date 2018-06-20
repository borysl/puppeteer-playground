'use strict';

const puppeteer = require('puppeteer');
const devices = require('puppeteer/DeviceDescriptors');

async function takeScreenshot(url, fileName, showBrowser, emulatedDevice) {
  const browser = await puppeteer.launch({
    headless: !showBrowser,
    // args: ['--start-maximized'],
  });
  const page = await browser.newPage();
  // let width = await page.evaluate(async () => await window.screen.availWidth);
  // let height = await page.evaluate(async () => await window.screen.availHeight);

  if (emulatedDevice) {
    if (devices[emulatedDevice]) {
      await page.emulate(devices[emulatedDevice]);
    } else {
      console.log('Unknown device!');
    }
  }
  // await page.setViewport({ width, height });
  await page.goto(url);
  await page.screenshot({path: fileName});

  await browser.close();
  console.log(`Website ${url} is screenshoted to ${fileName}`);
}

module.exports.takeScreenshot = takeScreenshot;