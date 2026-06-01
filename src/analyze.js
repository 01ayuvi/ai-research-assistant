const axios = require("axios");

async function analyzeResearch(content) {

    const prompt = `
You are a senior technology research analyst.

Generate a professional report in Markdown.

Use:

# Title
## Executive Summary
## Key Findings
## Tool Comparison
## Recommendations
## Risks and Limitations
## Confidence Score

Research:

${content.substring(0, 1500)}
`;

    try {

        const response =
            await axios.post(
                "http://localhost:11434/api/generate",
                {
                    model: "llama3.2:3b",
                    prompt: prompt,
                    stream: false
                }
            );

        return response.data.response;

    } catch (error) {

        console.error(error);

        return "Analysis failed.";

    }

}

module.exports = analyzeResearch;