'use strict';

const openPage = require('../openPage');

describe('myHeritage suite', () => {
  test('Opening main page', async () => {
    const {browser, page } = await openPage('https://www.myheritage.com/');
    await browser.close();
  }, 10000);
  test('Order DNA test', async () => {
    const {browser, page } = await openPage('https://www.myheritage.com/');
    const navigationPromise = page.waitForNavigation();
    await page.click('#top_get_dna_test_button');
    await navigationPromise;
    await page.screenshot({path: 'DNATestProposal.png'})
    await browser.close();
  }, 10000);
})

describe('google tests', () => {
  test('Search for bunch of cash in google', async () => {
    const { browser, page } = await openPage('https://www.google.com/');
    await page.type('.gsfi', 'трімільйона налічнимі!')
    const navigationPromise = page.waitForNavigation();
    await page.click('input[type=submit]');
    await navigationPromise;
    await page.screenshot({path: 'searchResult.png'})
    await browser.close();
  })
})