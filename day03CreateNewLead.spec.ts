import { test, chromium } from "@playwright/test";


test("Create the new lead", async()=>{
    const expectedBrowser=await chromium.launch({headless:false, channel:"msedge"});
    const browserContet=await expectedBrowser.newContext(); 
    const page=await browserContet.newPage();
    await page.goto("http://leaftaps.com/opentaps/control/logout");
    await page.waitForTimeout(4000);
    await page.locator("[id='username']").fill("Demosalesmanager");
    await page.locator("[id='password']").fill("crmsfa");
    await page.locator("[type='submit']").click();
    await page.waitForTimeout(4000);
    await page.locator("[id='button']").click();
    await page.waitForTimeout(4000);
    await page.locator("//a[contains(text(),'Create Lead')]").click();
    await page.waitForTimeout(2000);
    await page.locator("[id='createLeadForm_companyName']").fill("Jai&jaibrothers");
    await page.locator("[id='createLeadForm_firstName']").fill("Seelan");
    await page.locator("[id='createLeadForm_lastName']").fill("Jai");
    await page.locator("[value='Create Lead']").click();
    await page.waitForTimeout(2000);
    await page.locator("[id='sectionHeaderTitle_leads']").isDisabled();
    console.log("Script got over")
    
    

    
    
    

    
    
})