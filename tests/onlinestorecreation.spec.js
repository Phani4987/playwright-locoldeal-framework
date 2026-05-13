
const {test,expect} = require('../fixtures/storecreationfixture');
const storeapi = require('../apis/storeapi');
const payload = require('../test-data/onlinestoredata.json');
const payload2 = require('../test-data/offlinestoretestdata.json')
const data = payload.payload;
const offlinestoredata = payload2.payload;
const path = require('path');
const imagePath = path.join(__dirname,'../test-data/mainimages/mainimage.png');
const fs = require('fs');
const fileBuffer = fs.readFileSync(imagePath);
const storeid = require('../test-data/storeids.json');

test.describe('STORE CREATION FOR BOTH ONLINE AND OFFLINE STORES',()=>
{
    test.skip('TC01 ONLINE STORE CREATION WITH OUT ANYY IMAGES',async({request,apiAuth})=>
    {   
        const {token,username} = apiAuth;
        console.log('token',token);
        console.log('username',username);
        const Storeapi = new storeapi(request,token,username);
        const response = await Storeapi.createstore(data);
        const responsebody = await response.json();
        const locationid = await responsebody.locationId;
        console.log("responsebody",responsebody);
        console.log("locationid",locationid);
        expect(response.status()).toBe(201);
        const responsee = await Storeapi.uploadmainimage(imagePath,fileBuffer,locationid,token,username);
        const responseboddy = await responsee.json();
        console.log("responsebody",responseboddy);
        expect(responsee.status()).toBe(200);
        //
        const response1 = await Storeapi.bannerimage(imagePath,fileBuffer,locationid,token,username);
        const responseboddy1 = await response1.json();
        console.log("responsebody",responseboddy1);
        expect(response1.status()).toBe(200);
    })
    test.skip('TC02 OFFLINE STORE CREATION WITH OUT ANYY IMAGES',async({request,apiAuth})=>
    {   
        const {token,username} = apiAuth;
        console.log('token',token);
        console.log('username',username);
        const Storeapi = new storeapi(request,token,username);
        const response = await Storeapi.createstore(offlinestoredata);
        const responsebody = await response.json();
        console.log("responsebody",responsebody);
        expect(response.status()).toBe(201);
        const locationid = await responsebody.locationId;
        console.log("responsebody",responsebody);
        console.log("locationid",locationid);
        expect(response.status()).toBe(201);
        const responsee = await Storeapi.uploadmainimage(imagePath,fileBuffer,locationid,token,username);
        const responseboddy = await responsee.json();
        console.log("responsebody",responseboddy);
        expect(responsee.status()).toBe(200);
    })
    test.skip('TC03 Online STORE CREATION WITH ANY IMAGES',async({request,apiAuth,storecreation})=>
    {   
        const {token,username} = apiAuth;
        const {storeId}= storecreation;
        console.log('token',token);
        console.log('username',username);
        const Storeapi = new storeapi(request,token,username);
        const response = await Storeapi.uploadmainimage(imagePath,fileBuffer,storeId,token,username);
        const responsebody = await response.json();
        console.log("responsebody",responsebody);
        expect(response.status()).toBe(200);
    })
    test.skip('ALL STORE FETCH',async ({request,apiAuth})=>
    {
        const{token,username} = apiAuth;
        const Storeapi = new storeapi(request,token,username);
        const response = await Storeapi.storefetch();
        console.log(response);
        const responsebody = await response.json();
        expect(response.status()).toBe(200);
        const storeId = responsebody.map(item=>item.locationId);
        console.log(storeId);
        const fs = require('fs');
        fs.writeFileSync('./test-data/storeids.json',
            JSON.stringify(storeId,null,2)
        )

    })
    test('Store delete',async ({request,apiAuth})=>
    {
        const{token,username} = apiAuth;
        const Storeapi = new storeapi(request,token,username);
        for(const id of storeid)
        {
        const response = await Storeapi.deletestore(id);
        console.log(response);
        const responsebody = await response.json();
        console.log("id",id);
        console.log(responsebody);
        expect(response.status()).toBe(200);
        
        
        }

    })
})
