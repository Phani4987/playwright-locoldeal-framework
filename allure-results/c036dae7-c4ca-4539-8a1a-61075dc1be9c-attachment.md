# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: createcoupon.spec.js >> Coupon API - Create Online Business Coupon >> TC03 - Invalid Coupon Creation
- Location: tests\createcoupon.spec.js:43:1

# Error details

```
Error: expect(received).toBe(expected) // Object.is equality

Expected: 404
Received: 400
```

# Test source

```ts
  1  | const { test, expect } = require('../fixtures/auth.fixture'); 
  2  | const CouponApi = require('../apis/couponapi');
  3  | const { couponData, affiliatecouponData, invalidcouponData } = require('../test-data/createcoupondata');
  4  | 
  5  | test.describe('Coupon API - Create Online Business Coupon', () => {
  6  | 
  7  | test('TC01 - Create Online Coupon Successfully', async ({ request, apiAuth }) => {
  8  | 
  9  |     const { token, username } = apiAuth;
  10 | 
  11 |     console.log("USERNAME:", username);
  12 | 
  13 |     const couponApi = new CouponApi(request, token, username);
  14 | 
  15 |     const response = await couponApi.createcoupon(couponData);
  16 | 
  17 |     expect(response.status()).toBe(201);
  18 | 
  19 |     const responseBody = await response.json();
  20 | 
  21 |     console.log("STATUS:", response.status());
  22 |     console.log("RESPONSE:", responseBody);
  23 | 
  24 | });
  25 | 
  26 | test('TC02 - Create Online affiliate Coupon Successfully', async ({ request, apiAuth }) => {
  27 | 
  28 |     const { token, username } = apiAuth;
  29 | 
  30 |     const couponApi = new CouponApi(request, token, username);
  31 | 
  32 |     const response = await couponApi.createcoupon(affiliatecouponData);
  33 | 
  34 |     const responseText = await response.text();
  35 | 
  36 |     console.log("STATUS:", response.status());
  37 |     console.log("RESPONSE:", responseText);
  38 | 
  39 |     expect(response.status()).toBe(201);
  40 | 
  41 | });
  42 | 
  43 | test('TC03 - Invalid Coupon Creation', async ({ request, apiAuth }) => {
  44 | 
  45 |     const { token, username } = apiAuth;
  46 | 
  47 |     const couponapi = new CouponApi(request, token, username);
  48 | 
  49 |     const response = await couponapi.createcoupon(invalidcouponData);
  50 | 
  51 |     const responseText = await response.text();
  52 | 
  53 |     console.log("STATUS:", response.status());
  54 |     console.log("RESPONSE:", responseText);
  55 | 
> 56 |     expect(response.status()).toBe(404);
     |                               ^ Error: expect(received).toBe(expected) // Object.is equality
  57 | 
  58 | });
  59 | 
  60 | });
```