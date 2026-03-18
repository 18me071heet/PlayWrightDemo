import { defineConfig, devices } from '@playwright/test';

export default defineConfig({
  testDir: './tests', // change if your tests are in another folder

  timeout: 30 * 1000,

  retries: 2, // retry failed tests (good for CI)

  workers: 2, // parallel execution

  reporter: 'html',

  use: {
    headless: true,
    screenshot: 'only-on-failure',
    video: 'retain-on-failure',
  },

  projects: [
    {
      name: 'chromium',
      use: { ...devices['Desktop Chrome'] },
    },
    {
      name: 'firefox',
      use: { ...devices['Desktop Firefox'] },
    },
  ],
});