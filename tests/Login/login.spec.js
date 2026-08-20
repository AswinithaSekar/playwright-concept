import {test} from "@playwright/test"
import loginpage from "../../PageObjectModel/login.page.js"
import fs from "fs"
let datafile=fs.readFileSync("C:/Users/SEKAR PERUMAL/OneDrive/Desktop/erp/TestData/testdata.json")
let data=JSON.parse(datafile)

// //normally without ddt
// test("login",async({page})=>{
//     await page.goto("http://49.249.29.4:8889/dolibarr/index.php")
//     await page.locator('//input[@id="username"]').fill("admin")
//     await page.locator('//input[@id="password"]').fill("admin123")
//     await page.locator('//input[@type="submit"]').click()
// })

//with ddt
// test("login",async({page})=>{
//        await page.goto(data.url)
//        await page.locator('//input[@id="username"]').fill(data.username)
//        await page.locator('//input[@id="password"]').fill(data.password)
//        await page.locator('//input[@type="submit"]').click()
// })

//with pom
test("login page",async({page})=>{
   let lnpage= new loginpage(page)
  
   //launch url 
   await page.goto(data.url)
   //username
   await lnpage.usernameTextfield.fill(data.username)
   //password
   await lnpage.passwordTextfield.fill(data.password)
   //button
   await lnpage.button.click()
   await page.waitForTimeout(3000)

   await lnpage.logout.click()
 

})



       