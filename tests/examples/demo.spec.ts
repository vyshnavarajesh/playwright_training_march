import { test, expect } from '@playwright/test';

// We will create async functions in playwright for better handling of promise
// await is used based on the return type of every method; if the method returns promise, please attach await keyword
// page => is a fixture in playwright

// Context => Browser => page


test("Opening playwright", async({page}) =>{

   await page.goto("https://www.demoblaze.com"); // open a page (goto())


})