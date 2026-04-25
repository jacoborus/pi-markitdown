# pi-markitdown

A [pi](https://github.com/mariozechner/pi-coding-agent) extension that uses Microsoft's [MarkItDown](https://github.com/microsoft/markitdown) to convert files and URLs to Markdown.

## Features

- **Advanced Web-to-Markdown**: Converts web pages to clean, readable Markdown.
- **Office Document Support**: Converts PDF, Docx, Xlsx, Pptx, and more.
- **Smart Skill Integration**: Includes a Pi Skill that teaches the agent to automatically prefer `markitdown` for structured file conversion.
- **Preserves Structure**: High-fidelity conversion that maintains tables, headings, and formatting from complex documents.

## How it Works

### The Tool
The extension registers a `markitdown` tool that takes a `source` (URL or local path) and runs the Microsoft MarkItDown CLI via a shell command. It streams updates back to the Pi interface as the conversion progresses.

### The Skill
By bundling a Pi Skill, this package provides context to the LLM. The agent doesn't just "have" the tool; it "knows" that this tool is the best choice for handling specific file types or URLs, making the integration feel native and proactive.

## Prerequisites

This extension requires the `markitdown` CLI tool to be installed on your system. It is a Python-based tool.

```bash
pip install markitdown
```

## Installation

You can install this package directly into pi:

```bash
pi install git:github.com/jacoborus/pi-markitdown
```

Or from npm (if published):

```bash
pi install npm:pi-markitdown
```

## Usage

Once installed, the agent will automatically use the `markitdown` tool whenever you provide a URL or a file path that needs conversion.

You can also explicitly ask the agent:
> "Convert https://example.com to markdown using markitdown"
> "Read document.pdf and give me a summary"

## Development

### Setup
```bash
npm install
```

### Type Checking
```bash
npm run typecheck
```

## License
MIT
