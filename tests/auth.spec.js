const { test, expect } = require('@playwright/test');
const Authapi = require('../apis/authapi');
const testdata = require('../test-data/partnersignindata.json');
const consumertestdata = require('../test-data/consumersignin.json');
test.describe('Authentication Partner API', () => {

    test('Partner Login API', async ({ request }) => {

        const authApi = new Authapi(request);

        const response = await authApi.login(
            testdata.validLogin.username,
            testdata.validLogin.password
        );

        const responseBody = await response.json();

        console.log('response', responseBody);

        expect(response.status()).toBe(200);
        expect(responseBody.userRole).toBe("SITE_PARTNER");
        expect(responseBody).toBeTruthy();
    });

});
test.describe('Authentication Consumer Api',()=>
{
    test('Consumer Login API',async ({request})=>
    {
         const authApi = new Authapi(request);
         const response = await authApi.login(
            consumertestdata.validconsumerlogin.username,
            consumertestdata.validconsumerlogin.password
         );
         const responseBody = await response.json();
         console.log('response',responseBody);
         expect(response.status()).toBe(200);
        expect(responseBody.userRole).toBe("SITE_USER");
        expect(responseBody).toBeTruthy();

    })
})