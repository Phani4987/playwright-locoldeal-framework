const { test: base, expect } = require('../fixtures/auth.fixture');
const Storeapi = require('../apis/storeapi');
const storeData = require('../test-data/onlinestoredata.json');

const test = base.extend({
    
    storecreation: async ({ request, apiAuth }, use) => {

        const { token, username } = apiAuth;

        const storeApi = new Storeapi(request, token, username);

        const response = await storeApi.createstore(storeData.payload);

        const responseBody = await response.json();

        const storeId = responseBody.locationId;

        if (!storeId) {
            throw new Error("Store ID not found in response");
        }

        console.log("Store created with ID:", storeId);

        await use({ storeId });
    }
});

module.exports = { test, expect };