# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: onlinestorecreation.spec.js >> ONLINE STORE CREATION >> TC01 ONLINE STORE CREATION WITH OUT ANYY IMAGES
- Location: tests\onlinestorecreation.spec.js:7:5

# Error details

```
Error: expect(received).toBe(expected) // Object.is equality

Expected: 201
Received: 404
```

# Test source

```ts
  1  | const {test,expect} = require('../fixtures/auth.fixture');
  2  | const storeapi = require('../apis/storeapi');
  3  | const payload = require('../test-data/onlinestoredata.json');
  4  | const data = payload.payload;
  5  | test.describe('ONLINE STORE CREATION',()=>
  6  | {
  7  |     test('TC01 ONLINE STORE CREATION WITH OUT ANYY IMAGES',async({request,apiAuth})=>
  8  |     {   
  9  |         const {token,username} = apiAuth;
  10 |         console.log('token',token);
  11 |         console.log('username',username);
  12 |         const Storeapi = new storeapi(request,token,username);
  13 |         const response = await Storeapi.createstore(data);
  14 |         const responsebody = await response.json();
  15 |         console.log("responsebody",responsebody);
> 16 |         expect(response.status()).toBe(201);
     |                                   ^ Error: expect(received).toBe(expected) // Object.is equality
  17 |     })
  18 | })
  19 | 
```