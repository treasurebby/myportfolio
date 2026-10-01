import { test } from 'node:test';
import assert from 'node:assert/strict';
import { spawn } from 'node:child_process';
import { once } from 'node:events';
import { mkdir } from 'node:fs/promises';
import { chromium } from 'playwright';

test('Portfolio works on desktop, mobile, and with reduced motion', { timeout: 60000 }, async () => {
  const server = spawn(process.execPath, ['server.mjs'], { env: { ...process.env, PORT: '3100' }, stdio: ['ignore', 'pipe', 'inherit'] });
  let browser;
  try {
    await once(server.stdout, 'data');
    browser = await chromium.launch({ channel: process.env.BROWSER_CHANNEL || 'chrome', headless: true });
    const page = await browser.newPage({ viewport: { width: 1440, height: 1000 }, colorScheme: 'light' });
    const errors = [];
    page.on('pageerror', error => errors.push(error.message));
    page.on('response', response => { if (response.status() >= 400 && response.url().startsWith('http://127.0.0.1')) errors.push(`${response.status()} ${response.url()}`); });
    await page.goto('http://127.0.0.1:3100');
    assert.equal(await page.locator('.welcome-intro').isVisible(), true);
    assert.equal(await page.locator('main').evaluate(el => el.inert), true);
    await mkdir('.artifacts', { recursive: true });
    await page.waitForFunction(() => getComputedStyle(document.querySelector('.welcome-letter:last-child')).opacity === '1');
    await page.screenshot({ path: '.artifacts/welcome-intro.png' });
    await page.locator('.welcome-intro').waitFor({ state: 'hidden' });
    assert.equal(await page.locator('main').evaluate(el => el.inert), false);
    await page.evaluate(() => document.fonts.ready);
    await page.locator('.beach img').evaluate(async image => { image.loading = 'eager'; await image.decode(); });
    assert.match(await page.title(), /Ehiomhen Treasure/);
    assert.equal(await page.locator('.project').count(), 3);
    assert.equal(await page.locator('.article-row').count(), 2);
    for (const link of await page.locator('a[href^="#"]').evaluateAll(links => links.map(link => link.hash))) {
      assert.equal(await page.locator(link).count(), 1, `Anchor ${link} resolves`);
    }
    const pdf = await page.request.get('http://127.0.0.1:3100/assets/Treasure_Ehiomhen_CV.pdf');
    assert.equal(pdf.status(), 200);
    assert.equal((await pdf.body()).subarray(0, 4).toString(), '%PDF');
    const avatar = page.locator('.avatar');
    await page.mouse.move(5, 5);
    await page.waitForFunction(() => document.querySelector('.avatar').style.backgroundPosition === '0% 0%');
    await page.mouse.move(1400, 850);
    await page.waitForFunction(() => document.querySelector('.avatar').style.backgroundPosition === '100% 100%');
    await page.locator('.experience summary').first().click();
    assert.equal(await page.locator('.experience[open]').count(), 1);
    await page.locator('.experience summary').first().click();
    await page.evaluate(() => window.scrollTo(0, 0));
    await page.mouse.move(650, 260);
    await mkdir('.artifacts', { recursive: true });
    await page.screenshot({ path: '.artifacts/desktop-light.png', fullPage: true });
    await page.getByRole('button', { name: 'Switch to dark mode' }).click();
    await page.reload();
    assert.equal(await page.locator('.welcome-intro').isVisible(), false, 'Intro does not repeat in this tab');
    await page.locator('.beach img').evaluate(async image => { image.loading = 'eager'; await image.decode(); });
    assert.equal(await page.locator('html').getAttribute('data-theme'), 'dark');
    assert.equal(await page.getByRole('button', { name: 'Switch to light mode' }).getAttribute('aria-pressed'), 'true');
    await page.screenshot({ path: '.artifacts/desktop-dark.png', fullPage: true });
    await page.emulateMedia({ reducedMotion: 'reduce' });
    await page.mouse.move(1, 1);
    assert.equal(await avatar.evaluate(el => el.style.backgroundPosition), '50% 50%');
    for (const width of [320, 375, 390, 768]) {
      await page.setViewportSize({ width, height: 844 });
      assert.equal(await page.evaluate(() => document.documentElement.scrollWidth <= innerWidth), true, `No horizontal overflow at ${width}px`);
    }
    await page.getByRole('button', { name: 'Switch to light mode' }).click();
    await page.setViewportSize({ width: 390, height: 844 });
    await page.screenshot({ path: '.artifacts/mobile-light.png', fullPage: true });
    const touch = await browser.newContext({ viewport: { width: 390, height: 844 }, isMobile: true, hasTouch: true, colorScheme: 'light' });
    const mobile = await touch.newPage();
    await mobile.goto('http://127.0.0.1:3100');
    assert.equal(await mobile.locator('.welcome-intro').isVisible(), true);
    await mobile.getByRole('button', { name: 'Skip intro' }).tap();
    assert.equal(await mobile.locator('.welcome-intro').isVisible(), false);
    await mobile.getByRole('button', { name: 'Switch to dark mode' }).tap();
    assert.equal(await mobile.locator('html').getAttribute('data-theme'), 'dark');
    await page.locator('.certifications-link').click();
    await page.waitForURL('**/beyond.html');
    assert.match(await page.title(), /Beyond the classroom/);
    assert.equal(await page.locator('.leadership-card').count(), 3);
    assert.equal(await page.locator('.community-row').count(), 4);
    assert.equal(await page.locator('.certificate-row').count(), 7);
    await page.evaluate(async () => {
      await document.fonts.ready;
      await Promise.all([...document.images].map(image => { image.loading = 'eager'; return image.decode(); }));
    });
    await page.mouse.move(100, 200);
    await page.locator('#certifications').scrollIntoViewIfNeeded();
    for (const width of [320, 390, 768, 1440]) {
      await page.setViewportSize({ width, height: 900 });
      assert.equal(await page.evaluate(() => document.documentElement.scrollWidth <= innerWidth), true, `Beyond page fits ${width}px`);
    }
    await page.evaluate(() => window.scrollTo(0, 0));
    await page.screenshot({ path: '.artifacts/beyond-desktop.png', fullPage: true });
    await page.getByRole('button', { name: 'Switch to dark mode' }).click();
    await page.reload();
    assert.equal(await page.locator('html').getAttribute('data-theme'), 'dark');
    const accessible = await browser.newContext({ reducedMotion: 'reduce' });
    const reducedPage = await accessible.newPage();
    await reducedPage.goto('http://127.0.0.1:3100');
    assert.equal(await reducedPage.locator('.welcome-intro').isVisible(), false);
    assert.equal(await reducedPage.locator('main').evaluate(el => el.inert), false);
    const keyboardContext = await browser.newContext({ viewport: { width: 320, height: 700 } });
    const keyboardPage = await keyboardContext.newPage();
    await keyboardPage.goto('http://127.0.0.1:3100');
    assert.equal(await keyboardPage.evaluate(() => document.documentElement.scrollWidth <= innerWidth), true);
    await keyboardPage.keyboard.press('Tab');
    assert.equal(await keyboardPage.getByRole('button', { name: 'Skip intro' }).evaluate(el => el === document.activeElement), true);
    await keyboardPage.keyboard.press('Escape');
    assert.equal(await keyboardPage.locator('.welcome-intro').isVisible(), false);
    await page.setViewportSize({ width: 390, height: 844 });
    await page.evaluate(async () => {
      await Promise.all([...document.images].map(image => { image.loading = 'eager'; return image.decode(); }));
    });
    await page.screenshot({ path: '.artifacts/beyond-mobile-dark.png', fullPage: true });
    for (const link of await page.locator('a[href^="#"]').evaluateAll(links => links.map(link => link.hash))) {
      assert.equal(await page.locator(link).count(), 1);
    }
    await page.getByRole('link', { name: 'Back to my little corner' }).click();
    await page.waitForURL('**/index.html');
    assert.equal(await page.locator('html').getAttribute('data-theme'), 'dark');
    assert.deepEqual(errors, [], 'No browser errors or missing assets');
  } finally {
    await browser?.close();
    server.kill();
  }
});
