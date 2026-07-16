import { test, expect } from '@playwright/test';

test('locator example for placeholder type', async({page}) =>{

    await page.goto("https://demoqa.com/select-menu");
    //single select option
    const selectDropDown = await page.locator("#oldSelectMenu");
   
    //selenium =>   s.selectByValue("2");
    await selectDropDown.selectOption({value : '2'});

    //selenium => 	s.selectByVisibleText("Blue");
    await selectDropDown.selectOption({label : 'Purple'});

    //selenium => 	s.selectByIndex(5);
    await selectDropDown.selectOption({index : 10});

    //multiselect Option
    const multiSelectDropDown = await page.locator("#cars");

    await multiSelectDropDown.selectOption([{value : 'saab'},{index : 3}]);

    await page.close();
   
})
