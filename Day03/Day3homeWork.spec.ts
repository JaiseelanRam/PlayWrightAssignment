import {test, chromium  } from "@playwright/test";

test("To launch the browser and Verify the title and URL", async()=>{
const expectedBrowser=await chromium.launch({headless:false, channel:"msedge"});
const browserContext=await expectedBrowser.newContext();
const page=await browserContext.newPage();
await page.goto("https://lloyds-dev-ed.develop.my.salesforce.com");
await page.waitForTimeout(10000);
await page.locator("#username").fill("gandhi0505@gmail.com");
await page.locator("[id='password']").fill("Gandhimama0505!");
await page.locator("#Login").click();
await page.waitForTimeout(4000);
console.log(await page.title());
console.log(await page.url());
})



