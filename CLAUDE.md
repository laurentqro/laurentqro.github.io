# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

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
