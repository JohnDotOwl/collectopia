import { chromium } from "playwright-extra";
import StealthPlugin from 'puppeteer-extra-plugin-stealth'
chromium.use(StealthPlugin())

chromium.launch({ headless: false }).then(async (browser) => {
  const page = await browser.newPage();

  await page.goto('https://google.com', { waitUntil: "networkidle" });
  await page.screenshot({ path: 'assets/screenshots/google.png' });
  await browser.close();
});