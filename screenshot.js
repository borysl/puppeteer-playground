const puppeteer = require('puppeteer');

async function takeScreenshot(url, fileName, showBrowser) {
  const browser = await puppeteer.launch({headless:!showBrowser});
  const page = await browser.newPage();
  await page.goto(url);
  await page.screenshot({path: fileName});

  await browser.close();
  await console.log(`Website ${url} is screenshoted to ${fileName}`);
}

module.exports.takeScreenshot = takeScreenshot;