import { test,chromium } from "@playwright/test";


test("To Launch a browser", async() =>{
    // To lanch the browser creates a new browser instance
    const browser=await chromium.launch({headless: false, channel: "msedge"});
    const browserContext =await browser.newContext();

    // create new page
    const page= await browserContext.newPage();
    await page.goto("https://lloyds-dev-ed.develop.my.salesforce.com");
    await page.waitForTimeout(5000);

})