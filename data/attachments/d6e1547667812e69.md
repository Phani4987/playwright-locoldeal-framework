# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: auth.spec.js >> Authentication API >> Partner Login API
- Location: tests\auth.spec.js:12:5

# Error details

```
SyntaxError: Unexpected token '<', "<!DOCTYPE "... is not valid JSON
```

# Test source

```ts
  1  | const { test, expect } = require('@playwright/test');
  2  | const Authapi = require('../apis/authapi');
  3  | const { gettestdata } = require('../utils/testdatautil');
  4  | const path = require('path');
  5  | 
  6  | const testdata = gettestdata(
  7  |     path.join(__dirname, '../test-data/partnersignindata.json')
  8  | );
  9  | 
  10 | test.describe('Authentication API', () => {
  11 | 
  12 |     test('Partner Login API', async ({ request }) => {
  13 | 
  14 |         const authApi = new Authapi(request);
  15 | 
  16 |         const response = await authApi.login(
  17 |             testdata.validLogin.email,
  18 |             testdata.validLogin.password
  19 |         );
  20 | 
> 21 |         const responseBody = await response.json();
     |                              ^ SyntaxError: Unexpected token '<', "<!DOCTYPE "... is not valid JSON
  22 | 
  23 |         console.log('response', responseBody);
  24 | 
  25 |         expect(response.status()).toBe(200);
  26 |         expect(responseBody).toBeTruthy();
  27 | 
  28 |     });
  29 | 
  30 | });
```