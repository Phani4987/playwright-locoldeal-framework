const { test: base, expect } = require('@playwright/test');
const Authapi = require('../apis/authapi');
const testdata = require('../test-data/partnersignindata.json');

const test = base.extend({
    apiAuth: async ({ request }, use) => {
        const authApi = new Authapi(request);

        const response = await authApi.login(
            testdata.validLogin.username,
            testdata.validLogin.password
        );

        const responseBody = await response.json();

        const token = responseBody.token;
        const username = responseBody.username;

        if (!token) throw new Error("Token not found");

        console.log("token captured", token);
        console.log("username captured", username);
        await use({ token, username }); 
    }
});

module.exports = { test, expect };