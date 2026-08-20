import {test as setup} from "@playwright/test"
import path from "path"
import { chromium } from "@playwright/test"

async function storageStateCreation(){
    let browser = await chromium.launch()
    let context = await browser.newContent()
    let page = await context.newPage()
    await page.goto("http://49.249.29.4:8889/dolibarr/index.php")
    await page.locator('//input[@id="username"]').fill("admin")
    await page.locator('//input[@id="password"]').fill("admin123")
    await page.locator('//input[@type="submit"]').click()
    await page.context().storageState({path:".auth/authenticateUser.json"})
}
export default storageStateCreation