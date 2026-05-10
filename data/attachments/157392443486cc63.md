# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: createcoupon.spec.js >> Coupon API - Create Online Business Coupon >> TC01 - Create Online Coupon Successfully
- Location: tests\createcoupon.spec.js:7:5

# Error details

```
TypeError: apiRequestContext.post: Cannot read properties of undefined (reading 'on')
```

# Test source

```ts
  1  | class CouponApi {
  2  |     constructor(request, token, username) {
  3  |         this.request = request;
  4  |         this.token = token;
  5  |         this.username = username;
  6  |     }
  7  | 
  8  |     async createcoupon(payload) {
  9  | 
> 10 |         return await this.request.post('https://app.locoldeal.com/coupons', {
     |                                   ^ TypeError: apiRequestContext.post: Cannot read properties of undefined (reading 'on')
  11 |             headers: {
  12 |                 Authorization: `Bearer ${this.token}`
  13 |             },
  14 | 
  15 |             multipart: {
  16 |                 username: this.username,
  17 |                 jsondata: JSON.stringify(payload)
  18 |             }
  19 |         });
  20 |     }
  21 | }
  22 | 
  23 | module.exports = CouponApi;
```