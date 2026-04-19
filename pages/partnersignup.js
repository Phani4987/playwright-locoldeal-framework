class Signup
{
    constructor(page)
    {
        this.page = page;
        //locator
        this.signup = page.locator('//*[@id="signupDropdown"]');
        this.signupaspartner = page.getByRole('link',{name :'As a Business'});
        this.businessname = page.getByRole('textbox',{name :'Business Name'});
        this.businessaddress = page.getByRole('textbox',{name:' Business Address '});
        this.firstname = page.getByRole('textbox',{name:"First Name"});
        this.lastname = page.getByRole('textbox',{name:"Last Name"});
        this.username = page.getByRole('textbox',{name:"User Name"});
        this.email = page.locator('#email');
        this.phonenumber = page.getByRole('textbox',{name:"Phone Number"});
        this.password = page.locator('#password'); 
        this.conformpassword = page.locator('#confirmPassword');
        this.choosecategory = page.getByRole('combobox',{name : "Choose a Category"});
        this.checkbox = page.locator('//*[@type="checkbox"]');
        this.submit = page.getByRole('button',{name:"Create Account"});
    }



async clickonsignupbutton()
{
    await this.signup.click();
}
async clickonpartner()
{
    await this.signupaspartner.click();
}
async fillbusinessdetails(data)
{
    await this.businessname.fill(data.businessname);
    await this.businessaddress.fill(data.businessaddress);
    await this.firstname.fill(data.firstname);
    await this.lastname.fill(data.lastname);
    await this.username.fill(data.username);
    await this.email.fill(data.email);
    await this.phonenumber.fill(data.phonenumber);
    await this.password.fill(data.password);
    await this.conformpassword.fill(data.conformpassword);
}
async opendropdown()
{
    await this.choosecategory.click();
}
async selectbusinesscategory(option)
{
      await this.page.locator("select#businessCategory").selectOption(option);
    
}
async clickcheckbox()
{
    await this.checkbox.click();
}
async clicksubmit()
{
    await this.submit.click();
}

}
module.exports = Signup;