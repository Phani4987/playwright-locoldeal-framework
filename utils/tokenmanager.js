class TokenManager {
    static token = null;

    static setToken(t) {
        this.token = t;
    }

    static getToken() {
        return this.token;
    }
}

module.exports = TokenManager;