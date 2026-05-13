const { test:base,expect } = require('@playwright/test'); 
const authapi = require('../apis/authapi');
const testdata = require('../test-data/partnersignindata.json');
const { use } = require('react');
const { throws } = require('node:assert');
const test = base.extend(
    {
        Apiauth : async({request},use)=>
        {
            const auth = new authapi(request);
            const response = await auth.login(
                testdata.validLogin.username,
                testdata.validLogin.password
            )
            const responsebody = await response.json();
            const token = responsebody.token;
            const username = responsebody.username;
            if(!token) throw new Error("Token not found");
            if(!username) throw new Error("email not found");
            
                 console.log("token captured", token);
                 console.log("username captured", username);
                 await use({token,username});
            

        }
        
    }
)
module.exports = {test,expect};