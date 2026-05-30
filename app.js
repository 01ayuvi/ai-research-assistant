require("dotenv").config();

const FirecrawlApp = require("firecrawl").default;
const fs = require("fs");

const topic = process.argv[2];

if (!topic) {
    console.log('Usage: node app.js "topic"');
    process.exit(1);
}

const app = new FirecrawlApp({
    apiKey: process.env.FIRECRAWL_API_KEY,
});

const urls = [
    "https://docs.anthropic.com/en/docs/claude-code",
    "https://github.com/features/copilot",
    "https://cursor.com",
    "https://windsurf.com"
];

async function research() {
    console.log(`Researching: ${topic}\n`);

    let report = `# Research Report\n\n`;
    report += `Topic: ${topic}\n\n`;

    for (const url of urls) {
        console.log(`Scraping: ${url}`);

        try {
            const result = await app.scrapeUrl(url);

            const title =
                result.metadata?.title || "Unknown";

            report += `## ${title}\n\n`;

            report +=
                (result.markdown || "")
                    .substring(0, 3000);

            report += "\n\n---\n\n";

            console.log(`Success: ${title}`);
        } catch (err) {
            console.log(`Failed: ${url}`);
        }
    }

    const filename =
        `reports/${topic.replace(/\s+/g, "-").toLowerCase()}.md`;

    fs.writeFileSync(filename, report, "utf8");

    console.log(`\nSaved: ${filename}`);
}

research();