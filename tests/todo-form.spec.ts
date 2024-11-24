import {test, expect} from '@playwright/test';

test.skip('Filling out a form', async ({page}) => {
    await page.goto('https://demo.playwright.dev/todomvc');

    const newTodo = page.getByPlaceholder('What needs to be done?');
    await newTodo.fill('Buy some milk');
    await newTodo.press('Enter');
    await newTodo.fill('Buy some eggs');
    await newTodo.press('Enter');
    await page.waitForTimeout(3000);

    const firstTodo = page.getByTestId('todo-item').first();
    await firstTodo.getByRole('checkbox').check();

    const secondTodo = page.getByTestId('todo-item').nth(1);
    await expect(secondTodo).not.toHaveClass('completed');
    await expect(firstTodo).toHaveClass('completed');
})

test.skip('Handling Form', async ({page}) => {
    await page.goto('https://demo.playwright.dev/todomvc');
    const placeholder = '[placeholder="What needs to be done?"]';
    await page.fill(placeholder, 'Buy some milk');
    await page.locator(placeholder).press('Enter');

    const checkbox = page.locator('.toggle');
    await checkbox.check();
})