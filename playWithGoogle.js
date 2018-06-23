/* eslint-env browser */
'use strict';
const { openSite } = require('./openSite');
const SHOW_BROWSER = true;

async function playScenario(page) {
  await page.waitForSelector('.gsfi');
  await page.type('.gsfi', 'lego mindstorms spik3r');
  const navigationPromise = page.waitForNavigation();
  await page.evaluate(() => {
    document.querySelector('input[type=submit]').click();
  });
  await navigationPromise;
  await page.screenshot({path: 'searchResult.png'});
}

function playWithGoogle() {
  console.log('Take some action in google');
  openSite('https://www.google.com', SHOW_BROWSER).then(({page, browser}) => {
    console.log(`Yeah! I've got page: ${page}`);
    let promise = playScenario(page, browser);
    promise.then(() => {
      console.log('Success!');
    }).catch(err => {
      console.log(`Got an error ${err}`);
    }).finally(() => {
      browser.close();
    });
  });
}

module.exports.playWithGoogle = playWithGoogle;