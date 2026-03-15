import puppeteer from 'puppeteer';
import { writeFile } from 'fs/promises';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';
const __dirname = dirname(fileURLToPath(import.meta.url));
const browser = await puppeteer.launch({
  executablePath: 'C:/Users/ibxss/.cache/puppeteer/chrome/win64-146.0.7680.76/chrome-win64/chrome.exe',
  args: ['--no-sandbox', '--disable-setuid-sandbox']
});
const page = await browser.newPage();
await page.setViewport({ width: 600, height: 900 });
await page.goto('http://localhost:3000', { waitUntil: 'networkidle2', timeout: 20000 });
await new Promise(r => setTimeout(r, 800));
await page.evaluate(() => openModal(0));
await new Promise(r => setTimeout(r, 600));
const shot = await page.screenshot({ fullPage: false });
await writeFile(join(__dirname, 'temporary screenshots', 'screenshot-modal-open2.png'), shot);
await browser.close();
console.log('done');
