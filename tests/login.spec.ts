import { test, expect } from '@playwright/test';
import './hooks';
import { LoginPage } from './loginpage';
/*

test('Test successful login', async ({ page }) => {
  
    await expect(page.locator('#username')).toHaveAttribute('type', 'text');
    await page.getByLabel('Username').fill('student');
    await expect(page.locator('#password')).toHaveAttribute('type', 'password');
    await page.getByLabel('Password').fill('Password123');
    await page.getByRole('button', { name: 'Submit' }).click();
    await expect(page).toHaveURL('https://practicetestautomation.com/logged-in-successfully/');
    const successMessage = await page.locator('h1').textContent();
    await expect(successMessage).toBe('Logged In Successfully');
    await expect(page.getByText('Congratulations student. You successfully logged in!')).toBeVisible();
    const visible = await page.getByRole('link', { name: 'Log out' }).isVisible();
    if (visible){
      console.log("Lot out link is visible");
    }
    await expect(page.getByRole('link', { name: 'Log out' })).toBeEnabled();
    await page.getByRole('link', { name: 'Log out' }).click();
    console.log("User logged in and out successfully");
    await expect(page).toHaveURL("https://practicetestautomation.com/practice-test-login/");
    


});

test('Test unsuccessful login with invalid username credentials', async ({ page }) => {
    await page.getByLabel('Username').fill('invalidUser');
    await page.getByLabel('Password').fill('Password123');
   // await expect(page.getByRole('button', { name: 'Submit' })).toBeDisabled();
    await page.getByRole('button', { name: 'Submit' }).click();
    await expect(page).toHaveURL('https://practicetestautomation.com/practice-test-login/');
    const errorMessage = await page.locator('.show').textContent();
    await expect(errorMessage).toBe('Your username is invalid!');
    console.log("Error message is displayed: " + errorMessage);
  });

test('Test unsuccessful login with invalid password credentials', async ({ page }) => {
    await page.getByLabel('Username').fill('student');
    await page.getByLabel('Password').fill('invalidPassword');
    await page.getByRole('button', { name: 'Submit' }).click();
    await expect(page).toHaveURL('https://practicetestautomation.com/practice-test-login/');
    const errorMessage = await page.locator('.show').textContent();
    await expect(errorMessage).toBe('Your password is invalid!');
    console.log("Error message is displayed: " + errorMessage);
  });
  */
 test('Successful Login', async ({ page }) => {

    const loginPage = new LoginPage(page);

    await loginPage.login('student', 'Password123');

    await loginPage.verifySuccessfulLogin();

    await loginPage.logout();
});

test('Invalid Username', async ({ page }) => {

    const loginPage = new LoginPage(page);

    await loginPage.login('invalidUser', 'Password123');

    await loginPage.verifyInvalidUsername();

});

test('Invalid Password', async ({ page }) => {

    const loginPage = new LoginPage(page);

    await loginPage.login('student', 'invalidPassword');

    await loginPage.verifyInvalidPassword();

});


 





