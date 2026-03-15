import puppeteer from 'puppeteer';
import { writeFile, mkdir } from 'fs/promises';
import { existsSync } from 'fs';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));

const url   = process.argv[2] || 'http://localhost:3000';
const label = process.argv[3] || '';

const screenshotDir = join(__dirname, 'temporary screenshots');
if (!existsSync(screenshotDir)) await mkdir(screenshotDir, { recursive: true });

// Find next available number
let n = 1;
while (existsSync(join(screenshotDir, `screenshot-${n}${label ? '-' + label : ''}.png`))) n++;
const filename = `screenshot-${n}${label ? '-' + label : ''}.png`;
const outPath  = join(screenshotDir, filename);

const browser = await puppeteer.launch({
  executablePath: 'C:/Users/ibxss/.cache/puppeteer/chrome/win64-146.0.7680.76/chrome-win64/chrome.exe',
  args: ['--no-sandbox', '--disable-setuid-sandbox']
});

const page = await browser.newPage();
await page.setViewport({ width: 1440, height: 900 });
await page.goto(url, { waitUntil: 'networkidle2', timeout: 20000 });
await new Promise(r => setTimeout(r, 800));

const screenshot = await page.screenshot({ fullPage: false });
await writeFile(outPath, screenshot);
await browser.close();

console.log(`Saved: temporary screenshots/${filename}`);
