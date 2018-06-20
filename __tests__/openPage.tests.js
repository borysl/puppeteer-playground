const openPage = require('../openPage');

describe('myHeritage suite', () => {
  test('Opening main page', async () => {
    const {browser, page } = await openPage('https://www.myheritage.com/');
    await browser.close();
  }, 10000);
})