# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: createcoupon.spec.js >> Coupon API - Create Online Business Coupon >> TC04 - Create OFFLINE Coupon Successfully
- Location: tests\createcoupon.spec.js:60:1

# Error details

```
Error: expect(received).toBe(expected) // Object.is equality

Expected: 201
Received: 404
```

# Test source

```ts
  1  | const { test, expect } = require('../fixtures/auth.fixture'); 
  2  | const CouponApi = require('../apis/couponapi');
  3  | const offlinecoupondata = require('../test-data/offlinecreatecoupondata.json');
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
  60 | test('TC04 - Create OFFLINE Coupon Successfully', async ({ request, apiAuth }) => {
  61 | 
  62 |     const { token, username } = apiAuth;
  63 | 
  64 |     console.log("USERNAME:", username);
  65 | 
  66 |     const couponApi = new CouponApi(request, token, username);
  67 | 
  68 |     const response = await couponApi.createcoupon(offlinecoupondata);
> 69 |     expect(response.status()).toBe(201);
     |                               ^ Error: expect(received).toBe(expected) // Object.is equality
  70 |     const responseBody = await response.json();
  71 |     console.log("STATUS:", response.status());
  72 |     console.log("RESPONSE:", responseBody);
  73 | 
  74 | });
  75 | 
  76 | });
```