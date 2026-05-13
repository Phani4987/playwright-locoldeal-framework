# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: createcoupon.spec.js >> Coupon API - Create Online Business Coupon >> Get all coupon id associated with account
- Location: tests\createcoupon.spec.js:76:1

# Error details

```
Error: Token not found
```

# Test source

```ts
  1  | const { test: base, expect } = require('@playwright/test');
  2  | const Authapi = require('../apis/authapi');
  3  | const testdata = require('../test-data/partnersignindata.json');
  4  | 
  5  | const test = base.extend({
  6  | 
  7  |     apiAuth: async ({ request }, use) => {
  8  |         const authApi = new Authapi(request);
  9  | 
  10 |         const response = await authApi.login(
  11 |             testdata.validLogin.username,
  12 |             testdata.validLogin.password
  13 |         );
  14 | 
  15 |         const responseBody = await response.json();
  16 | 
  17 |         const token = responseBody.token;
  18 |         const username = responseBody.username;
  19 | 
> 20 |         if (!token) throw new Error("Token not found");
     |                           ^ Error: Token not found
  21 | 
  22 |         console.log("token captured", token);
  23 |         console.log("username captured", username);
  24 | 
  25 |         await use({ token, username });
  26 |     },
  27 | 
  28 |    
  29 | });
  30 | 
  31 | module.exports = { test, expect };
```