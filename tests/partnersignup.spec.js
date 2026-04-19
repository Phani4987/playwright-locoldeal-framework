const { test } = require('../fixtures/baseTest');
const assertions = require('../utils/assertions');

const data = require('../test-data/partnersignupdata.json');
const messages = require('../test-data/message.json');
const config = require('../config/config');

test.describe('Partner Signup Module', () => {

    test.beforeEach(async ({ page }) => {
        await page.goto(config.baseURL);
    });

    test('Signup - Error Flow', async ({ signup, page }) => {

        await signup.dopartnersignup(data);

        await assertions.verifySignupError(
            page,
            messages.signup['error-message']
        );
    });

});