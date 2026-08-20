import {test as setup} from "@playwright/test"
import loginpage from "../../PageObjectModel/login.page.js"
import fs from "fs"
import path from "path"
let datafile=fs.readFileSync("C:/Users/SEKAR PERUMAL/OneDrive/Desktop/erp/TestData/testdata.json")
let data=JSON.parse(datafile)

setup("authenticate",async({page})=>{
    await page.goto("http://49.249.29.4:8889/dolibarr/index.php")
    await page.locator('//input[@id="username"]').fill("admin")
    await page.locator('//input[@id="password"]').fill("admin123")
    await page.locator('//input[@type="submit"]').click()
    await page.context().storageState({path:"auth/authenticateUser.json"})

})