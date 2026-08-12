class loginpage{
    constructor(page){
       this.usernameTextfield = page.locator('//input[@id="username"]')
       this.passwordTextfield = page.locator('//input[@id="password"]')
       this.button = page.locator('//input[@type="submit"]')
       this.logout = page.locator("//span[@class='fas fa-sign-out-alt atoplogin valignmiddle']")

    }
}
export default loginpage