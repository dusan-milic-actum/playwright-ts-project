import { test } from '@playwright/test';

test.skip('Basic Navigation', async ({ page }) => {
    await page.goto('https://gitlab.com/');
    await page.waitForTimeout(3000);
    await page.reload();
})

test.skip('Interacting with Web Elements on Gitlab', async ({ page }) => {
    await page.goto('https://gitlab.com/');
    await page.locator('#be-navigation-desktop').getByRole('link', { name: 'Get free trial' }).click();
    //   await page.locator('[data-testid="new-user-first-name-field"]').fill('John');
    //   await page.locator('[data-testid="new-user-last-name-field"]').fill('Doe');
    await page.getByTestId('new-user-email-field').fill('John');
    await page.getByTestId('new-user-email-field').fill('Doe');
})

test.skip('Using Various Locator Methods', async ({ page }) => {
    await page.goto('https://gitlab.com/');
    //   await page.getByRole('link', {name: 'Sign in'}).click();
    await page.click(':has-text("Sign in")');
    await page.waitForTimeout(5000);
})