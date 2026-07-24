import { test, expect, Locator } from '@playwright/test';


const inputDate = '09/30/2026';

test.skip('DatePicker example One', async ({ page }) => {

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



test.only('DatePicker example Two with 2 month info', async ({ page }) => {
    
    await page.goto('https://www.cleartrip.com/');
    await page.locator("svg[data-testid='closeIcon']").click({timeout : 3000}).catch((error) => {console.log(error)});

    const today = new Date();
    const targetDate = new Date(today);
    targetDate.setDate(today.getDate() + 100); // 100 days from current Date

    const targetMonth = targetDate.toLocaleString('en-US', { month: 'long' }); // November
    const targetMonthShort = targetDate.toLocaleString('en-US', { month: 'short' }); // Nov
    const targetDay = targetDate.getDate();
    const targetYear = targetDate.getFullYear();

    console.log(`Target Date : ${targetDay} ${targetMonth} ${targetYear}`)

    await page.locator("div[data-testid='dateSelectOnward']").click();

    const singlemonthInfo = page.locator('div.DayPicker-Months div.DayPicker-Caption > div');
    const nextArrow = page.locator("svg[data-testid='rightArrow']");

    // This is to click on next Arrow based on target vs visible month / Year 
    while(true){
        const monthsInfo = await singlemonthInfo.allInnerTexts(); // July 2026, August 2026 etc.,

        console.log(monthsInfo);
        const flag = monthsInfo.some(text => {
            const[visibleMonth, visibleYear] = text.split(" ");
            return visibleMonth.toLowerCase() === targetMonth.toLocaleLowerCase() && Number(visibleYear) === targetYear;
        });

        if(flag) break;

        await nextArrow.click();
        await page.waitForTimeout(500);

    }

   // const calendarDays = page.locator("div.DayPicker-Day:not([aria-disabled='true'])");
   const calendarDays = page.locator("//div[contains(@class,'DayPicker-Day') and not (contains(@aria-disabled,'true'))]");
  
    const count = await calendarDays.count();
    for(let i=0; i< count; i++){

        const day = calendarDays.nth(i);
        //const dayLabel = await day.getAttribute('aria-label');
        const dayLabel = await page.locator('div.DayPicker-Day').nth(i).getAttribute('aria-label');
        console.log(dayLabel);

    if(!dayLabel) continue;

        if(dayLabel.includes(targetMonthShort) && dayLabel.includes(String(targetYear))){

            const dateCombo = dayLabel.split(' '); // spliting => Wed Nov 04 2026 [0 => Wed ; 1 => Nov ; 2 => 04 ; 3 => 2026]
            const dateLabel = Number(dateCombo[2]); // 04

            if(dateLabel === targetDay){
                await day.click();
                console.log(day);
                break;
            }
        }

    }

    await page.waitForTimeout(3000);
    await page.screenshot({path : 'img.png'})
   await page.pause();

});

