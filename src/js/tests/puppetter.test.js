import puppetter from 'puppeteer';
import AppCreator from '../appCreator';
import config from '../../../jest-puppeteer.config';

jest.setTimeout(30000);
describe('Card checker', () => {
  let browser = null;
  let page = null;
  const baseUrl = `http://127.0.0.1:${config.server.port}`;
  beforeAll(async () => {
    browser = await puppetter.launch({
      // headless: true,
      // slowMo: 200,
      // devtools: true,
    });
    page = await browser.newPage();
  });
  afterAll(async () => {
    await browser.close();
  });
  describe('test', () => {
    test('card checker', async () => {
      await page.goto(baseUrl);
      const app = new AppCreator();
      app.init();
      const input = await page.$('input');
      const button = await page.$('button');
      await input.type('5321300341660715');
      await button.click();
      await page.waitForSelector('.active');
    });
  });
});
