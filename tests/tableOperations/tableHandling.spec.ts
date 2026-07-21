import { test, expect, Locator } from '@playwright/test';

test('table examples with unique data reading', async ({ page }) => {
    await page.goto('https://testautomationpractice.blogspot.com/');

    await page.locator('#taskTable').scrollIntoViewIfNeeded();

    let rows:Locator[] = await page.locator('#taskTable tbody tr').all();

    console.log(rows); // all the row locators

    let cpu = '';
    for(let row of rows){

        const browserName = await row.locator('td').nth(0).innerText();
        if(browserName === 'Firefox')
        {
            cpu = await row.locator('td').filter({hasText : '%'}).innerText();
            
            console.log('cpu utilisation =>',cpu);
            break;
        }
    }

   await page.close();

});



test.only('table examples with duplicate data reading', async ({ page }) => {
    await page.goto('https://testautomationpractice.blogspot.com/');

    await page.locator('#taskTable').scrollIntoViewIfNeeded();

    let headers = await page.locator('#taskTable thead th').allInnerTexts();

    let memoryColumnIndex = headers.findIndex(header => header.trim() === 'Memory (MB)'); 
    console.log('memorycolumn =>',memoryColumnIndex);

    let rows:Locator[] = await page.locator('#taskTable tbody tr').all();

    console.log(rows); // all the row locators

    let memory = '';
    for(let row of rows){

        const browserName = await row.locator('td').nth(0).innerText(); // browserName
        if(browserName === 'Firefox')
        {
            memory = await row.locator('td').nth(memoryColumnIndex).innerText();
            console.log(memory);
            break;
        }
    }

   await page.close();

});



test.only('table examples with pagination', async ({ page }) => {

    const targetElement = 'Streaming Device';
    let found = false;

    await page.goto('https://testautomationpractice.blogspot.com/');

    await page.locator('#productTable').scrollIntoViewIfNeeded();

    const pagelinks = page.locator('#pagination a');
    const linkCount = await pagelinks.count();
    console.log('linkCount => ',linkCount);

    for(let i=1; i<= linkCount;i++){

      await page.locator(`#pagination a:has-text("${i}")`).click();
      await page.locator('#productTable tbody tr').first().waitFor(); // first() is used to go through row by row

      const tgElementRow = await page.locator('#productTable tbody tr').filter({hasText : targetElement}); // filter for target element ROw 

        if(await tgElementRow.count() > 0)
        {
           await tgElementRow.locator('td:nth-child(4) input[type="checkbox"]').click();
           found = true;
           break;
        }
    }

   // await page.locator('#productTable').screenshot({path : "img1.png"});
    await page.pause();
    await page.close();

});