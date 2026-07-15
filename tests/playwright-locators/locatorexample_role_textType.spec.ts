import { test, expect } from '@playwright/test';

// Playwright has inbuilt locator strategies

/*
priotity list of locators - Priority -1 
page.getByRole() to locate by explicit and implicit accessibility attributes. (heading, checkbox,link, form, table, button)
page.getByText() to locate by text content.
page.getByLabel() to locate a form control by associated label's text.
page.getByPlaceholder() to locate an input by placeholder.
page.getByAltText() to locate an element, usually image, by its text alternative.
page.getByTitle() to locate an element by its title attribute.
page.getByTestId() to locate an element based on its data-testid attribute (other attributes can be configured).


page.locator(css) // priority - 2
page.locator(xpath) //priority -3 (last option)

*/

// Selenium -> id, name, class, tagName, linkText, xpath, css


test.beforeEach('initialing browser',async ({page}) =>{
    await page.goto("https://www.demoblaze.com/#");
})

test.afterEach('closing browser',async({page}) => {
    await page.close();
})

// test.skip() for skipping the test case from execution
test('locator example for role type', async({page}) =>{

    const buttons = page.getByRole('button');
    const buttonCount = await buttons.count();

    expect(buttonCount).toBeGreaterThan(0);

    console.log(`Total number of buttons : ${buttonCount}`);

    /* use nth(0) to access multiple values based on the index => index starts with 0 
    you can replace nth(0) with first() ; only for firstvalue
    you can replace nth(n) with last() ; only for last value in index
    */
    await page.getByRole("button", {name:/Next/i}).nth(0).click();
   
})


// use test.only() to run specific test cases
test('locator example for text() type', async({page}) =>{

  //  await page.goto("https://www.demoblaze.com/#"); // moved this to beforeEach
    await page.getByText('Samsung galaxy s6', { exact: true }).click();
  //  await page.close(); // moved this to afterEach
})


