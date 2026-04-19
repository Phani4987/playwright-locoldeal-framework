const base = require('@playwright/test');
const screenshot = require('../utils/screenshotsutil');
const SignupActions = require('../actions/partnersignupactions');

const test = base.test.extend({

    signup: async ({ page }, use,testInfo) => {
        const signup = new SignupActions(page);
        await use(signup);
        if(testInfo.status!= testInfo.expectedStatus)
        {
            const path = await screenshot.takescreenshot(page,testInfo.title);
            await testInfo.attach('screenshot',{
                path : path,
                contentType : 'image/png'
            }
            )
        }
    }

});

module.exports = {
    test,
    expect: base.expect
};