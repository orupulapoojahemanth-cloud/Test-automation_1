import { test, expect } from '@playwright/test';

test('Test login', async ({ page }) => {
  await page.goto('https://practicetestautomation.com/practice-test-login/?utm_source=chatgpt.com');

  const Text= await page.getByText('Test login').textContent();
  await expect(Text).toBe('Test login');
  console.log('User lands on the correct page.');
  

 
});

