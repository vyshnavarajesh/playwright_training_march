import { test, expect } from '@playwright/test';




// test.skip() for skipping the test case from execution
test.skip('locator example for placeholder type', async({page}) =>{

    await page.goto("https://www.saucedemo.com/");
    await page.getByPlaceholder("Username").fill('standard_user');
    await page.getByPlaceholder("Password").fill('secret_sauce');
    await page.locator('input#login-button').click(); // css example
    await page.close();
   
})


// use test.only() to run specific test cases
test('locator example for label type', async({page}) =>{

    await page.goto("https://testautomationpractice.blogspot.com/");
    await page.getByLabel('Male').first().check(); 
    
   // await page.getByLabel('Email:').fill('testemail@yahoo.com') ;; chaining label with input
    //await page.locator('input#login-button').click(); // css example

    await page.getByTitle
    await page.close();
})


test('locator example for getByTitle type', async({page}) =>{

    await page.goto("https://testautomationpractice.blogspot.com/");

    await page.close();
})
