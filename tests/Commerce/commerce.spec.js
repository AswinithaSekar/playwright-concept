import {test} from "@playwright/test"
import loginpage from "../../PageObjectModel/login.page.js"
import Commerce from "../../PageObjectModel/Commerce.page.js"
import { readTestData } from "../../Utils/testdata.js";

const data = readTestData("testdata.json");
// import fs from "fs"
// let datafile=fs.readFileSync("C:/Users/SEKAR PERUMAL/OneDrive/Desktop/erp/TestData/testdata.json")
// let data=JSON.parse(datafile)


test("commerce page",async({page})=>{
   let lnpage= new loginpage(page)
   let commerpage = new Commerce(page)
  
   //launch url 
   await page.goto(data.url)
   //username
   await lnpage.usernameTextfield.fill(data.username)
   //password
   await lnpage.passwordTextfield.fill(data.password)
   //button
   await lnpage.button.click()

   await commerpage.commercepage(data.refcustomer)
   await page.waitForTimeout(3000)

   await lnpage.logout.click()
 

})