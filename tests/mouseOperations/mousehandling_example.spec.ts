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

   const sliderVariable = page.locator('#slider-range');
   sliderVariable.scrollIntoViewIfNeeded();

   await sliderVariable.screenshot({path : 'beforeslider.png'});

   const minSlideHandler = page.locator('.ui-slider-handle').nth(0);
   const maxSlideHandler = page.locator('.ui-slider-handle').nth(1);
   
   const minBox = await minSlideHandler.boundingBox();

   if(minBox){
    
    await page.mouse.move(minBox.x + minBox.width / 2, minBox.y + minBox.height / 2); // current position
    await page.mouse.down(); // click & hold

    await page.mouse.move(minBox.x + 50, minBox.y + minBox.height / 2); // we are performing horizontal slide by 50 px , no need to adjust anything on y-axis
    await page.mouse.up(); // release

   }

   const maxBox = await maxSlideHandler.boundingBox();

   if(maxBox){
    
    await page.mouse.move(maxBox.x + maxBox.width / 2, maxBox.y + maxBox.height / 2); // current position
    await page.mouse.down(); // click & hold

    await page.mouse.move(maxBox.x - 50, maxBox.y + maxBox.height / 2); // we are performing horizontal slide by 50 px , no need to adjust anything on y-axis
    await page.mouse.up(); 

   }

   await sliderVariable.screenshot({path : 'afterslider.png'});

   await page.close();

});