# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: onlinestorecreation.spec.js >> STORE CREATION FOR BOTH ONLINE AND OFFLINE STORES >> ALL STORE FETCH
- Location: tests\onlinestorecreation.spec.js:68:5

# Error details

```
ReferenceError: request is not defined
```

# Test source

```ts
  1  | const path = require('path');
  2  | class storeapi
  3  | {
  4  |     constructor(request,token,username)
  5  |     {
  6  |         this.request = request;
  7  |         this.token = token;
  8  |         this.username = username;
  9  |     }
  10 |     async createstore(payload)
  11 |     {
  12 |         return await this.request.post(`https://app.locoldeal.com/storeLocation/individual`,
  13 |            {headers: {
  14 |                 Authorization: `Bearer ${this.token}`,
  15 |                 'Content-Type': 'application/json'
  16 |             },
  17 |             data:payload
  18 |              
  19 |         }
  20 |         )
  21 |     }
  22 |     async uploadmainimage(imagePath,fileBuffer,storeid)
  23 |     {
  24 |          return await this.request.put(`https://app.locoldeal.com/storeLocation/${storeid}/mainImage`,
  25 |             {
  26 |                 headers:
  27 |                 {
  28 |                     Authorization: `Bearer ${this.token}`,
  29 |                     
  30 |                 },
  31 |                 multipart: {
  32 |                     file: {
  33 |                         name: path.basename(imagePath),
  34 |                         mimeType: 'image/jpeg',
  35 |                         buffer: fileBuffer
  36 |                     },
  37 |                     
  38 |                 }
  39 | 
  40 |             }
  41 |          )
  42 |     }
  43 |     async bannerimage(imagePath,fileBuffer,storeid)
  44 |     {
  45 |          return await this.request.post(`https://app.locoldeal.com/storeLocation/banner`,
  46 |             {
  47 |                 headers:
  48 |                 {
  49 |                     Authorization: `Bearer ${this.token}`,
  50 |                     
  51 |                 },
  52 |                 multipart: {
  53 |                     file: {
  54 |                         name: path.basename(imagePath),
  55 |                         mimeType: 'image/jpeg',
  56 |                         buffer: fileBuffer
  57 |                     },
  58 |                     locationId:storeid
  59 |                 }
  60 | 
  61 |             }
  62 |          )
  63 |     }
  64 |     async storeimage(imagePath,fileBuffer,storeid)
  65 |     {
  66 |          return await this.request.put(`https://app.locoldeal.com/storeLocation/${storeid}/image`,
  67 |             {
  68 |                 headers:
  69 |                 {
  70 |                     Authorization: `Bearer ${this.token}`,
  71 |                     
  72 |                 },
  73 |                 multipart: {
  74 |                     file: {
  75 |                         name: path.basename(imagePath),
  76 |                         mimeType: 'image/jpeg',
  77 |                         buffer: fileBuffer
  78 |                     }
  79 |                 }
  80 | 
  81 |             }
  82 |          )
  83 |     }
  84 |     async storefetch()
  85 |     {
> 86 |         return await request.get(`https://app.locoldeal.com/storeLocationForSeller?username=${this.username}`,
     |         ^ ReferenceError: request is not defined
  87 |             {
  88 |                 "headers":`Bearer ${this.token}`
  89 |             }
  90 |         )
  91 |     }
  92 |     
  93 | }
  94 | module.exports = storeapi;
```