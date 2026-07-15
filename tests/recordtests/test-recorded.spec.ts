import { test, expect } from '@playwright/test';

// record the steps using => (command in the terminal) npx playwright codegen https://flipkart.com

// record steps from playwright extension as well

test('This test cases is created through recorder', async ({ page }) => {
  console.time()
  await page.goto('https://demoblaze.com/');
  await page.getByRole('link', { name: 'Phones' }).click();
  await page.getByRole('link', { name: 'Contact' }).click();
  await page.getByRole('dialog', { name: 'New message' }).getByLabel('Close').click();
  await page.getByRole('link', { name: 'Cart' }).click();
  await page.getByRole('button', { name: 'Place Order' }).click();
  await page.getByRole('dialog', { name: 'Place order' }).getByLabel('Close').click();
  await page.getByRole('link', { name: 'Home (current)' }).click();
  await expect(page.locator('#tbodyid')).toContainText('Apple galaxy s6');
  await page.close();
  console.timeEnd();
  
});