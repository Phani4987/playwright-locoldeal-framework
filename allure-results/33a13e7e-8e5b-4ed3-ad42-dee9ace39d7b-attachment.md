# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: auth.spec.js >> Authentication API >> Partner Login API
- Location: tests\auth.spec.js:7:5

# Error details

```
Error: expect(received).toBe(expected) // Object.is equality

Expected: 200
Received: 401
```

# Test source

```ts
  1  | const { test, expect } = require('@playwright/test');
  2  | const Authapi = require('../apis/authapi');
  3  | const testdata = require('../test-data/partnersignindata.json');
  4  | 
  5  | test.describe('Authentication API', () => {
  6  | 
  7  |     test('Partner Login API', async ({ request }) => {
  8  | 
  9  |         const authApi = new Authapi(request);
  10 | 
  11 |         const response = await authApi.login(
  12 |             testdata.validLogin.email,
  13 |             testdata.validLogin.password
  14 |         );
  15 | 
  16 |         const responseBody = await response.json();
  17 | 
  18 |         console.log('response', responseBody);
  19 | 
> 20 |         expect(response.status()).toBe(200);
     |                                   ^ Error: expect(received).toBe(expected) // Object.is equality
  21 |         expect(responseBody).toBeTruthy();
  22 |     });
  23 | 
  24 | });
```