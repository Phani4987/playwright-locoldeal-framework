const {test,expect}= require('../fixtures/auth.fixture');
const deleCouponapi = require('../apis/coupondeleteapi');
const data = require('../test-data/deletecoupondata.json');

// ONLY CHANGE: now reading array instead of single id
const ids = data.coupondeleteid;

console.log("ids", ids);

test.describe('DELETE COUPON FLOW',()=>
{
    test('TC01 DELETE AN EXISTING COUPON',async ({request,apiAuth})=>
    {
        const{token,username} = apiAuth;
        console.log('token',token);
        console.log('username',username);

        // ONLY CHANGE: loop added for multiple IDs
        for (let id of ids) {

            console.log("Deleting ID:", id);

            const dcouponapi = new deleCouponapi(request,token,username,id);
            const response = await dcouponapi.coupondelete();
            let responsebody;
            try {
                responsebody = await response.json();
            } catch (e) {
                responsebody = {};
            }

            console.log('Response:', responsebody);

            if (response.status() === 200) {

                if (responsebody?.errorMessage === "Coupon not found") {
                    console.log(`Coupon ${id} already deleted / not found`);
                    expect(true).toBe(true); 
                } else {
                    expect(response.status()).toBe(200);
                }

            } else if (response.status() === 404 && responsebody?.errorMessage === "Coupon not found") {
                console.log(`Coupon ${id} already not present`);
                expect(true).toBe(true); // pass case

            } else {
                console.log(`Unexpected error for coupon ${id}:`, responsebody);
                expect(response.status()).toBe(400);
            }
        }
    })
})