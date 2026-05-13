# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: onlinestorecreation.spec.js >> STORE CREATION FOR BOTH ONLINE AND OFFLINE STORES >> ALL STORE FETCH
- Location: tests\onlinestorecreation.spec.js:68:5

# Error details

```
Error: ENOENT: no such file or directory, open 'C:\test-data\storeids.json'
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
  15 |     test.skip('TC01 ONLINE STORE CREATION WITH OUT ANYY IMAGES',async({request,apiAuth})=>
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
  31 |         //
  32 |         const response1 = await Storeapi.bannerimage(imagePath,fileBuffer,locationid,token,username);
  33 |         const responseboddy1 = await response1.json();
  34 |         console.log("responsebody",responseboddy1);
  35 |         expect(response1.status()).toBe(200);
  36 |     })
  37 |     test.skip('TC02 OFFLINE STORE CREATION WITH OUT ANYY IMAGES',async({request,apiAuth})=>
  38 |     {   
  39 |         const {token,username} = apiAuth;
  40 |         console.log('token',token);
  41 |         console.log('username',username);
  42 |         const Storeapi = new storeapi(request,token,username);
  43 |         const response = await Storeapi.createstore(offlinestoredata);
  44 |         const responsebody = await response.json();
  45 |         console.log("responsebody",responsebody);
  46 |         expect(response.status()).toBe(201);
  47 |         const locationid = await responsebody.locationId;
  48 |         console.log("responsebody",responsebody);
  49 |         console.log("locationid",locationid);
  50 |         expect(response.status()).toBe(201);
  51 |         const responsee = await Storeapi.uploadmainimage(imagePath,fileBuffer,locationid,token,username);
  52 |         const responseboddy = await responsee.json();
  53 |         console.log("responsebody",responseboddy);
  54 |         expect(responsee.status()).toBe(200);
  55 |     })
  56 |     test.skip('TC03 Online STORE CREATION WITH ANY IMAGES',async({request,apiAuth,storecreation})=>
  57 |     {   
  58 |         const {token,username} = apiAuth;
  59 |         const {storeId}= storecreation;
  60 |         console.log('token',token);
  61 |         console.log('username',username);
  62 |         const Storeapi = new storeapi(request,token,username);
  63 |         const response = await Storeapi.uploadmainimage(imagePath,fileBuffer,storeId,token,username);
  64 |         const responsebody = await response.json();
  65 |         console.log("responsebody",responsebody);
  66 |         expect(response.status()).toBe(200);
  67 |     })
  68 |     test('ALL STORE FETCH',async ({request,apiAuth})=>
  69 |     {
  70 |         const{token,username} = apiAuth;
  71 |         const Storeapi = new storeapi(request,token,username);
  72 |         const response = await Storeapi.storefetch();
  73 |         console.log(response);
  74 |         const responsebody = await response.json();
  75 |         console.log('responsebody',responsebody);
  76 |         expect(response.status()).toBe(200);
  77 |         const storeId = responsebody.map(item=>item.locationId);
  78 |         console.log(storeId);
  79 |         const fs = require('fs');
> 80 |         fs.writeFileSync('../test-data/storeids.json',
     |            ^ Error: ENOENT: no such file or directory, open 'C:\test-data\storeids.json'
  81 |             JSON.stringify(storeId,null,2)
  82 |         )
  83 | 
  84 |     })
  85 | })
  86 | 
```