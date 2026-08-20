class Employees{
    constructor(page){
        this.hrmpage=page.locator("//span[@class='fas fa-user-tie infobox-adherent fa-fw pictofixedwidth']")
        this.newemppage=page.locator("//a[@title='New employee']")
         
        this.emptitle=page.locator("//select[@name='civility_code']")
        this.emplastname=page.locator("//input[@id='lastname']")
        this.empfirstname=page.locator("//input[@id='firstname']")
        this.jobname = page.locator("//input[@name='job']")
        this.clickbutton=page.locator("//input[@name='save']")
        this.addgrp=page.locator("//select[@id='group']")
        this.addbutton=page.locator("//input[@value='Add']")
        this.newjob=page.locator("//a[@title='New job positions']")
        this.joblabel=page.locator("//input[@id='label']")
        this.jobposition=page.locator("//select[@name='fk_project']")
        this.addjob=page.locator("//input[@name='add']")
        }
    async createEmployee(emplast,empfirst,jobposition){
        await this.hrmpage.click()
        await this.newemppage.click()
        await this.emptitle.selectOption('Ms.')
        await this.emplastname.fill(emplast)
        await this.empfirstname.fill(empfirst)
        await this.jobname.fill(jobposition)
        await this.clickbutton.click()

    }
    // async addGroup(){
    //     await this.addgrp.selectOption('')
    //     await this.addbutton.click()
        
    // }
    async addJob(joblabell){
        await this.newjob.click()
        await this.joblabel.fill(joblabell)
        await this.jobposition.selectOption('PJ2506-00010 - Nut')
        await this.addjob.click()
    }
}
export default Employees