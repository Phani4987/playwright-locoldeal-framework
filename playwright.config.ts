module.exports = {
  testDir: './tests',
  timeout: 30000,
  retries: 1,

  use: {
    headless: true,
    screenshot: 'only-on-failure',
    video: 'retain-on-failure',
    trace: 'on-first-retry',
  },

  reporter: [
    ['line'],
    ['allure-playwright']  // ✅ Add this
  ],
};