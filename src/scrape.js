require("dotenv").config();

const FirecrawlApp = require("firecrawl").default;
const saveReport = require("./saveReport");

const app = new FirecrawlApp({
    apiKey: process.env.FIRECRAWL_API_KEY,
});

async function testScrape() {
    try {
        const result = await app.scrapeUrl("https://firecrawl.dev");

        saveReport(
            "reports/firecrawl-test.md",
            result.markdown
        );

        console.log("Report saved.");
    } catch (error) {
        console.error(error);
    }
}

testScrape();