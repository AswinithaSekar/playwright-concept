import {test} from "@playwright/test"
// import loginpage from "../../PageObjectModel/login.page.js"
import Project from "../../PageObjectModel/Projects.page.js"


import fs from "fs"
import path from "path"
let path1=path.join(__dirname,"../../.auth/authenticateUser.json")
test.use({storageState:path1})

let datafile=fs.readFileSync("C:/Users/SEKAR PERUMAL/OneDrive/Desktop/erp/TestData/testdata.json")
let data=JSON.parse(datafile)
test("project page",async({page})=>{
   // let lnpage= new loginpage(page)
   let projectpage = new Project(page)
   // //launch url 
   // await page.goto(data.url)
   // //username
   // await lnpage.usernameTextfield.fill(data.username)
   // //password
   // await lnpage.passwordTextfield.fill(data.password)
   // //button
   // await lnpage.button.click()
   // await page.waitForTimeout(3000)
   await projectpage.createProject(data.projectname,data.projectbudget)
   await projectpage.createtask()
   // await lnpage.logout.click()
 

})