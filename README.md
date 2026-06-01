# AI Research Agent v1.0

An AI-powered research platform that automatically discovers web sources, extracts content, generates research reports, and produces AI-driven analysis using a local LLM.

## Features

* Dynamic topic discovery using Tavily Search
* Multi-source web scraping with Firecrawl
* AI-powered report generation using Ollama and Llama 3.2
* Research history tracking
* Browser-based dashboard
* Clickable report viewer
* Markdown report generation
* Styled HTML report rendering
* Local-first architecture (no paid LLM required)

## Architecture

User Topic

↓

Web Dashboard (Express)

↓

Tavily Search

↓

Source Discovery

↓

Firecrawl Scraping

↓

Research Report

↓

Ollama API (Llama 3.2)

↓

AI Analysis

↓

Research History + Report Viewer

## Tech Stack

* Node.js
* Express.js
* Tavily API
* Firecrawl API
* Ollama
* Llama 3.2
* JavaScript
* Git / GitHub

## Key Features Implemented

### Research Engine

* Automatic source discovery
* Dynamic topic support
* Multi-source scraping
* AI-generated analysis

### Dashboard

* Research topic submission
* Research history
* Clickable report navigation
* Browser-based report viewing

### AI Analysis

* Executive Summary
* Key Findings
* Tool Comparison
* Recommendations
* Risks and Limitations
* Confidence Score

## Example Topics

```bash
node app.js "vector databases"

node app.js "performance testing tools"

node app.js "database migration validation"
```

## Future Enhancements

* PDF export
* Research statistics dashboard
* Report download support
* Multi-agent research workflow

## Resume Highlights

* Built a full-stack AI Research Agent using Node.js, Express, Tavily, Firecrawl, and Ollama.
* Automated source discovery, web scraping, report generation, and AI analysis.
* Integrated a local LLM (Llama 3.2) through the Ollama API.
* Developed a browser-based dashboard with research history and report viewing capabilities.
