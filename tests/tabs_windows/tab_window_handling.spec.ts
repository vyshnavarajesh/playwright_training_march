import { test, expect } from '@playwright/test';

test('tab Handling example', async ({ page,context }) => {

  await page.goto('https://demoqa.com/browser-windows');

  //wait for new Tab to open 
 const [tabexample] = await Promise.all([
    context.waitForEvent('page'),
    page.click('#tabButton')
  ])

  await tabexample.waitForLoadState();
  console.log(await tabexample.textContent('body')); //tabexample here is the child page

  await page.bringToFront(); // page is our parent Page

  const newtab = await page.getByRole('button', {name :"New Tab"});
  await expect(newtab).toBeVisible();

  await page.close();

});


test('window Handling example', async ({ page,context }) => {

  await page.goto('https://demoqa.com/browser-windows');

  //wait for new window to open 
 const [newPage] = await Promise.all([
    context.waitForEvent('page'),
    page.click('#windowButton')
  ])

  await newPage.waitForLoadState();
  console.log(await newPage.textContent('body')); //tabexample here is the child page

  //await page.bringToFront(); // page is our parent Page

  // const someelement = await page.getByRole('button', {name :"New Tab"});
  // await expect(someelement).toBeVisible();

  await newPage.close();
  await page.close();

});