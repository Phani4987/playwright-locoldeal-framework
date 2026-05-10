class Partnersignin {
    constructor(page) {
        this.page = page;

        this.loginbutton = page.getByRole('button', { name: 'Log in' });
        this.partnerloginbutton = page.getByText('As a Business');
        this.email = page.getByRole('textbox', { name: 'Email or Username' });
        this.password = page.getByRole('textbox', { name: 'Password' });
        this.submit = page.getByRole('button', { name: 'Log in' });
    }

    async clickonlogindropdown() {
        await this.loginbutton.click();
    }

    async clickonpartnerlogin() {
        await this.partnerloginbutton.click();
    }

    async filllogindetails(data) {
        await this.email.fill(data.email);
        await this.password.fill(data.password);
    }

    async clickonsubmit() {
        await this.submit.click();
    }
}

module.exports = Partnersignin;