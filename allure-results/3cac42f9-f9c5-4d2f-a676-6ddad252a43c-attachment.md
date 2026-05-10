# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: createcoupon.spec.js >> Coupon API - Create Online Business Coupon >> TC01 - Create Online Coupon Successfully
- Location: tests\createcoupon.spec.js:7:5

# Error details

```
TypeError: couponApi.createCoupon is not a function
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
  10 | 
  11 |         const couponApi = new CouponApi(request, token);
  12 | 
> 13 |         const response = await couponApi.createCoupon(couponData.coupon);
     |                                          ^ TypeError: couponApi.createCoupon is not a function
  14 | 
  15 |         expect(response.status()).toBe(200);
  16 | 
  17 |         const responseBody = await response.json();
  18 | 
  19 |         expect(responseBody.status).toBe('success');
  20 |         expect(responseBody.data).toHaveProperty('couponCode');
  21 | 
  22 |         console.log("Coupon Created:", responseBody.data);
  23 |     });
  24 | 
  25 |     
  26 | 
  27 | });
```