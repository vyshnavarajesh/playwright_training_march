import { test, expect } from '@playwright/test';
import path from 'path';

test('mouse examples', async ({ page }) => {
    await page.goto('https://www.tutorialspoint.com/selenium/practice/selenium_automation_practice.php');

    await page.getByPlaceholder('First Name').fill('testuserone');
    await page.keyboard.press('ControlOrMeta+a'); //Control for Windows & Linix ; Meta for Mac ; ControlOrMeta for windows / Mac
    await page.keyboard.press('ControlOrMeta+c');
    await page.getByPlaceholder('name@example.com').focus();
    await page.keyboard.press('ControlOrMeta+v');
    await page.keyboard.type('@gmail.com');
    

    await page.locator('input#gender').check();
    await page.getByPlaceholder('Enter Mobile Number').fill('9999999999');

    const date = new Date().toISOString().split('T')[0];
    console.log('Date => ',date)

    await page.locator('input#dob').fill(date);
    await page.getByPlaceholder('Enter Subject').fill('Computer Science');

    const filePath = path.join(process.cwd(),'testData','testFileOne.txt');

    await page.setInputFiles('#picture',filePath);

   // await page.setInputFiles('#picture',[filePath,filePath2]); // to upload multiple files
    
    await page.pause();

});