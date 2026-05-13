const { test, expect } = require('../fixtures/auth.fixture'); 
const CouponApi = require('../apis/couponapi');
const {offlinecoupondata} = require('../test-data/offlinecreatecoupondata.json');
const { couponData, affiliatecouponData, invalidcouponData } = require('../test-data/createcoupondata');
const { json } = require('stream/consumers');

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

test.skip('TC03 - Invalid Coupon Creation', async ({ request, apiAuth }) => {

    const { token, username } = apiAuth;

    const couponapi = new CouponApi(request, token, username);

    const response = await couponapi.createcoupon(invalidcouponData);

    const responseText = await response.text();

    console.log("STATUS:", response.status());
    console.log("RESPONSE:", responseText);

    expect(response.status()).toBe(404);

});
test('TC04 - Create OFFLINE Coupon Successfully', async ({ request, apiAuth }) => {

    const { token, username } = apiAuth;

    console.log("USERNAME:", username);

    const couponApi = new CouponApi(request, token, username);

    const response = await couponApi.createcoupon(offlinecoupondata);
    expect(response.status()).toBe(201);
    const responseBody = await response.json();
    console.log("STATUS:", response.status());
    console.log("RESPONSE:", responseBody);

});

test("Get all coupon id associated with account",async({request,apiAuth})=>
{
    const{token,username} = apiAuth;
    const couponApi = new CouponApi(request, token, username);
    let page=0;
    let couponids = [];
    while(true)
    {  
    const response = await couponApi.getallcouponid(page);
     console.log('status',response.status());
    const responsebody = await response.json();
    if(responsebody.coupons.length==0)
    {
        break;
    }
    const couponid = responsebody.coupons.map(item=>item.id);
    couponids.push(...couponid);
    console.log(couponid);
    page++;
    }
    const fs = require('fs');
    fs.writeFileSync('./test-data/couponids.json',
        JSON.stringify(couponids,null,2)
    )
    
})


});