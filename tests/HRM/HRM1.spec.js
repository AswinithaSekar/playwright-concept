// import {test,expect} from "@playwright/test"
// import testdata from "../TestData/testdata.json";
// import LoginPage from "../PageObjects/loginPage.page";
// import HRM from "../PageObjects/HRM.page";

// test("Leave Management Flow",{tag:["@smoke", "@Regression"]},async({page}) => {
//     let login = new LoginPage(page);
//    let hrm = new HRM(page);
//    let url = testdata.url;
//    let loginID = testdata.loginID;
//    let pwd = testdata.password;
//    await page.goto(url)
//    await login.login("PlayWright1","test12345678");
//    await hrm.createLeaveRequest(page);
//    await login.logout();
//    await login.login(loginID,pwd);
//    await hrm.approveLeaveRequest(page,"PlayWright 1");
//    await login.logout();
//    await login.login("PlayWright1","test12345678");
//    await hrm.verifyLeaveApproved(page)
// })
import {test} from "@playwright/test"
import loginpage from "../../PageObjectModel/login.page.js"
import fs from "fs"
import HRM from "../../PageObjectModel/HRM1.page.js"
let datafile=fs.readFileSync("C:/Users/SEKAR PERUMAL/OneDrive/Desktop/erp/TestData/testdata.json")
let data=JSON.parse(datafile)
test("hrm",async({page})=>{
  let lnpage= new loginpage(page)
  let hrmPage=new HRM(page)
  
   //launch url 
   await page.goto(data.url)
   //username
   await lnpage.usernameTextfield.fill(data.username)
   //password
   await lnpage.passwordTextfield.fill(data.password)
   //button
   await lnpage.button.click()
   await hrmPage.createLeaveRequest(page);
   await page.waitForTimeout(3000)
   await lnpage.logout.click()
  //  await page.goto(data.url)
  //  //username
  //  await lnpage.usernameTextfield.fill(data.username)
  //  //password
  //  await lnpage.passwordTextfield.fill(data.password)
  //  //button
  //  await lnpage.button.click()

  //  await hrmPage.approveLeaveRequest(page,"PlayWright 5");
  //  await page.waitForTimeout(3000)
  //  await lnpage.logout.click()
   
  //   await page.goto(data.url)
  //  //username
  //  await lnpage.usernameTextfield.fill(data.username)
  //  //password
  //  await lnpage.passwordTextfield.fill(data.password)
  //  //button
  //  await lnpage.button.click()
  //  await hrmPage.verifyLeaveApproved(page)
})
