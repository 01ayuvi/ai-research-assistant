async function getUrlsForTopic(topic) {
    const topicUrls = {
        "ai coding assistants": [
            "https://docs.anthropic.com/en/docs/claude-code",
            "https://github.com/features/copilot",
            "https://cursor.com",
            "https://windsurf.com"
        ],

        "database migration tools": [
            "https://aws.amazon.com/dms/",
            "https://www.liquibase.com/",
            "https://documentation.red-gate.com/fd",
            "https://airbyte.com/"
        ]
    };

    return topicUrls[topic.toLowerCase()] || [];
}

module.exports = getUrlsForTopic;