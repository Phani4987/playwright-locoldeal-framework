class CouponApi {
    constructor(request, token, username) {
        this.request = request;
        this.token = token;
        this.username = username;
    }

    async createcoupon(payload) {

        return await this.request.post('https://app.locoldeal.com/coupons', {
            headers: {
                Authorization: `Bearer ${this.token}`
            },

            multipart: {
                username: this.username,
                jsondata: JSON.stringify(payload)
            }
        });
    }
    async getallcouponid(pagecount)
    {
         return await this.request.get(`https://app.locoldeal.com/coupons?username=${this.username}&page=${pagecount}&size=10`,
           { headers:
            {
                Authorization : `Bearer ${this.token}`
            }
        }
         )
    }
    async deletecoupons(couponid)
    {
        return await this.request.delete(`https://app.locoldeal.com/coupons/${couponid}?username=${this.username}`,
           { headers:
            {
                Authorization : `Bearer ${this.token}`
            }
        }
         )
    }
}

module.exports = CouponApi;