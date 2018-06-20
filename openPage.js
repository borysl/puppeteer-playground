'use strict';

const puppeteer = require('puppeteer');

async function openPage(url) {
  const browser = await puppeteer.launch({
    headless: false,
  });
  const page = await browser.newPage();
  await page.goto(url);
  return { browser, page };
}

module.exports = openPage;
