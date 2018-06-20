'use strict';

const puppeteer = require('puppeteer');

async function takeScreenshot(url, fileName, showBrowser) {
  const browser = await puppeteer.launch({
    headless: !showBrowser,
    args: ['--start-maximized'],
  });
  const page = await browser.newPage();
  let width = await page.evaluate(async () => await window.screen.availWidth);
  let height = await page.evaluate(async () => await window.screen.availHeight);

  await page.setViewport({ width, height });
  await page.goto(url);
  await page.screenshot({path: fileName});

  await browser.close();
  await console.log(`Website ${url} is screenshoted to ${fileName}`);
}

module.exports.takeScreenshot = takeScreenshot;