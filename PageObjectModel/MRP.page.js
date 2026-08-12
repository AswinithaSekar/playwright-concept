class MRP{
    constructor(page){
        this.MRPTab = page.locator("//span[text()='MRP']");
        this.newBOMMenuItem = page.locator("//a[text()='New bill of materials']");
        this.labelTxtField = page.locator("//input[@id='label']");
        this.productadd = page.locator('//select[@id="fk_product"]')
        this.productDD = page.locator('//textarea[@id="description"]')
        this.addwarehouse=page.locator('//select[@id="fk_warehouse"]')
        this.clickcreate=page.locator('//input[@name="add"]')





        
        this.newManufacturingOrderMenuItem = page.locator("//a[text()='New Manufacturing Order']");
        this.newBOM=page.locator("//select[@name='fk_bom']")
        this.moproduct=page.locator("//select[@id='fk_product']")
        this.molabel=page.locator("//input[@id='label']")
        this.mowarehouse=page.locator('//select[@id="fk_warehouse"]')
        this.clickmo=page.locator('//input[@name="add"]')
        this.validateMO = page.locator("//a[text()='Validate']");
        this.validateMOYesBtn = page.locator("//button[text()='Yes']");
        this.productionTab = page.locator("#production");
        this.consumeOrProduceBtn =  page.getByText("Consume or Produce");
        this.confirmBtn = page.locator("//input[@name='confirm']");
        this.MOValidationStatus = page.locator("//span[@title = 'Validated (To produce)']");
}     async createBOM(bomLabel){
        await this.MRPTab.click();
        await this.newBOMMenuItem.click();
        await this.labelTxtField.fill(bomLabel);
        await this.productadd.selectOption('123 - Dell')
        await this.productDD.fill("ajdbefbcj")
        await this.addwarehouse.selectOption('CLOTHING WAREHOUSE - DELHI')
        await this.clickcreate.click()
        
    }

    async createValidateMO(moLabel){
        await this.newManufacturingOrderMenuItem.click();
        await this.newBOM.selectOption('BOM2506-0001 - adas')
        await this.moproduct.selectOption('TP_Product12334455 - TP_Test')
        await this.molabel.fill(moLabel)
        await this.mowarehouse.selectOption('CLOTHING WAREHOUSE - DELHI')
        await this.clickmo.click()
        await this.validateMO.click();
        await this.validateMOYesBtn.click();
        let status = await this.MOValidationStatus.innerText();
        return status;
    }

}
export default MRP