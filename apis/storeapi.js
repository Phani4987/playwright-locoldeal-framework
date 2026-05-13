const path = require('path');
class storeapi
{
    constructor(request,token,username)
    {
        this.request = request;
        this.token = token;
        this.username = username;
    }
    async createstore(payload)
    {
        return await this.request.post(`https://app.locoldeal.com/storeLocation/individual`,
           {headers: {
                Authorization: `Bearer ${this.token}`,
                'Content-Type': 'application/json'
            },
            data:payload
             
        }
        )
    }
    async uploadmainimage(imagePath,fileBuffer,storeid)
    {
         return await this.request.put(`https://app.locoldeal.com/storeLocation/${storeid}/mainImage`,
            {
                headers:
                {
                    Authorization: `Bearer ${this.token}`,
                    
                },
                multipart: {
                    file: {
                        name: path.basename(imagePath),
                        mimeType: 'image/jpeg',
                        buffer: fileBuffer
                    },
                    
                }

            }
         )
    }
    async bannerimage(imagePath,fileBuffer,storeid)
    {
         return await this.request.post(`https://app.locoldeal.com/storeLocation/banner`,
            {
                headers:
                {
                    Authorization: `Bearer ${this.token}`,
                    
                },
                multipart: {
                    file: {
                        name: path.basename(imagePath),
                        mimeType: 'image/jpeg',
                        buffer: fileBuffer
                    },
                    locationId:storeid
                }

            }
         )
    }
    async storeimage(imagePath,fileBuffer,storeid)
    {
         return await this.request.put(`https://app.locoldeal.com/storeLocation/${storeid}/image`,
            {
                headers:
                {
                    Authorization: `Bearer ${this.token}`,
                    
                },
                multipart: {
                    file: {
                        name: path.basename(imagePath),
                        mimeType: 'image/jpeg',
                        buffer: fileBuffer
                    }
                }

            }
         )
    }
    async storefetch()
    {
        return await this.request.get(`https://app.locoldeal.com/storeLocationForSeller?username=${this.username}`,
            {
                "headers":{

                Authorization:`Bearer ${this.token}`
                }
            }
        )
    }
    async deletestore(storeid)
    {
        return await this.request.delete(`https://app.locoldeal.com/storeLocation/${storeid}`,
            {
                "headers":
                {
                    Authorization : `Bearer ${this.token}`
                }
            }
        )
    }
    
}
module.exports = storeapi;