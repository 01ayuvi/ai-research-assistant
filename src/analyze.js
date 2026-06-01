const { execSync } = require("child_process");

async function analyzeResearch(content) {
    try {
        const prompt = `
You are a senior technology research analyst.

Generate a professional report with:

1. Executive Summary
2. Key Findings
3. Tool Comparison
4. Pros and Cons of each major tool
5. Recommendations for:
   - Small Teams
   - Startups
   - Enterprises
6. Risks and Limitations
7. Confidence Score (0-100)

Research:

${content.substring(0, 1500)}
`;

        const result = execSync(
    `ollama run llama3.2:3b`,
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