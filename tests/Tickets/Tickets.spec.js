import {test } from "@playwright/test"
//import loginpage from "../../PageObjectModel/login.page.js"
import fs from "fs"

import Ticket from "../../PageObjectModel/Tickets.page.js"
let datafile=fs.readFileSync("C:/Users/SEKAR PERUMAL/OneDrive/Desktop/erp/TestData/testdata.json")
let data=JSON.parse(datafile)
import path from "path"
let path1=path.join(__dirname,"../../auth/authenticateUser.json")
test.use({storageState:path1})

test("ticket raise",async({page})=>{
   // let lnpage= new loginpage(page)
   let ticketraise = new Ticket(page)
  
   // //launch url 
    await page.goto(data.url)
   // //username
   // await lnpage.usernameTextfield.fill(data.username)
   // //password
   // await lnpage.passwordTextfield.fill(data.password)
   // //button
   // await lnpage.button.click()
  
   await ticketraise.createTicket(data.ticketsubject,data.ticketmessage)
   // await page.waitForTimeout(3000)
   // await lnpage.logout.click()
 

})
