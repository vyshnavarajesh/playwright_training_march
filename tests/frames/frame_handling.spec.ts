import { test, expect } from '@playwright/test';

test('frame handler', async ({ page }) => {
  await page.goto('https://practice-automation.com/iframes/');

    const frameLoc = page.frameLocator('#iframe-1');

    await frameLoc.getByRole('link', {name : "Docs"}).click();

 // console.log(frameLoc.getByRole('link', {name : "How to install Playwright"}).isVisible());


});