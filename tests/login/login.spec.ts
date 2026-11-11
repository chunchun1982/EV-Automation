
import { test, expect } from '@playwright/test';
import { LoginPage } from '../../pages/LoginPage';

test.describe('EV Application - Login Page', () => {

    test('Verify login page elements', async ({ page }) => {

        const loginPage = new LoginPage(page);

        await loginPage.navigate();

        // Verify login route
        await expect(page).toHaveURL(/\/login/);

        // Verify email field
        await expect(loginPage.emailInput).toBeVisible();

        // Verify password field
        await expect(loginPage.passwordInput).toBeVisible();

        // Verify sign in button
        await expect(loginPage.signInButton).toBeVisible();

        // Verify initial button state
        await expect(loginPage.signInButton).toBeDisabled();

        // Verify forgot password link
        await expect(loginPage.forgotPasswordLink).toBeVisible();

    });

});
