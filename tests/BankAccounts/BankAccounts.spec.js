import {test} from "@playwright/test"
import loginpage from "../../PageObjectModel/login.page.js"
import fs from "fs"
import Bankaccount from "../../PageObjectModel/BankAccounts.page.js"
let datafile=fs.readFileSync("C:/Users/SEKAR PERUMAL/OneDrive/Desktop/erp/TestData/testdata.json")
let data=JSON.parse(datafile)
let datafile2=fs.readFileSync("C:/Users/SEKAR PERUMAL/OneDrive/Desktop/erp/TestData/bank.json")
let data2=JSON.parse(datafile2)

test.beforeEach(async({page}) => {
  let lnpage= new loginpage(page)
   await page.goto(data.url)
   await lnpage.usernameTextfield.fill(data.username)
   await lnpage.passwordTextfield.fill(data.password)
   await lnpage.button.click()
   await page.waitForTimeout(3000)
})

test("bank account",async({page})=>{
   
   let bankacc=new Bankaccount(page)
   
   await bankacc.createBankacc(data2.bankref,data2.banklabell,data2.minamt1,data2.maxamt1) 
  
 

  })

  test.afterEach(async({page})=>{
   let lnpage= new loginpage(page)
      await lnpage.logout.click()
  })