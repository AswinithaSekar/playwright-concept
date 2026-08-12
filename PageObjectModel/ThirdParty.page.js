class Thirdparty{
    constructor(page){
        this.thirdpartybutton = page.locator('//span[@class="fas fa-building fa-fw pictofixedwidth"]')
        this.thirdpartyside = page.locator("//a[text()='New Third Party']")
        this.thirdpartyname = page.locator("//input[@id='name']")
        this.prospectorcustomer= page.locator("//select[@id='customerprospect']")
        this.vendor=page.locator("//select[@id='fournisseur']")
        this.status=page.locator("//select[@id='status']")
        this.address=page.locator("//textarea[@id='address']")
        this.zipcode=page.locator('//input[@id="zipcode"]')
        this.town=page.locator('//input[@id="town"]')
        this.state=page.locator("//span[@id='select2-state_id-container']")
        this.phone=page.locator("//input[@id='phone']")
        this.email=page.locator("//input[@id='email']")
        this.thirdpartytype=page.locator("//select[@id='typent_id']")
        this.capital=page.locator("//input[@id='capital']")
        this.defaultlanguage=page.locator("//select[@id='default_lang']")
        this.selectathirdparty=page.locator("//select[@id='parent_company_id']")
        this.create=page.locator("//input[@name='save']")


    }
async thirdprospect(name,address,zipcode,town,phone,email,capital){
    await this.thirdpartybutton.click()
    await this.thirdpartyside.click()
    await this.thirdpartyname.fill(name)
    await this.prospectorcustomer.selectOption('Prospect')
    await this.vendor.selectOption('Yes')
    await this.status.selectOption('Open')
    await this.address.fill(address)
    await this.zipcode.fill(zipcode)
    await this.town.fill(town)
    // await this.state.selectOption()
    await this.phone.fill(phone)
    await this.email.fill(email)
    await this.thirdpartytype.selectOption('Governmental')
    await this.capital.fill(capital)
    await this.defaultlanguage.selectOption(' Albanian')
    await this.selectathirdparty.selectOption('a to z Enterprise (Corporate)')
    await this.create.click()
}
}
export default Thirdparty