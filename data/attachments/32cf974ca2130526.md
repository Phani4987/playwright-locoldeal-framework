# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: createcoupon.spec.js >> Coupon API - Create Online Business Coupon >> TC01 - Create Online Coupon Successfully
- Location: tests\createcoupon.spec.js:7:5

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
  3  | const couponData = require('../test-data/createcoupondata.json');
  4  | 
  5  | test.describe('Coupon API - Create Online Business Coupon', () => {
  6  | 
  7  |     test('TC01 - Create Online Coupon Successfully', async ({ request, apiAuth }) => {
  8  | 
  9  |         const token = apiAuth;
  10 |         console.log("apiAuth value:", apiAuth);
  11 |         const couponApi = new CouponApi(request, token);
  12 | 
  13 |         const response = await couponApi.createcoupon(couponData.coupon);
  14 |         console.log("STATUS:", response.status());
  15 |         console.log("RESPONSE TEXT:", await response.text());
> 16 |         expect(response.status()).toBe(201);
     |                                   ^ Error: expect(received).toBe(expected) // Object.is equality
  17 | 
  18 |         const responseBody = await response.json();
  19 | 
  20 |         expect(responseBody.status).toBe('success');
  21 |         expect(responseBody.data).toHaveProperty('couponCode');
  22 | 
  23 |         console.log("Coupon Created:", responseBody.data);
  24 |     });
  25 | 
  26 |     
  27 | 
  28 | });
```