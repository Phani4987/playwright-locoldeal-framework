const Partnersignin = require('../pages/partnersignin');

class Partnersigninactions {
    constructor(page) {
        this.partnersignin = new Partnersignin(page);
    }

    async dosignin(data) {
        await this.partnersignin.clickonlogindropdown();
        await this.partnersignin.clickonpartnerlogin();
        await this.partnersignin.filllogindetails(data);
        await this.partnersignin.clickonsubmit();
    }
}

module.exports = Partnersigninactions;