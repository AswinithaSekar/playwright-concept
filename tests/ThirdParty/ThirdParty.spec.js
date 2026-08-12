import {test} from "@playwright/test"
import loginpage from "../../PageObjectModel/login.page.js"
import Thirdparty from "../../PageObjectModel/ThirdParty.page.js"
import fs from "fs"
let datafile=fs.readFileSync("C:/Users/SEKAR PERUMAL/OneDrive/Desktop/erp/TestData/testdata.json")
let data=JSON.parse(datafile)
test("create a third party",async({page})=>{
  let lnpage= new loginpage(page)
  let thirdpartypage=new Thirdparty(page)
   //launch url 
   await page.goto(data.url)
   //username
   await lnpage.usernameTextfield.fill(data.username)
   //password
   await lnpage.passwordTextfield.fill(data.password)
   //button
   await lnpage.button.click()
   await thirdpartypage.thirdprospect(data.thirdpartyname,data.thirdpartyaddress,data.tzipcode,data.tcity,data.tphone,data.tmail,data.tcapital)

   await page.waitForTimeout(3000)
   await lnpage.logout.click()

})