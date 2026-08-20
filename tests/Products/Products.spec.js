import { test , expect } from "../../fixtures/loginFixture.fixture.js"


//  import loginpage from "../../PageObjectModel/login.page.js"
import Products from "../../PageObjectModel/Products.page.js"
import fs from "fs"

let datafile=fs.readFileSync("C:/Users/SEKAR PERUMAL/OneDrive/Desktop/erp/TestData/testdata.json")
let data=JSON.parse(datafile)
test("create product",async({loginFixture,page})=>{
  // let lnpage= new loginpage(page)
  await loginFixture.login(data.username,data.password)
 
  let productPage=new Products(page)
  
  //  launch url 
  //  await page.goto(data.url)
  //  //username
  //  await lnpage.usernameTextfield.fill(data.username)
  //  //password
  //  await lnpage.passwordTextfield.fill(data.password)
  //  //button
  //  await lnpage.button.click()
   
   await productPage.createProduct(data.productName,data.productLabel)
  //  await page.waitForTimeout(3000)
  //  await lnpage.logout.click()

})