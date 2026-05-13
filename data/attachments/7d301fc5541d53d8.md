# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: onlinestorecreation.spec.js >> STORE CREATION FOR BOTH ONLINE AND OFFLINE STORES >> TC01 ONLINE STORE CREATION WITH OUT ANYY IMAGES
- Location: tests\onlinestorecreation.spec.js:15:5

# Error details

```
Error: expect(received).toBe(expected) // Object.is equality

Expected: 200
Received: 404
```

# Test source

```ts
  1  | 
  2  | const {test,expect} = require('../fixtures/storecreationfixture');
  3  | const storeapi = require('../apis/storeapi');
  4  | const payload = require('../test-data/onlinestoredata.json');
  5  | const payload2 = require('../test-data/offlinestoretestdata.json')
  6  | const data = payload.payload;
  7  | const offlinestoredata = payload2.payload;
  8  | const path = require('path');
  9  | const imagePath = path.join(__dirname,'../test-data/mainimages/mainimage.png');
  10 | const fs = require('fs');
  11 | const fileBuffer = fs.readFileSync(imagePath);
  12 | 
  13 | test.describe('STORE CREATION FOR BOTH ONLINE AND OFFLINE STORES',()=>
  14 | {
  15 |     test('TC01 ONLINE STORE CREATION WITH OUT ANYY IMAGES',async({request,apiAuth})=>
  16 |     {   
  17 |         const {token,username} = apiAuth;
  18 |         console.log('token',token);
  19 |         console.log('username',username);
  20 |         const Storeapi = new storeapi(request,token,username);
  21 |         const response = await Storeapi.createstore(data);
  22 |         const responsebody = await response.json();
  23 |         const locationid = await responsebody.locationId;
  24 |         console.log("responsebody",responsebody);
  25 |         console.log("locationid",locationid);
  26 |         expect(response.status()).toBe(201);
  27 |         const responsee = await Storeapi.uploadmainimage(imagePath,fileBuffer,locationid,token,username);
  28 |         const responseboddy = await responsee.json();
  29 |         console.log("responsebody",responseboddy);
  30 |         expect(responsee.status()).toBe(200);
  31 |         const response1 = await Storeapi.storeimage(imagePath,fileBuffer,locationid,token,username);
  32 |         const responseboddy1 = await response1.json();
  33 |         console.log("responsebody",responseboddy1);
> 34 |         expect(response1.status()).toBe(200);
     |                                    ^ Error: expect(received).toBe(expected) // Object.is equality
  35 |     })
  36 |     test.skip('TC02 OFFLINE STORE CREATION WITH OUT ANYY IMAGES',async({request,apiAuth})=>
  37 |     {   
  38 |         const {token,username} = apiAuth;
  39 |         console.log('token',token);
  40 |         console.log('username',username);
  41 |         const Storeapi = new storeapi(request,token,username);
  42 |         const response = await Storeapi.createstore(offlinestoredata);
  43 |         const responsebody = await response.json();
  44 |         console.log("responsebody",responsebody);
  45 |         expect(response.status()).toBe(201);
  46 |         const locationid = await responsebody.locationId;
  47 |         console.log("responsebody",responsebody);
  48 |         console.log("locationid",locationid);
  49 |         expect(response.status()).toBe(201);
  50 |         const responsee = await Storeapi.uploadmainimage(imagePath,fileBuffer,locationid,token,username);
  51 |         const responseboddy = await responsee.json();
  52 |         console.log("responsebody",responseboddy);
  53 |         expect(responsee.status()).toBe(200);
  54 |     })
  55 |     test.skip('TC03 Online STORE CREATION WITH ANY IMAGES',async({request,apiAuth,storecreation})=>
  56 |     {   
  57 |         const {token,username} = apiAuth;
  58 |         const {storeId}= storecreation;
  59 |         console.log('token',token);
  60 |         console.log('username',username);
  61 |         const Storeapi = new storeapi(request,token,username);
  62 |         const response = await Storeapi.uploadmainimage(imagePath,fileBuffer,storeId,token,username);
  63 |         const responsebody = await response.json();
  64 |         console.log("responsebody",responsebody);
  65 |         expect(response.status()).toBe(200);
  66 |     })
  67 | })
  68 | 
```