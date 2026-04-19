const Signup = require('../pages/partnersignup');
class SignupActions
{
    constructor(page)
    {
        this.signup = new Signup(page);
    }
    async dopartnersignup(data)
    {
        await this.signup.clickonsignupbutton();
        await this.signup.clickonpartner();
        console.log("enter business details")
        await this.signup.fillbusinessdetails(data);
        await this.signup.opendropdown();
        await this.signup.selectbusinesscategory(data.category);
        await this.signup.clickcheckbox();
        await this.signup.clicksubmit();
    }
}
module.exports = SignupActions;
