# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## docs/ knowledge bundle (OKF)

`docs/` is an [OKF v0.1](https://github.com/GoogleCloudPlatform/knowledge-catalog/blob/main/okf/SPEC.md) bundle, registered as `site:` in the personal catalog.

- Every `docs/**/*.md` (except reserved `index.md` and `log.md`) starts with YAML frontmatter. Required: `type` and `description` (one sentence). Recommended: `status` (`active` | `shipped` | `superseded` | `abandoned`), `timestamp` (date of last substantive update), and `superseded_by` (bundle-absolute link) when superseded.
- Type vocabulary: Plan, Copy. Add a new type only when none fits.
- Cross-link with bundle-absolute markdown links: `/plans/case-study-expanded-copy.md` means `docs/plans/case-study-expanded-copy.md`.
- Every directory with concept docs has an `index.md` listing each doc with a one-line description; `docs/log.md` records changes newest-first under `## YYYY-MM-DD` headings.
- This repo is public. Gitignored outreach files in `docs/plans/` (prospect lists, email drafts) are not part of the bundle: do not list them, link them or commit them. `bin/docs_lint` skips them.
- After any session that changes knowledge under `docs/`: update the touched docs' frontmatter, the directory's `index.md`, and `docs/log.md`, then run `bin/docs_lint`. Supersede, never delete.

## Commands

```bash
npm run dev      # Start development server (http://localhost:5173)
npm run build    # Build for production (outputs to build/), then write the agent files
npm run deploy   # Build, then deploy to Cloudflare with wrangler
npm run preview  # Preview production build locally
npm run format   # Format code with Prettier
npm run lint     # Check code formatting
```

## Architecture

This is a static SvelteKit site that presents Laurent Curau's offer (AI integration for companies, plus sites and tools), deployed to Cloudflare Workers as static assets with a small Worker in front of the pages.

### Internationalization (Paraglide.js)

- **Base locale**: French (`fr`) at `/`
- **Secondary locale**: English (`en`) at `/en/`
- **Translation files**: `messages/fr.json` and `messages/en.json`
- **Generated runtime**: `src/lib/paraglide/` (auto-generated, do not edit)

To use translations in components:
```svelte
<script>
  import * as m from '$lib/paraglide/messages';
</script>
<h1>{m.hero_title()}</h1>
```

The `src/hooks.ts` reroute hook strips locale prefixes from URLs so SvelteKit routes work with a single `+page.svelte`.

### Static Site Generation

- `src/routes/+layout.ts` exports `prerender = true` and `trailingSlash = 'always'`
- The trailing slash setting generates `en/index.html` instead of `en.html`, so every page URL ends with a slash
- Deployment is manual: `npm run deploy`. A push to `master` deploys nothing.

### Hosting and agent files (Cloudflare)

- `wrangler.jsonc` serves `build/` as static assets on the route `laurentcurau.com/*`. The DNS records still point to GitHub Pages, which holds an old build: removing the route sends traffic back there.
- `worker/index.js` runs before the HTML pages only (`run_worker_first` in `wrangler.jsonc`). It answers `Accept: text/markdown` with the page's Markdown copy, adds the `Link` headers, and serves a read-only MCP server at `/mcp`. If it throws, it serves the static page. A new top-level page must be added to `run_worker_first`.
- `scripts/agent-files.js` runs after `vite build`. It writes an `index.md` beside each page, `pages.json` for the MCP server, and the Agent Skills index with its digest. An element with `data-markdown="skip"` is left out of the Markdown.
- `static/.well-known/` holds the agent manifests (API catalog, MCP server card, ARD, Poppy, the skill). `static/_headers` sets their content types; `static/_redirects` holds the server redirects.
- Publish only true things in the manifests. The site has no login, so there is no OAuth metadata.
- The free Workers plan allows 100,000 Worker runs per day. Past that, the HTML pages return 429.

### Component Structure

- `src/routes/+layout.svelte` renders `Header` (sticky, with the FR / EN language links and the WhatsApp button), the page, then `Footer`. It also holds the site-wide meta tags and JSON-LD.
- Pages: home (`/`), `/about`, `/faq`, `/portfolio`, `/case-study/*` (all use `src/lib/CaseStudy.svelte`), `/privacy` and `/terms` (both use `src/lib/LegalPage.svelte`).
- `/services` and `/case-study/afida` are retired. `static/_redirects` answers them with a 301. Their `+page.js` still redirects for client-side navigation.
- Shared layout classes (`.frame`, `.canvas`, `.sheet`, `.rows`, `.title`, `.link`) and the design tokens live in `src/app.css`.

### Design tokens

The site is dark. All colours are CSS variables in `src/app.css`: page `#0A0F10`, canvas `#101A1B`, sheet `#1A2728`, ink `#EDF2F2`, teal `#4CC4BF` (links), teal fill `#008080` (the WhatsApp button), rule `#2B3B3C`, muted `#96A5A7`. Do not hard-code a colour in a component. The typeface is Inter.
