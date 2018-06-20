'use strict';
const { openSite } = require('./openSite');
const SHOW_BROWSER = true;

async function playScenario(page) {
  await page.type('.gsfi', 'lego mindstorms spik3r');
  const navigationPromise = page.waitForNavigation();
  await page.click('input[type=submit]');
  await navigationPromise;
  await page.screenshot({path: 'searchResult.png'});
}

async function playWithGoogle() {
  console.log('Take some action in google');
  let {page, browser} = await openSite('https://www.google.com', SHOW_BROWSER);
  console.log(`Yeah! I've got page: ${page}`);
  try {
    await playScenario(page, browser);
    console.log('Success!');
  } catch (err) {
    console.log(`Got an error ${err}`);
  } finally {
    await browser.close();
  }
}

module.exports.playWithGoogle = playWithGoogle;