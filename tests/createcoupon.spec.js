const { test, expect } = require('../fixtures/auth.fixture'); 
const CouponApi = require('../apis/couponapi');
const {couponData,affiliatecouponData,invalidcouponData} = require('../test-data/createcoupondata');

test.describe('Coupon API - Create Online Business Coupon', () => {

    test('TC01 - Create Online Coupon Successfully', async ({ request, apiAuth }) => {

    const { token, username } = apiAuth;

    console.log("USERNAME:", username);
    console.log("TOKEN:", token);

    const couponApi = new CouponApi(request, token, username);

    const response = await couponApi.createcoupon(couponData);

    console.log("STATUS:", response.status());
    console.log("RESPONSE TEXT:", await response.text());

    expect(response.status()).toBe(201);

    const responseBody = await response.json();
    console.log("RESPONSE:", responseBody);
});
test('TC02 - Create Online affiliate Coupon Successfully', async ({ request, apiAuth }) => {

    const { token, username } = apiAuth;

    console.log("USERNAME:", username);
    console.log("TOKEN:", token);

    const couponApi = new CouponApi(request, token, username);

    const response = await couponApi.createcoupon(affiliatecouponData);

    console.log("STATUS:", response.status());
    console.log("RESPONSE TEXT:", await response.text());

    expect(response.status()).toBe(201);

    const responseBody = await response.json();
    console.log("RESPONSE:", responseBody);
});
test('TC03 - Create',async({request,apiAuth})=>
{
    const{token,username} = apiAuth;
    const couponapi = new CouponApi(request,token,username);
    const response =await couponapi.createcoupon(invalidcouponData);
    const responsebody = await response.json();
    expect(response.status()).toBe(201);
    console.log("RESPONSE:", responsebody);

})


});