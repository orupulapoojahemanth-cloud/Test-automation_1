import { test, expect } from '@playwright/test';

test.beforeEach(async ({ page }) => {
  await page.goto('https://practicetestautomation.com/practice-test-login/');
  await expect(page).toHaveURL('https://practicetestautomation.com/practice-test-login/');

  await expect(page).toHaveTitle('Test Login | Practice Test Automation');
});
