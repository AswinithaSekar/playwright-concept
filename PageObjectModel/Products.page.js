class Products{
    constructor(page){
        this.ProductsTab = page.locator("//span[@class='fas fa-cube fa-fw pictofixedwidth']");
        this.newProduct = page.locator("//a[@title='New product' and @class='vsmenu']");
        this.productRef = page.locator("#ref");
        this.productLabel = page.locator("//input[@name='label']");
        this.productPrice = page.locator("//input[@name='price']");
        this.productCreate = page.locator("//input[@type='submit' and @value='Create']");
    }
    async createProduct(productName,productLabel){
    await this.ProductsTab.click();
    await this.newProduct.click();
    await this.productRef.fill(productName);
    await this.productLabel.fill(productLabel);
    await this.productPrice.fill("1000");
    await this.productCreate.click();
    }
}

export default Products