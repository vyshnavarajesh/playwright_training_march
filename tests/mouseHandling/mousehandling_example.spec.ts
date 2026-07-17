import { test, expect } from '@playwright/test';

test('mouse examples', async ({ page }) => {
    await page.goto('https://testautomationpractice.blogspot.com/');

    await page.getByRole("button", {name : "Point Me"}).hover();

    await page.getByRole("button", {name : "Copy Text"}).dblclick();

   // await page.getByRole("button", {name : "Copy Text"}).click({button : "right"});

   // await page.getByRole("button", {name : "Copy Text"}).click({modifiers : ['Shift']}); // combination of shift+click

   const src =  page.locator("#draggable");

   const tg =  page.locator("#droppable");

   await src.dragTo(tg);

//    const sliderVariable = page.locator('#slider-range');

//     const boxVar = sliderVariable.boundingBox();
   
//     if(boxVar){
//         await page.mouse.move(0,100);
//     }


});