
class coupondeleteapi
{
      constructor(request,token,username,couponid)
      {
        this.request = request;
        this.token = token;
        this.username = username;
        this.couponid = couponid;
      }
    async coupondelete()   
    {
        const url = `https://app.locoldeal.com/coupons/${this.couponid}?username=${this.username}`;
        console.log(url);
        return await this.request.delete(`https://app.locoldeal.com/coupons/${this.couponid}?username=${this.username}`,{
            headers:
            {
                Authorization: `Bearer ${this.token}`,accept: 'application/json',
                origin: 'https://vendors.locoldeal.com',
                referer: 'https://vendors.locoldeal.com/'
                
            },
            data:{
                id: 3950,
                  username: this.username
            }
            
        }

        )
    }
    
} module.exports = coupondeleteapi;