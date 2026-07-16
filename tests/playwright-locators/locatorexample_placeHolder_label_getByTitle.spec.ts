import { test, expect } from '@playwright/test';
import { link } from 'node:fs';

test.skip('locator example for placeholder type', async({page}) =>{

    await page.goto("https://www.saucedemo.com/");
    await page.getByPlaceholder("Username").fill('standard_user');
    await page.getByPlaceholder("Password").fill('secret_sauce');
    await page.locator('input#login-button').click(); // css example
    await page.close();
   
})

test('locator example for label type - radio & checkbox', async({page}) =>{

    await page.goto("https://testautomationpractice.blogspot.com/");
    await page.getByLabel('Male').first().check(); //radio we use check()
    await page.getByLabel('Sunday').first().check(); // checkbox we use check()
    await page.close();
})


test('locator example for getByTitle type', async({page}) =>{

    await page.goto("https://www.demoblaze.com/");
    await page.getByRole('link',{name:"About us"}).first().click(); 
    await page.getByTitle('Play Video').click({timeout:3000}); // you can send out a timeout as an argument to action to happen
    await page.getByTitle('Pause').click();
    await page.getByRole('button',{name:'Close'}).nth(0).click();

    const title = await page.title();
    console.log("page title => ", title);
    await page.close();
})

