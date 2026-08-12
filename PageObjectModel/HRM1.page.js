class HRM{
    constructor(page){
        this.HRMTab = page.locator("//span[text()='HRM']");
        this.newLeaveMenuItem = page.locator("//a[text()='New']").nth(0);
        this.leaveTypeDD = page.locator("//select[@id='fuserid']");
        this.leaveSickLeave = page.locator("//select[@id='type']");
        this.startDate = page.locator("//input[@id='date_debut_']");
        this.endDate = page.locator("//input[@id='date_fin_']");
        this.approvedBy=page.locator("//select[@id='valideur']")
        this.createLeaveRequestBtn = page.locator("//input[@name='save']");
        this.validateLeaveRequest = page.locator("//a[text()='Validate']");
        this.validateLeaveRequestYesBtn = page.locator("//button[text()='Yes']");
        this.leaveList = page.locator("//a[@title='List']").nth(1);
        this.leavesAwaitingApproval = page.locator("//a[text()='Awaiting approval']");
        this.searchEmployee = page.locator("#select2-search_employee-container");
        this.searchEmployeeTxtBox = page.locator(".select2-search__field");
        this.searchEmployeeResult = page.locator("//li[@role='option']");
        this.employeeNameField = page.locator("//table[@class='tagtable nobottomiftotal liste']/tbody/tr[3]/td[2]");
        this.leaveID = page.locator("//table[@class='tagtable nobottomiftotal liste']/tbody/tr[3]/td[1]");
        this.leaveApproveBtn = page.locator("//a[text()='Approve']");
        this.leaveApproveYes = page.locator("//button[text()='Yes']");
        this.leaveListMenuItem = page.locator("//a[text()='List']");
        this.leaveMonthSearchField = page.locator("//input[@name='search_month_start']");
        this.selectLeaveID = page.locator("//table[@class='tagtable nobottomiftotal liste']/tbody/tr[3]/td[1]");
        this.leaveStatus = page.locator("//span[@class='badge  badge-status4 badge-status']");

    }

    async createLeaveRequest(page){
        await this.HRMTab.click();
        await this.newLeaveMenuItem.click();
        await this.leaveTypeDD.selectOption('Lname10');
        await this.leaveSickLeave.selectOption('Sick leave')
        await this.startDate.fill("10/11/2026");
        await this.endDate.fill("19/12/2026");
        await this.approvedBy.selectOption('newEmployee100')
        let frame = await page.frameLocator("//iframe[@class='cke_wysiwyg_frame cke_reset']");
        await frame.locator("//body[@role='textbox']").fill("Test Leave Request");
        await this.createLeaveRequestBtn.click();
        // await this.validateLeaveRequest.click();
        // await this.validateLeaveRequestYesBtn.click();
    }
    async approveLeaveRequest(page,Ename){
        await this.HRMTab.click();
        await this.leaveList.click();
        await this.leavesAwaitingApproval.click();
        await this.searchEmployee.click();
        await this.searchEmployeeTxtBox.fill(Ename);
        await this.searchEmployeeResult.click();
        await this.employeeNameField.click();
        await this.leaveID.click();
        await this.leaveApproveBtn.click();
        await this.leaveApproveYes.click();
    }
    async verifyLeaveApproved(page){
        await this.HRMTab.click();
        await this.leaveListMenuItem.click();
        await this.leaveMonthSearchField.fill("07");
        await this.selectLeaveID.click();
        let status = await this.leaveStatus.innerText()
        return status;
    }
}

export default HRM