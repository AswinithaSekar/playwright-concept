class Ticket{
    constructor(page){
        this.ticketclick=page.locator("//span[@class='fas fa-ticket-alt infobox-contrat fa-fw pictofixedwidth']")
        this.newticket=page.locator("//a[text()='New Ticket']")
        this.requesttype=page.locator("//select[@id='selecttype_code']")
        this.severity=page.locator("//select[@id='selectseverity_code']")
        this.subject = page.locator("//input[@name='subject']")
        this.message = page.locator("//textarea[@id='message']")
        this.thirdparty=page.locator("//select[@id='socid']")
        // this.projectss=page.locator("//select[@id='projectid']")
        this.createbutton=page.locator("//input[@name='save']")
        



    }
    async createTicket(ticketsubject,ticketmessage){
        await this.ticketclick.click()
        await this.newticket.click()
        await this.requesttype.selectOption('Commercial question')
        await this.severity.selectOption('High')
        await this.subject.fill(ticketsubject)
        await this.message.fill(ticketmessage)
        await this.thirdparty.selectOption('abc (Customer, Prospect)')
        // await this.projectss.selectOption('PJ2602-0028, Testing project100 - ren - Draft')
        await this.createbutton.click()

    }


}
export default Ticket