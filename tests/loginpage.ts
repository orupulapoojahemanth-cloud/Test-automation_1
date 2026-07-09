import { Page, Locator, expect } from '@playwright/test';

export class LoginPage {

    readonly page: Page;
    readonly username: Locator;
    readonly password: Locator;
    readonly submitButton: Locator;
    readonly logoutLink: Locator;
    readonly successHeading: Locator;
    readonly errorMessage: Locator;

    constructor(page: Page) {
        this.page = page;

        this.username = page.getByLabel('Username');
        this.password = page.getByLabel('Password');
        this.submitButton = page.getByRole('button', { name: 'Submit' });
        this.logoutLink = page.getByRole('link', { name: 'Log out' });
        this.successHeading = page.locator('h1');
        this.errorMessage = page.locator('.show');
    }

    async login(username: string, password: string) {
        await this.username.fill(username);
        await this.password.fill(password);
        await this.submitButton.click();
    }

    async logout() {
        await this.logoutLink.click();
    }

    async verifySuccessfulLogin() {
        await expect(this.page)
            .toHaveURL('https://practicetestautomation.com/logged-in-successfully/');

        await expect(this.successHeading)
            .toHaveText('Logged In Successfully');
    }

    async verifyInvalidUsername() {
        await expect(this.errorMessage)
            .toHaveText('Your username is invalid!');
    }

    async verifyInvalidPassword() {
        await expect(this.errorMessage)
            .toHaveText('Your password is invalid!');
    }
}