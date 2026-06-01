const { tavily } = require("@tavily/core");

async function discoverUrls(topic) {
    const client = tavily({
        apiKey: process.env.TAVILY_API_KEY
    });

    try {
        const response = await client.search(topic, {
            maxResults: 5
        });

        return response.results.map(
            result => result.url
        );
    } catch (error) {
        console.error("Tavily Error:", error);
        return [];
    }
}

module.exports = discoverUrls;