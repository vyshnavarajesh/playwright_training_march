import { test, expect } from '@playwright/test';

test('alert pop-up handling example', async ({ page }) => {


  //page.on is a listener enabled for certain event eg: alerts, errors etc., 
  page.on('dialog', async dialog =>
    {
        if(dialog.type() === 'alert'){
            await dialog.accept();
        }
        else if(dialog.type() === 'confirm'){
            await dialog.dismiss();
        }
        else if(dialog.type() === 'prompt'){
            await dialog.accept("Test Input for alert");
        }
    })

    await page.goto('https://testautomationpractice.blogspot.com/');

    await page.getByRole('button', {name :"Simple Alert"}).click();
    await page.getByRole('button', {name :"Confirmation Alert"}).click();
    await page.getByRole('button', {name :"Prompt Alert"}).click();

    // await page.close();

});
