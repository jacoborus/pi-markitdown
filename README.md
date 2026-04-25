# pimarkitdown

A [pi](https://github.com/mariozechner/pi-coding-agent) extension that uses Microsoft's [MarkItDown](https://github.com/microsoft/markitdown) to convert files and URLs to Markdown.

## Features

- **URL Conversion**: Converts web pages to clean Markdown.
- **File Conversion**: Supports PDF, Docx, Xlsx, Pptx, and more.
- **Seamless Integration**: Integrated as a pi tool and guided by a built-in skill.

## Prerequisites

This extension requires the `markitdown` CLI tool to be installed on your system. It is a Python-based tool.

```bash
pip install markitdown
```

## Installation

You can install this package directly into pi:

```bash
pi install git:github.com/youruser/pimarkitdown
```

Or from npm (if published):

```bash
pi install npm:pimarkitdown
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
