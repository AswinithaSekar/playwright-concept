// import {test,expect} from "@playwright/test"
// import testdata from "../TestData/test data.json";
// import MRP from "../PageObjects/MRP.page";
// import Login from "../PageObjects/loginPage.page";

// test.beforeEach(async({page}) => {
//    let login = new Login(page);
//    let url = testdata.url;
//    let loginID = testdata.loginID;
//    let pwd = testdata.password;
//    await page.goto(url);
//    await login.login(loginID,pwd);
// })
// test("Manufacturing Flow",{tag:"@Regression"} ,async({page}) => {
//     let mrp = new MRP(page);
//     let productName = testdata.productName;
//     let bomLabel = testdata.BOMLabel;
//     await mrp.createBOM(bomLabel,productName);
//     let moLabel = testdata.MOLabel;
//     let status = await mrp.createValidateMO(moLabel,productName);
//     await expect(status).toContain("Validated");
// });

// test.afterEach(async({page}) => {
//    let login = new Login(page);
//    login.logout(page);
// });
import {test} from "@playwright/test"
import loginpage from "../../PageObjectModel/login.page.js"
import MRP from "../../PageObjectModel/MRP.page.js"
import fs from "fs"
let datafile=fs.readFileSync("C:/Users/SEKAR PERUMAL/OneDrive/Desktop/erp/TestData/testdata.json")
let data=JSON.parse(datafile)
test("Manufacturing Flow",{tag:"@Regression"} ,async({page}) => {
   let lnpage= new loginpage(page)
   //launch url 
   await page.goto(data.url)
   //username
   await lnpage.usernameTextfield.fill(data.username)
   //password
   await lnpage.passwordTextfield.fill(data.password)
   //button
   await lnpage.button.click()
    let mrp = new MRP(page);
    
    await mrp.createBOM(data.mbomLabel);
   
     let status = await mrp.createValidateMO(data.moLabel);
     await expect(status).toContain("Validated");
});