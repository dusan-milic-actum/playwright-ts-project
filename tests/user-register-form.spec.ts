import {test, expect} from '@playwright/test';

const testData = {
    firstName: 'John',
    lastName: 'Doe',
    address: 'New York',
    number: '1234567890',
};
test.describe('User Registration Form', () => {

    test.beforeEach(async ({page}) => {
        await page.goto('file:///D:/repos/playwright-ts-project/tests/resources/user-registration-form.html');
    });
    test('Register with valid data', async ({page}) => {
        await page.fill('#firstName', testData.firstName);
        await page.fill('#lastName', testData.lastName);
        await page.fill('#address', testData.address);
        await page.fill('#number', testData.number);
        await page.click('#register'); // button
        await page.waitForTimeout(3000);

        const firstNameText = await page.locator('#displayFirstName').textContent();
        const lastNameText = await page.locator('#displayLastName').textContent();
        const addressText = await page.locator('#displayAddress').textContent();
        const numberText = await page.locator('#displayNumber').textContent();

        expect(firstNameText).toEqual(testData.firstName);
        expect(lastNameText).toEqual(testData.lastName);
        expect(addressText).toEqual(testData.address);
        expect(numberText).toEqual(testData.number);
    });

    test('Register with empty data', async ({page}) => {
        await page.click('#register'); // button
        await page.waitForTimeout(3000);

        const errorText = await page.locator('#error').textContent();

        expect(errorText).toContain('Please fill in all fields.');
    });
});
