const { expect } = require('@playwright/test');

class Assertions {

    async verifySignupError(page, errorText) {

        const alertPopup = page.locator('[role="alert"]');

        await expect(alertPopup).toBeVisible({ timeout: 15000 });

        await expect(alertPopup).toContainText(errorText);
    }

    async verifySignupSuccess(page, successText) {

        const headingLocator = page.getByRole('heading', { name: successText });

        await expect(headingLocator).toBeVisible({ timeout: 15000 });
    }

    async verifysigninsuccess(page, successText) {

        const buttonLocator = page.getByRole('button', { name: successText });

        await expect(buttonLocator).toBeVisible({ timeout: 15000 });
    }
}

module.exports = new Assertions();