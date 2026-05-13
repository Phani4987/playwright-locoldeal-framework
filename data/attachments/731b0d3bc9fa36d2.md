# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: createcoupon.spec.js >> Coupon API - Create Online Business Coupon >> Get all coupon id associated with account
- Location: tests\createcoupon.spec.js:76:1

# Error details

```
TypeError: responsebody.map is not a function
```

# Test source

```ts
  1  | const { test, expect } = require('../fixtures/auth.fixture'); 
  2  | const CouponApi = require('../apis/couponapi');
  3  | const {offlinecoupondata} = require('../test-data/offlinecreatecoupondata.json');
  4  | const { couponData, affiliatecouponData, invalidcouponData } = require('../test-data/createcoupondata');
  5  | 
  6  | test.describe('Coupon API - Create Online Business Coupon', () => {
  7  | 
  8  | test.skip('TC01 - Create Online Coupon Successfully', async ({ request, apiAuth }) => {
  9  | 
  10 |     const { token, username } = apiAuth;
  11 | 
  12 |     console.log("USERNAME:", username);
  13 | 
  14 |     const couponApi = new CouponApi(request, token, username);
  15 | 
  16 |     const response = await couponApi.createcoupon(couponData);
  17 | 
  18 |     expect(response.status()).toBe(201);
  19 | 
  20 |     const responseBody = await response.json();
  21 | 
  22 |     console.log("STATUS:", response.status());
  23 |     console.log("RESPONSE:", responseBody);
  24 | 
  25 | });
  26 | 
  27 | test.skip('TC02 - Create Online affiliate Coupon Successfully', async ({ request, apiAuth }) => {
  28 | 
  29 |     const { token, username } = apiAuth;
  30 | 
  31 |     const couponApi = new CouponApi(request, token, username);
  32 | 
  33 |     const response = await couponApi.createcoupon(affiliatecouponData);
  34 | 
  35 |     const responseText = await response.text();
  36 | 
  37 |     console.log("STATUS:", response.status());
  38 |     console.log("RESPONSE:", responseText);
  39 | 
  40 |     expect(response.status()).toBe(201);
  41 | 
  42 | });
  43 | 
  44 | test.skip('TC03 - Invalid Coupon Creation', async ({ request, apiAuth }) => {
  45 | 
  46 |     const { token, username } = apiAuth;
  47 | 
  48 |     const couponapi = new CouponApi(request, token, username);
  49 | 
  50 |     const response = await couponapi.createcoupon(invalidcouponData);
  51 | 
  52 |     const responseText = await response.text();
  53 | 
  54 |     console.log("STATUS:", response.status());
  55 |     console.log("RESPONSE:", responseText);
  56 | 
  57 |     expect(response.status()).toBe(404);
  58 | 
  59 | });
  60 | test.skip('TC04 - Create OFFLINE Coupon Successfully', async ({ request, apiAuth }) => {
  61 | 
  62 |     const { token, username } = apiAuth;
  63 | 
  64 |     console.log("USERNAME:", username);
  65 | 
  66 |     const couponApi = new CouponApi(request, token, username);
  67 | 
  68 |     const response = await couponApi.createcoupon(offlinecoupondata);
  69 |     expect(response.status()).toBe(201);
  70 |     const responseBody = await response.json();
  71 |     console.log("STATUS:", response.status());
  72 |     console.log("RESPONSE:", responseBody);
  73 | 
  74 | });
  75 | 
  76 | test("Get all coupon id associated with account",async({request,apiAuth})=>
  77 | {
  78 |     const{token,username} = apiAuth;
  79 |     const couponApi = new CouponApi(request, token, username);
  80 |     let page=0;
  81 |     while(true)
  82 |     {  
  83 |     const response = await couponApi.getallcouponid(page);
  84 |     const responsebody = await response.json();
  85 |     if(responsebody.length==0)
  86 |     {
  87 |         break;
  88 |     }
> 89 |     const couponid = responsebody.map(item=>item.id);
     |                                   ^ TypeError: responsebody.map is not a function
  90 |     console.log(couponid);
  91 |     console.log(response.status());
  92 |     
  93 |     page++;
  94 |     }
  95 |     
  96 | })
  97 | 
  98 | });
```