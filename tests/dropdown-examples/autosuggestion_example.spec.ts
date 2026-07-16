import { test, expect } from '@playwright/test';

test('locator example for placeholder type', async({page}) =>{

    await page.goto("https://www.cleartrip.com/");
  
    await page.locator("svg[data-testId='closeIcon']").click();

    await page.getByPlaceholder("Where from?").fill('To');

    const airportList = await page.locator("//div[@role='listbox']//ul");

    const resultAirport = airportList.filter({hasText : 'Tokyo, JP - Narita (NRT)'});
    await resultAirport.click();
    await page.close();
   
})
