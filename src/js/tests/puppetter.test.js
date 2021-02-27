import puppetter from 'puppeteer';
import AppCreator from '../appCreator';

jest.setTimeout(30000);
describe('Card checker', () => {
  let browser = null;
  let page = null;
  const baseUrl = 'http://localhost:9000';
  beforeAll(async () => {
    browser = await puppetter.launch();
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
