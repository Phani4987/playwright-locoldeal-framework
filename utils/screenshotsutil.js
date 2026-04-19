class Screenshot {
    async takescreenshot(page, name) {

        const now = new Date();

        const timestamp = now.toLocaleString('en-IN', {
            timeZone: 'Asia/Kolkata',
            year: 'numeric',
            month: '2-digit',
            day: '2-digit',
            hour: '2-digit',
            minute: '2-digit',
            second: '2-digit',
            hour12: false
        }).replace(/[/:, ]/g, '-');

        const path = `reports/screenshots/${name}-${timestamp}.png`;

        await page.screenshot({
            path,
            fullPage: true
        });

        return path;
    }
}

module.exports = new Screenshot();