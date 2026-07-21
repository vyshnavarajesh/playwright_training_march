import { test, expect, Locator } from '@playwright/test';


const inputDate = '09/30/2026';

test.only('DatePicker example One', async ({ page }) => {

    await page.goto('https://testautomationpractice.blogspot.com/');

    const [mm, dd, yyyy] = inputDate.split('/').map(Number);
    const target = new Date(yyyy, mm - 1, dd);

    const tgMonth = target.toLocaleString('en-US', { month: 'long' });
    const tgDate = String(target.getDate());
    const tgYear = String(target.getFullYear());

    console.log(`Target Date : ${tgMonth} ${tgDate} ${tgYear}`)


    await page.locator('input#datepicker').scrollIntoViewIfNeeded();

    await page.locator('input#datepicker').click();

    const monthLabel = await page.locator('.ui-datepicker-month');
    const yearLabel = await page.locator('.ui-datepicker-year');
    const nextBtn = await page.locator('.ui-datepicker-next');
    const prevBtn = await page.locator('.ui-datepicker-previous');


    while(!(await monthLabel.innerText()) || (await monthLabel.innerText()) !== tgMonth || 
    (await yearLabel.innerText())!== tgYear){

        const currentYear = Number(await yearLabel.innerText());

        const isFuture = currentYear > Number(tgYear) || (currentYear === Number(tgYear) && 
            new Date (`${await monthLabel.innerText()}`).getMonth() > target.getMonth());

        await (isFuture ? prevBtn : nextBtn).click();

    }

    await page.locator('table.ui-datepicker-calendar tbody tr a', {hasText : tgDate}).first().click();   

    await page.pause();
   // await page.close();

});

