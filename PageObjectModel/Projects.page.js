class Project{
    constructor(page){
       this.prologo = page.locator("//span[@class='fas fa-project-diagram  em088 infobox-project fa-fw pictofixedwidth']")
       this.newPro = page.locator("//a[@title='New lead or project']")
       this.prolabel=  page.locator("//input[@name='title']")
       this.prousage= page.locator("//input[@id='usage_bill_time']")
       this.prothirdparty= page.locator("//select[@id='socid']")
       this.proleadstatus= page.locator("//select[@id='opp_status']")
       this.probudget = page.locator("//input[@name='ref']")
       this.prpcreatedraft=page.locator("//input[@value='Create draft']")
       this.newtask = page.locator("//a[@title='New task']")
       this.tasklabel=page.locator("//input[@name='label']")
       this.childtask=page.locator("//select[@id='task_parent']")
       this.clickadd=page.locator("//input[@name='add']")
    }
    async createProject(projectname,projectbudget){
        await this.prologo.click()
        await this.newPro.click()
        await this.prolabel.fill(projectname)
        await this.prousage.check()
        await this.prothirdparty.selectOption('a to z Enterprise (Corporate) (Vendor)')
        await this.proleadstatus.selectOption('Negotiation')
        await this.probudget.fill(projectbudget)
        await this.prpcreatedraft.click()
        
    }
    async createtask(){
        await this.newtask.click()
        await this.tasklabel.fill("json")
        await this.childtask.selectOption('PJ2606-0049 > TK2606-0016 Setup Task')
        await this.clickadd.click()
    }
}
export default Project