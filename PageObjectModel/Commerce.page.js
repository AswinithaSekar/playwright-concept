class Commerce{
    constructor(page){
        this.commmercebutton = page.locator("//span[@class='fas fa-suitcase  em092 infobox-contrat fa-fw pictofixedwidth']")
        this.newProposal = page.locator("//a[text()='New proposal']")
        this.Refcustomer = page.locator("//input[@name='ref_client']")
        this.customerthirdparty = page.locator("//select[@name='socid']")
        this.paymentterms = page.locator("//select[@name='cond_reglement_id']") 
        this.paymentmethod=page.locator("//select[@id='selectmode_reglement_id']")
        this.source=page.locator("//select[@id='select_demand_reason_id']")
        this.shippingmethod=page.locator("//select[@id='selectshipping_method_id']")
        this.now=page.locator("//button[@id='reButtonNow']")
        this.comproject=page.locator("//select[@id='projectid']")
        this.comdraft=page.locator("//input[@name='save']")
}
async commercepage(refcustomer){
    await this.commmercebutton.click()
    await this.newProposal.click()
    await this.Refcustomer.fill(refcustomer)
    await this.customerthirdparty.selectOption('aaaaaaaaa (Customer, Prospect)')
    await this.paymentterms.selectOption('Delivery')
    await this.paymentmethod.selectOption('Bank transfer')
    await this.source.selectOption('Employee')
    await this.shippingmethod.selectOption('Generic transport service')
    await this.now.click()
    await this.comproject.selectOption('PJ2506-00010, Nut')
    await this.comdraft.click()

}
}
export default Commerce