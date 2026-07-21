# Laurent Curau - Fractional CTO Services

A modern, professional website showcasing fractional CTO services built with SvelteKit and deployed on GitHub Pages.

## 🚀 Live Site

Visit: [https://laurentcurau.com](https://laurentcurau.com)

## 📋 Overview

This website serves as a professional landing page for Laurent Curau's fractional CTO services, targeting startups and growing companies that need senior technical leadership without the full-time commitment.

## ✨ Features

### 🎨 Design & UX

- **Modern gradient design** with blue-to-teal color scheme
- **Responsive layout** optimized for all devices
- **Smooth scrolling navigation** with custom 1.2-second animations
- **Fixed white navigation bar** with professional styling
- **Personal branding** with custom logo integration

### 📱 Components

- **Hero Section** - Compelling value proposition and call-to-action
- **Personal Message** - Human touch with profile photo and personal story
- **Problem/Solution** - Clear articulation of client pain points and solutions
- **Services** - Detailed breakdown of offerings
- **Pricing** - Transparent pricing structure
- **Target Audience** - Who benefits from the services
- **Contact Form** - Professional contact integration
- **Process** - How the service works
- **Footer** - Contact information and legal links

### 🌍 Internationalization

- **Bilingual support** - French (default) and English
- **Paraglide.js** - Type-safe i18n with automatic locale detection
- **URL-based locales** - `/` for French, `/en/` for English
- **Language switcher** - Easy locale switching in navigation
- **SEO-friendly** - Proper `hreflang` tags for multilingual SEO

### 🔧 Technical Features

- **SvelteKit** - Modern web framework
- **Static Site Generation** - Fast loading and SEO-friendly
- **GitHub Pages** deployment with custom domain
- **SEO optimized** with comprehensive meta tags
- **Social media previews** with Open Graph and Twitter Cards
- **Automatic copyright year** updates
- **Professional favicon** and branding

## 🛠 Technology Stack

- **Framework**: SvelteKit
- **Internationalization**: Paraglide.js (inlang)
- **Styling**: Custom CSS
- **Build Tool**: Vite
- **Deployment**: GitHub Pages with GitHub Actions
- **Domain**: Custom domain (laurentcurau.com)

## 📦 Project Structure

```
src/
├── lib/
│   ├── assets/          # Images, icons, and static assets
│   ├── paraglide/       # Generated i18n runtime and messages
│   ├── Contact.svelte   # Contact form component
│   ├── Footer.svelte    # Footer with contact info
│   ├── Hero.svelte      # Main hero section
│   ├── Navigation.svelte # Fixed navigation bar with language switcher
│   ├── Personal.svelte  # Personal message section
│   ├── Pricing.svelte   # Pricing information
│   ├── Problem.svelte   # Problem identification
│   ├── Process.svelte   # Service process
│   ├── Services.svelte  # Service offerings
│   ├── Solution.svelte  # Solution presentation
│   └── Target.svelte    # Target audience
├── routes/
│   ├── +layout.svelte   # Main layout with SEO meta tags
│   ├── +layout.ts       # Prerender and trailing slash config
│   ├── +page.js         # Page configuration
│   └── +page.svelte     # Main page component
├── hooks.ts             # SvelteKit reroute hook for i18n
└── app.css              # Global styles
messages/
├── fr.json              # French translations
└── en.json              # English translations
project.inlang/
└── settings.json        # Paraglide configuration
```

## 🚀 Development

### Prerequisites

- Node.js (v20+)
- npm

### Setup

```bash
# Clone the repository
git clone https://github.com/laurentqro/laurentqro.github.io.git
cd laurentqro.github.io

# Install dependencies
npm install

# Start development server
npm run dev
```

### Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run format` - Format code with Prettier
- `npm run lint` - Check code formatting

## 🌐 Deployment

The site automatically deploys to GitHub Pages when changes are pushed to the `master` branch using GitHub Actions.

### Deployment Configuration

- **Source**: GitHub Actions workflow (`.github/workflows/pages.yml`)
- **Build**: SvelteKit static adapter
- **Output**: `build/` directory
- **Domain**: Custom domain configured via CNAME

## 📊 SEO & Social Media

### SEO Features

- Comprehensive meta tags (title, description, keywords)
- Open Graph tags for social media sharing
- Twitter Card integration
- Structured data (JSON-LD) for search engines
- Canonical URLs
- Proper heading hierarchy

### Social Media Preview

- Custom logo as preview image (`logo.png`)
- Optimized dimensions (1200x630px)
- Professional branding across all platforms

## 🎨 Brand Guidelines

### Colors

- **Primary Blue**: `#667eea`
- **Accent Teal**: `#0891b2`
- **Background**: White with subtle gradients
- **Text**: Professional dark grays

### Typography

- Clean, modern sans-serif fonts
- Hierarchical heading structure
- Readable line heights and spacing

## 📧 Contact Information

**Laurent Curau**  
Fractional CTO Services  
10, rue du Gabian  
98000, Monaco 🇲🇨

## 📄 License

This project is private and proprietary to Laurent Curau.

---

_Built with ❤️ using SvelteKit_
