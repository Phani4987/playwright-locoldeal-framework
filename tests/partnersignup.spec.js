const { test } = require('../fixtures/baseTest');
const { gettestdata } = require('../utils/Testdatautil');
const assertions = require('../utils/assertions');

const [{ signup }] = require('../test-data/message.json');
const config = require('../config/config');

const testdata = gettestdata('test-data/partnersignupdata.json');

testdata.forEach((userData, index) => {

    test(`Signup Error Flow - ${index}`, async ({ signup: signupPage, page }) => {

        await page.goto(config.baseURL);

        await signupPage.dopartnersignup(userData);

        await assertions.verifySignupError(
            page,
            signup['userexitserror']
        );

       

    });

});