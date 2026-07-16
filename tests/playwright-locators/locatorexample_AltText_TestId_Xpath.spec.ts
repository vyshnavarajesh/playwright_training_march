import { test, expect } from '@playwright/test';

test('locator example for altText, TestId, xpath type', async({page}) =>{

    await page.goto("https://www.saucedemo.com/");
    await page.getByPlaceholder("Username").fill('standard_user');
    await page.locator("xpath=//input[@id='password']").fill('secret_sauce'); // xpath
    await page.getByTestId("login-button").click(); //data-testid => here we are using testIdAttribute to convert data-test to data-testid
    await page.getByAltText("Sauce Labs Backpack").click(); // alt

    const pageTitle = await page.title(); 
    console.log('pageTitle => ',pageTitle);

    const productPrice = await page.getByTestId("inventory-item-price").textContent(); //textContent is same as getText in selenium
    console.log('productPrice => ',productPrice);

    await page.close();
})