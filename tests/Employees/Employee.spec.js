import {test} from "@playwright/test"
import loginpage from "../../PageObjectModel/login.page.js"
import Employees from "../../PageObjectModel/Employee.page.js"
import { generateRandomEmployeeName } from "../../Utils/randomUtils.js"
import fs from "fs"
let datafile=fs.readFileSync("C:/Users/SEKAR PERUMAL/OneDrive/Desktop/erp/TestData/testdata.json")
let data=JSON.parse(datafile)
let datafile1=fs.readFileSync("C:/Users/SEKAR PERUMAL/OneDrive/Desktop/erp/TestData/employee.json")
let data1=JSON.parse(datafile1)
test("employee page",async({page})=>{
   let lnpage= new loginpage(page)
   let employeepage = new Employees(page)
   let randomEmployeeName = generateRandomEmployeeName();
   //launch url 
   await page.goto(data.url)
   //username
   await lnpage.usernameTextfield.fill(data.username)
   //password
   await lnpage.passwordTextfield.fill(data.password)
   //button
   await lnpage.button.click()
   await page.waitForTimeout(3000)

   await employeepage.createEmployee(randomEmployeeName,data1.emplast1,data1.empfirst,data1.jobposition)
   // await employeepage.addGroup()
   await employeepage.addJob(data1.joblabell)
   

   await lnpage.logout.click()

 

})
