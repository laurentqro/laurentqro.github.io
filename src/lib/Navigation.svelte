<script>
  import logo from '$lib/assets/logo.svg';
  import * as m from '$lib/paraglide/messages';
  import { locales, localizeHref, getLocale } from '$lib/paraglide/runtime';
  import { page } from '$app/stores';

  function handleAnchorClick(event) {
    event.preventDefault();
    const link = event.currentTarget;
    const anchorId = new URL(link.href).hash.replace('#', '');
    const anchor = document.getElementById(anchorId);

    if (anchor) {
      // Add offset for navigation spacing and use slower scrolling
      const offsetTop = anchor.offsetTop - 80;

      // Custom smooth scroll with slower timing
      const startPosition = window.pageYOffset;
      const distance = offsetTop - startPosition;
      const duration = 1200; // 1.2 seconds
      let start = null;

      function animation(currentTime) {
        if (start === null) start = currentTime;
        const timeElapsed = currentTime - start;
        const run = ease(timeElapsed, startPosition, distance, duration);
        window.scrollTo(0, run);
        if (timeElapsed < duration) requestAnimationFrame(animation);
      }

      // Easing function for smoother animation
      function ease(t, b, c, d) {
        t /= d / 2;
        if (t < 1) return c / 2 * t * t + b;
        t--;
        return -c / 2 * (t * (t - 2) - 1) + b;
      }

      requestAnimationFrame(animation);
    }
  }
</script>

<nav class="nav">
  <div class="nav-container">
    <div class="logo">
      <img src={logo} alt="Laurent Curau Logo" class="logo-icon" />
      <span class="logo-text">Laurent Curau</span>
    </div>
    <div class="nav-links">
      <a href="#services" onclick={handleAnchorClick}>{m.nav_services()}</a>
      <a href="#pricing" onclick={handleAnchorClick}>{m.nav_pricing()}</a>

      <!-- Language Switcher -->
      <div class="language-switcher">
        {#each locales as locale}
          <a href={localizeHref($page.url.pathname, { locale })}
             class="lang-button"
             class:active={getLocale() === locale}
             title={locale === 'fr' ? 'Français' : 'English'}
             data-sveltekit-reload>
            {locale.toUpperCase()}
          </a>
        {/each}
      </div>

      <a href="#contact" class="cta-button" onclick={handleAnchorClick}>{m.nav_contact()}</a>
    </div>
  </div>
</nav>

<style>
  .nav {
    background: rgba(15, 15, 26, 0.85);
    backdrop-filter: blur(12px);
    -webkit-backdrop-filter: blur(12px);
    padding: 1rem 0;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    z-index: 100;
    border-bottom: 1px solid rgba(102, 126, 234, 0.1);
  }

  .nav-container {
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 2rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .logo {
    display: flex;
    align-items: center;
    gap: 0.75rem;
  }

  .logo-icon {
    width: 32px;
    height: 32px;
    filter: brightness(0) invert(1);
  }

  .logo-text {
    font-family: 'Plus Jakarta Sans', sans-serif;
    font-size: 1.5rem;
    font-weight: 700;
    color: #e2e8f0;
  }

  .nav-links {
    display: flex;
    gap: 2rem;
    align-items: center;
  }

  .nav-links a {
    color: rgba(255, 255, 255, 0.5);
    text-decoration: none;
    font-weight: 500;
    font-size: 0.9rem;
    transition: color 0.2s;
  }

  .nav-links a:hover {
    color: #e2e8f0;
  }

  .cta-button {
    background: linear-gradient(135deg, #667eea 0%, #0891b2 100%);
    color: white !important;
    padding: 0.5rem 1rem;
    border-radius: 0.5rem;
    transition: all 0.25s ease;
    font-family: 'JetBrains Mono', monospace;
    font-size: 0.85rem;
  }

  .cta-button:hover {
    transform: translateY(-1px);
    color: white !important;
    box-shadow: 0 0 20px rgba(102, 126, 234, 0.3);
  }

  .language-switcher {
    display: flex;
    align-items: center;
    gap: 0.25rem;
    margin: 0 1rem;
  }

  .lang-button {
    background: none;
    border: none;
    color: rgba(255, 255, 255, 0.4);
    font-weight: 500;
    cursor: pointer;
    padding: 0.25rem 0.5rem;
    border-radius: 0.25rem;
    transition: all 0.2s ease;
    text-decoration: none;
    font-size: 0.875rem;
    font-family: 'JetBrains Mono', monospace;
  }

  .lang-button:hover {
    background-color: rgba(102, 126, 234, 0.1);
    color: #e2e8f0;
  }

  .lang-button.active {
    background-color: rgba(102, 126, 234, 0.2);
    color: #a5b4fc;
    font-weight: 700;
  }

  .lang-button.active:hover {
    background-color: rgba(102, 126, 234, 0.3);
  }

  @media (max-width: 768px) {
    .nav-links {
      display: none;
    }
  }
</style>
