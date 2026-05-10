# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: createcoupon.spec.js >> Coupon API - Create Online Business Coupon >> TC01 - Create Online Coupon Successfully
- Location: tests\createcoupon.spec.js:7:5

# Error details

```
TypeError: Cannot read properties of undefined (reading 'shortTitle')
```

# Test source

```ts
  1  | class CouponApi {
  2  |     constructor(request, token) {
  3  |         this.request = request;
  4  |         this.token = token;
  5  |     }
  6  | 
  7  |     async createcoupon(payload) {
  8  |         return await this.request.post(
  9  |             'https://app.locoldeal.com/coupons?username=ETHANMILLER',
  10 |             {
  11 |                 headers: {
  12 |                     Authorization: `Bearer ${this.token}`
  13 |                 },
  14 |                 multipart: {
> 15 |                     shortTitle: payload.shortTitle,
     |                                         ^ TypeError: Cannot read properties of undefined (reading 'shortTitle')
  16 |                     longDescription: payload.longDescription,
  17 |                     disclaimer: payload.disclaimer,
  18 |                     category: payload.category,
  19 |                     subCategory: payload.subCategory,
  20 |                     isOffline: String(payload.isOffline),
  21 |                     couponCode: payload.couponCode,
  22 |                     weblink: payload.weblink,
  23 |                     isAffiliate: String(payload.isAffiliate),
  24 |                     effectiveFrom: payload.effectiveFrom,
  25 |                     validUpTo: payload.validUpTo
  26 |                 }
  27 |             }
  28 |         );
  29 |     }
  30 | }
  31 | 
  32 | module.exports = CouponApi;
```