# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: deletecoupon.spec.js >> COUPON FLOW - CREATE & DELETE >> TC01 - Create coupon and delete same coupon
- Location: tests\deletecoupon.spec.js:8:5

# Error details

```
Error: expect(received).toBe(expected) // Object.is equality

Expected: 200
Received: 404
```

# Test source

```ts
  1  | const { test, expect } = require('../fixtures/auth.fixture');
  2  | const CouponApi = require('../apis/couponapi');
  3  | const DeleteCouponApi = require('../apis/coupondeleteapi');
  4  | const createData = require('../test-data/createcoupondata');
  5  | 
  6  | test.describe('COUPON FLOW - CREATE & DELETE', () => {
  7  | 
  8  |     test('TC01 - Create coupon and delete same coupon', async ({ request, apiAuth }) => {
  9  | 
  10 |         const { token, username } = apiAuth;
  11 | 
  12 |         console.log("token:", token);
  13 |         console.log("username:", username);
  14 | 
  15 |         // -------------------------
  16 |         // 1. CREATE COUPON
  17 |         // -------------------------
  18 |         const createApi = new CouponApi(request, token, username);
  19 | 
  20 |         const createResponse = await createApi.createcoupon(createData);
  21 | 
> 22 |         expect(createResponse.status()).toBe(200);
     |                                         ^ Error: expect(received).toBe(expected) // Object.is equality
  23 | 
  24 |         const createBody = await createResponse.json();
  25 |         console.log("CREATE RESPONSE:", createBody);
  26 | 
  27 |         // IMPORTANT: adjust key based on actual API response
  28 |         const couponId = createBody.id || createBody.couponId;
  29 | 
  30 |         expect(couponId).toBeTruthy();
  31 |         console.log("Created Coupon ID:", couponId);
  32 | 
  33 |         // -------------------------
  34 |         // 2. VERIFY (optional pre-check)
  35 |         // -------------------------
  36 |         const check = await request.get(
  37 |             `https://app.locoldeal.com/coupons/${couponId}?username=${username}`,
  38 |             {
  39 |                 headers: {
  40 |                     Authorization: `Bearer ${token}`
  41 |                 }
  42 |             }
  43 |         );
  44 | 
  45 |         console.log("PRE-CHECK:", check.status());
  46 |         expect([200, 201]).toContain(check.status());
  47 | 
  48 |         // -------------------------
  49 |         // 3. DELETE COUPON
  50 |         // -------------------------
  51 |         const deleteApi = new DeleteCouponApi(request, token, username, couponId);
  52 | 
  53 |         const deleteResponse = await deleteApi.coupondelete();
  54 | 
  55 |         const deleteBody = await deleteResponse.json();
  56 |         console.log("DELETE RESPONSE:", deleteBody);
  57 | 
  58 |         expect(deleteResponse.status()).toBe(200);
  59 |     });
  60 | 
  61 | });
```