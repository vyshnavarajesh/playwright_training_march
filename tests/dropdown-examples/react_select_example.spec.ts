import { test, expect } from '@playwright/test';

test('locator example for placeholder type', async({page}) =>{

    await page.goto("https://demoqa.com/select-menu");
  
    const selectDropDown = await page.locator("(//div[contains(text(),'Select..')]//parent::div)[1]");

    await selectDropDown.scrollIntoViewIfNeeded();

    await selectDropDown.click({timeout :3000});

    await page.locator('#react-select-4-option-1').click();
    
    await page.locator('#react-select-4-option-3').click();

    await page.screenshot({ path: 'fullPagescreenshot.png', fullPage: true });

    await page.close();
   
})
