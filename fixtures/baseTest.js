const base = require('@playwright/test');
const screenshot = require('../utils/screenshotsutil');
const SignupActions = require('../actions/partnersignupactions');
const SigninActions = require('../actions/partnersigninactions'); // ✅ add this
const { allure } = require('allure-playwright');

const test = base.test.extend({

    // ✅ SIGNUP FIXTURE
    signup: async ({ page }, use, testInfo) => {

        const signup = new SignupActions(page);

        await use(signup);

        if (testInfo.status !== testInfo.expectedStatus) {

            const path = await screenshot.takescreenshot(page, testInfo.title);

            await testInfo.attach('screenshot', {
                path: path,
                contentType: 'image/png'
            });

            await allure.attachment(
                'Failure Screenshot',
                await page.screenshot(),
                'image/png'
            );
        }
    },

    // ✅ SIGNIN FIXTURE (NEW)
    signin: async ({ page }, use, testInfo) => {

        const signin = new SigninActions(page);

        await use(signin);

        if (testInfo.status !== testInfo.expectedStatus) {

            const path = await screenshot.takescreenshot(page, testInfo.title);

            await testInfo.attach('screenshot', {
                path: path,
                contentType: 'image/png'
            });

            await allure.attachment(
                'Failure Screenshot',
                await page.screenshot(),
                'image/png'
            );
        }
    }

});

module.exports = {
    test,
    expect: base.expect
};