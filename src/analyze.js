const { execSync } = require("child_process");

async function analyzeResearch(content) {
    try {
        const prompt = `
You are a senior research analyst.

Provide:

1. Executive Summary
2. Key Findings
3. Recommendations

Research:

${content.substring(0, 3000)}
`;

        const result = execSync(
            `ollama run llama3`,
            {
                input: prompt,
                encoding: "utf8",
                maxBuffer: 1024 * 1024 * 20
            }
        );

        return result;
    } catch (error) {
        console.error(error);

        return error.message;
    }
}

module.exports = analyzeResearch;