import { test, expect } from '@playwright/test';

test('User can login', async ({ page }) => {
  await page.goto('https://php.inheritxdev.in/rugby_planner/qa/login');

  // Email
   await page.getByPlaceholder('Enter email').first().fill('julia.mason@yopmail.com');
  await page.getByPlaceholder('Enter password').fill('YourPassword123');
  await page.getByRole('button', { name: 'Sign in' }).click();

  // Optional: validate successful login (example)
  // await expect(page).toHaveURL(/dashboard/);
});