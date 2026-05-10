# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: auth.spec.js >> Authentication Partner API >> Partner Login API
- Location: tests\auth.spec.js:7:5

# Error details

```
Error: expect(received).toBe(expected) // Object.is equality

Expected: "SITE_PARTNER"
Received: "SITE_USER"
```

# Test source

```ts
  1  | const { test, expect } = require('@playwright/test');
  2  | const Authapi = require('../apis/authapi');
  3  | const testdata = require('../test-data/partnersignindata.json');
  4  | const consumertestdata = require('../test-data/consumersignin.json');
  5  | test.describe('Authentication Partner API', () => {
  6  | 
  7  |     test('Partner Login API', async ({ request }) => {
  8  | 
  9  |         const authApi = new Authapi(request);
  10 | 
  11 |         const response = await authApi.login(
  12 |             testdata.validLogin.username,
  13 |             testdata.validLogin.password
  14 |         );
  15 | 
  16 |         const responseBody = await response.json();
  17 | 
  18 |         console.log('response', responseBody);
  19 | 
  20 |         expect(response.status()).toBe(200);
> 21 |         expect(responseBody.userRole).toBe("SITE_PARTNER");
     |                                       ^ Error: expect(received).toBe(expected) // Object.is equality
  22 |         expect(responseBody).toBeTruthy();
  23 |     });
  24 | 
  25 | });
  26 | test.describe('Authentication Consumer Api',()=>
  27 | {
  28 |     test('Consumer Login API',async ({request})=>
  29 |     {
  30 |          const authApi = new authApi(request);
  31 |          const response = await authApi.login(
  32 |             consumertestdata.validconsumerlogin.username,
  33 |             consumertestdata.validconsumerlogin.password
  34 |          );
  35 |          const responseBody = await response.json();
  36 |          console.log('response',responseBody);
  37 |          expect(response.status()).toBe(200);
  38 |         expect(responseBody.userRole).toBe("SITE_USER");
  39 |         expect(responseBody).toBeTruthy();
  40 | 
  41 |     })
  42 | })
```