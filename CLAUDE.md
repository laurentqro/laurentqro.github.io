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
npm run build    # Build for production (outputs to build/)
npm run preview  # Preview production build locally
npm run format   # Format code with Prettier
npm run lint     # Check code formatting
```

## Architecture

This is a static SvelteKit site for a Fractional CTO services landing page, deployed to GitHub Pages.

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
- The trailing slash setting is required for GitHub Pages to serve `/en/` correctly (generates `en/index.html` instead of `en.html`)
- Deployment via GitHub Actions on push to `master` branch

### Component Structure

All page sections are in `src/lib/` as Svelte components (Hero, Personal, Problem, Solution, Services, Pricing, Target, Contact, Process, Footer). The main page at `src/routes/+page.svelte` composes them.

### Brand Colors

- Primary Blue: `#667eea`
- Accent Teal: `#0891b2`
