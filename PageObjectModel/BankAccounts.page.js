class Bankaccount{
    constructor(page){
        this.banks=page.locator("//span[@class='fas fa-university infobox-bank_account fa-fw pictofixedwidth']")
        this.newacc=page.locator("//a[text()='New financial account']")
        this.giveref=page.locator("//input[@name='ref']")
        this.banklabel=page.locator("//input[@name='label']")
        this.state=page.locator("//select[@id='account_state_id']")
        this.minamt=page.locator("//input[@name='account_min_allowed']")
        this.maxamt=page.locator("//input[@name='account_min_desired']")
        this.clicksave=page.locator("//input[@name='save']")
      }
    async createBankacc(bankref,banklabell,minamt1,maxamt1){
        await this.banks.click()
        await this.newacc.click()
        await this.giveref.fill(bankref)
        await this.banklabel.fill(banklabell)
        await this.state.selectOption('TN - Tamil Nadu')
        await this.minamt.fill(minamt1)
        await this.maxamt.fill(maxamt1)
        await this.clicksave.click()
    }
}
export default Bankaccount