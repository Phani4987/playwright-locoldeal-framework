const { test, expect } = require('@playwright/test');

test.describe('Partner Signup UI Flow', () => {

  test('Signup Error Flow - invalid input', async ({ page }) => {
    
    await page.goto('https://your-app-url.com/signup');

    // Example selectors (adjust based on your UI)
    await page.fill('#email', '');
    await page.fill('#password', '');

    await page.click('button[type="submit"]');

    // Expect validation error
    await expect(page.locator('.error-message')).toBeVisible();

    console.log("Signup validation error displayed successfully");
  });

});