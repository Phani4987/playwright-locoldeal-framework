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
}

module.exports = CouponApi;