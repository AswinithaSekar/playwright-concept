import { test as base, expect } from '@playwright/test';

export const test = base.extend({
  loginFixture: async ({ page }, use) => {
    const loginPage = {
        login: async (username, password) => {
        await page.goto('http://49.249.29.4:8889/dolibarr/index.php');
        await page.fill('#username', "admin");
        await page.fill('#password', "admin123");
        await page.click("//input[@type='submit']");
      }
    };

    await use(loginPage);
  }
});

export { expect };