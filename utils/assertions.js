const { expect } = require('@playwright/test');

class Assertions {

    async verifySignupError(page, errorText) {
        const errorLocator = page.getByText(errorText);

        await expect(errorLocator).toBeVisible({ timeout: 10000 });

        const actualError = (await errorLocator.textContent()).trim();

        console.log("❌ Actual Error Message:", actualError);

        // normalize both sides (VERY IMPORTANT in real frameworks)
        expect(actualError.trim()).toContain(errorText.trim());
    }


    async verifySignupSuccess(page, successText) {

        const headingLocator = page.getByRole('heading', { name: successText });

        await expect(headingLocator).toBeVisible({ timeout: 15000 });

        const actualHeading = (await headingLocator.textContent()).trim();

        console.log("✅ Actual Success Heading:", actualHeading);

        expect(actualHeading).toBe(successText.trim());
    }
}

module.exports = new Assertions();
