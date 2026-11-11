
import { Page, Locator } from '@playwright/test';

export class LoginPage {
    readonly page: Page;
    readonly emailInput: Locator;
    readonly passwordInput: Locator;
    readonly signInButton: Locator;
    readonly showPasswordButton: Locator;
    readonly forgotPasswordLink: Locator;

    constructor(page: Page) {
        this.page = page;

        this.emailInput = page.getByLabel('Email');
        this.passwordInput = page.getByPlaceholder('••••••••');

        this.signInButton = page.getByRole('button', {
            name: 'Sign in'
        });

        this.showPasswordButton = page.getByRole('button', {
            name: 'Show password'
        });

        this.forgotPasswordLink = page.getByRole('link', {
            name: /forgot password/i
        });
    }

    async navigate() {
        await this.page.goto('/');
    }

    async enterEmail(email: string) {
        await this.emailInput.fill(email);
    }

    async enterPassword(password: string) {
        await this.passwordInput.fill(password);
    }

    async clickSignIn() {
        await this.signInButton.click();
    }
}
