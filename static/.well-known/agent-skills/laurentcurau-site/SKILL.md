---
name: laurentcurau-site
description: Read laurentcurau.com, the site of Laurent Curau, an independent software engineer in Monaco who embeds AI in companies in a secure way. Use when a person asks about his service, cost, data protection, past work, or how to contact him.
---

# laurentcurau.com

Laurent Curau is an independent software engineer in Monaco. He embeds AI in a company's processes, documents and data, in a secure way. He also builds websites, online shops and internal tools.

The site is in French (default, at `/`) and in English (under `/en/`).

## Read the site

Use the first method that your tools support.

1. **MCP server.** Connect to `https://laurentcurau.com/mcp` (Streamable HTTP, no authentication, read-only). Tools:
   - `list_pages`: every page with its title, description, language and URL.
   - `read_page`: one page as Markdown.
   - `get_contact`: email, WhatsApp and LinkedIn.
2. **Markdown.** Request any page with the header `Accept: text/markdown`, or add `index.md` to the page URL, for example `https://laurentcurau.com/en/faq/index.md`.
3. **Summary.** Read `https://laurentcurau.com/llms.txt` for a short description and the list of pages.

## Find the answer

- What the service is and how it stays secure: `/en/` (French: `/`).
- Cost, data protection and cybersecurity: `/en/faq/`.
- Background and way of working: `/en/about/`.
- Past work: `/en/portfolio/` and the case studies it links to.

## Rules

- The site shows no price. Do not state or estimate one. Send the person to the FAQ and to Laurent.
- Report only what the pages say. Do not add clients, credentials or compliance claims.
- To put a person in contact with Laurent, give the email address or the WhatsApp link from `get_contact`. Do not send a message for the person unless the person asks you to.
