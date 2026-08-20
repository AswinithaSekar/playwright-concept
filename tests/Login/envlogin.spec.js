import { test } from "@playwright/test";
import LoginPage from "../../PageObjectModel/login.page.js";

test("login page", async ({ page }) => {
  let lnpage = new LoginPage(page);

  await page.goto("/");

  await lnpage.usernameTextfield.fill(process.env.USERNAME);
  await lnpage.passwordTextfield.fill(process.env.PASSWORD);

  await lnpage.button.click();
  await page.waitForTimeout(3000);
  await lnpage.logout.click();
});