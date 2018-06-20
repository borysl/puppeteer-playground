/* eslint-env browser */
'use strict';

const puppeteer = require('puppeteer');
const devices = require('puppeteer/DeviceDescriptors');
const promiseFinally = require('promise.prototype.finally');

// Add `finally()` to `Promise.prototype`
promiseFinally.shim();

async function openSite(url, showBrowser, emulatedDevice) {
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

  await page.goto(url);
  
  return await { page, browser };
}

module.exports.openSite = openSite;