import {test} from "@playwright/test"
test("",async({page})=>{
    await page.goto("http://49.249.29.4:8889/dolibarr/index.php")
    await page.locator('//input[@id="username"]').fill("admin")
    await page.locator('//input[@id="password"]').fill("admin123")
    await page.locator('//input[@type="submit"]').click()
    await page.locator('//span[@class="fas fa-user-alt  em092 infobox-adherent fa-fw pictofixedwidth"]').click()
    await page.locator("//a[@title='New member']").click()
    // await page.locator('//span[@id="select2-typeid-container"]').click() 
    await page.locator("//select[@name='typeid']").selectOption('Org_JSW_54')
    await page.locator("//select[@name='morphy']").selectOption('Individual')
    await page.locator("//input[@name='societe']").fill("Tekp")
    await page.locator("//select[@name='civility_id']").selectOption('Ms.')
    await page.locator('//input[@name="lastname"]').fill("S")
    await page.locator('//input[@name="firstname"]').fill("Ashwini")
    await page.locator('//select[@name="gender"]').selectOption("Female")
    await page.locator("//input[@name='member_email']").fill("ash@gmail.com")
    await page.locator("//input[@name='member_url'] ").fill("www")
    await page.locator('//textarea[@name="address"]').fill("trichy")
    await page.locator("//input[@name='zipcode']").fill("621216")
    await page.locator("//input[@name='town']").fill("trichy")
    // await page.locator("//select[@id='selectcountry_id']").selectOption(' Hungary ')
    // await page.locator("//select[@name='state_id']").selectOption('TN - Tamil Nadu')
    await page.locator('//input[@name="phone_perso"]').fill("9629964662")
    await page.locator('//input[@id="birth"]').fill("16/01/1997")
    await page.locator('//select[@id="public"]').selectOption('Yes')
    await page.locator("//input[@name='save']").click()
    await page.locator("//a[text()='Modify']").click()
    await page.locator("//select[@id='gender']").selectOption('Male')
    await page.locator("//input[@name='save']").click()
    // page.on("dialog",(dialog)=>{dialog.accept()})
    page.on("dialog",async(dialog)=>{if(dialog.type()=='alert'){
        await dialog.accept()
    }
    else if(dialog.type()=='confirm'){await dialog.accept()}
    else if(dialog.type()=='prompt'){
        await dialog.accept("tom")
    }
})
    await page.locator("//a[text()='Delete']").click()
    
    // await page.getByRole("button",{name:'Delete'}).click()

   


    await page.waitForTimeout(3000)

    
}) 


