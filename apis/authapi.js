const config = require('../config/config');

class Authapi {
    constructor(request) {
        this.request = request;
    }

    async login(username, password) {
        return await this.request.post('https://app.locoldeal.com/authenticate', {
            data: {
                username,
                password
            },
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            }
        });
    }
}

module.exports = Authapi;