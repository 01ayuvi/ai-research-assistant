# AI Research Assistant

An AI-powered research automation tool built with Node.js, Firecrawl, and Ollama (Llama 3).

The application automatically collects information from multiple web sources, generates research reports, and produces AI-powered analysis with executive summaries and recommendations.

## Features

* Topic-based research generation
* Multi-source web scraping using Firecrawl
* Automatic Markdown report generation
* Local AI analysis using Llama 3 (Ollama)
* Executive summaries
* Key findings extraction
* Recommendations generation
* Command-line interface (CLI)

## Architecture

User Topic
↓
Topic Router
↓
Relevant URLs
↓
Firecrawl Scraper
↓
Research Report
↓
Llama 3 Analysis
↓
Executive Summary
↓
Recommendations

## Tech Stack

* Node.js
* Firecrawl API
* Ollama
* Llama 3
* JavaScript
* Git/GitHub

## Project Structure

```text
ai-research-assistant/
│
├── reports/
│   ├── ai-coding-assistants.md
│   ├── database-migration-tools.md
│   └── database-migration-tools-analysis.md
│
├── src/
│   ├── search.js
│   └── analyze.js
│
├── app.js
├── .env
├── package.json
└── README.md
```

## Installation

### Clone Repository

```bash
git clone https://github.com/01ayuvi/ai-research-assistant.git
cd ai-research-assistant
```

### Install Dependencies

```bash
npm install
```

### Configure Environment

Create a `.env` file:

```env
FIRECRAWL_API_KEY=your_firecrawl_api_key
```

### Install Ollama

```bash
winget install Ollama.Ollama
```

### Download Llama 3

```bash
ollama pull llama3
```

## Usage

### Database Migration Research

```bash
node app.js "database migration tools"
```

### AI Coding Assistants Research

```bash
node app.js "AI coding assistants"
```

## Example Output

The application generates:

* Raw research report (`.md`)
* AI analysis report (`-analysis.md`)

Example analysis sections:

* Executive Summary
* Key Findings
* Tool Comparison
* Recommendations
* Risks and Limitations

## Current Limitations

* Uses predefined source mappings
* Limited topic coverage
* No automatic web search yet

## Future Enhancements

* Automatic URL discovery
* Tavily Search integration
* PDF export
* Research history tracking
* Confidence scoring
* Contradiction detection

## Resume Highlights

* Built an AI-powered research assistant using Node.js, Firecrawl, and Ollama.
* Automated web research, content extraction, report generation, and AI-driven analysis.
* Integrated a local LLM (Llama 3) for executive summaries and recommendations.
* Designed an end-to-end research pipeline from data collection to insight generation.
