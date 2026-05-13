const { test, expect } = require('../fixtures/auth.fixture'); 
const CouponApi = require('../apis/couponapi');
const { couponData, affiliatecouponData, invalidcouponData } = require('../test-data/createcoupondata');

test.describe('Coupon API - Create Online Business Coupon', () => {

test('TC01 - Create Online Coupon Successfully', async ({ request, apiAuth }) => {

    const { token, username } = apiAuth;

    console.log("USERNAME:", username);

    const couponApi = new CouponApi(request, token, username);

    const response = await couponApi.createcoupon(couponData);

    expect(response.status()).toBe(201);

    const responseBody = await response.json();

    console.log("STATUS:", response.status());
    console.log("RESPONSE:", responseBody);

});

test('TC02 - Create Online affiliate Coupon Successfully', async ({ request, apiAuth }) => {

    const { token, username } = apiAuth;

    const couponApi = new CouponApi(request, token, username);

    const response = await couponApi.createcoupon(affiliatecouponData);

    const responseText = await response.text();

    console.log("STATUS:", response.status());
    console.log("RESPONSE:", responseText);

    expect(response.status()).toBe(201);

});

test('TC03 - Invalid Coupon Creation', async ({ request, apiAuth }) => {

    const { token, username } = apiAuth;

    const couponapi = new CouponApi(request, token, username);

    const response = await couponapi.createcoupon(invalidcouponData);

    const responseText = await response.text();

    console.log("STATUS:", response.status());
    console.log("RESPONSE:", responseText);

    expect(response.status()).toBe(404);

});

});