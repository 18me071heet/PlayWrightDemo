import 'dotenv/config';
import { test, expect } from '@playwright/test';

test('User can login', async ({ page }) => {
  const email = process.env.EMAIL;
  const password = process.env.PASSWORD;

  if (!email || !password) {
    throw new Error('Missing EMAIL or PASSWORD in environment variables');
  }

  await page.goto('https://php.inheritxdev.in/rugby_planner/qa/login');

  await page.getByPlaceholder('Enter email').first().fill(email);
  await page.getByPlaceholder('Enter password').fill(password);
  await page.getByRole('button', { name: 'Sign in' }).click();
});