<script>
  import * as m from '$lib/paraglide/messages';
  import { localizeHref } from '$lib/paraglide/runtime';

  const services = [
    { title: m.service_1_title(), icon: 'globe' },
    { title: m.service_2_title(), icon: 'bag' },
    { title: m.service_3_title(), icon: 'app' },
    { title: m.service_4_title(), icon: 'tools' }
  ];
</script>

<section id="services" class="services">
  <div class="container">
    <h2 class="section-title">{m.services_section_title()}</h2>

    <ul class="badges">
      {#each services as s}
        <li class="badge">
          <span class="badge-circle" aria-hidden="true">
            {#if s.icon === 'globe'}
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round">
                <circle cx="12" cy="12" r="9"/>
                <path d="M3 12h18"/>
                <path d="M12 3a13.5 13.5 0 0 1 0 18"/>
                <path d="M12 3a13.5 13.5 0 0 0 0 18"/>
              </svg>
            {:else if s.icon === 'bag'}
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round">
                <path d="M5 8h14l-1 12.5a1.5 1.5 0 0 1-1.5 1.5h-9A1.5 1.5 0 0 1 6 20.5L5 8z"/>
                <path d="M8.5 8V6a3.5 3.5 0 0 1 7 0v2"/>
              </svg>
            {:else if s.icon === 'app'}
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round">
                <rect x="3" y="4" width="18" height="16" rx="2"/>
                <path d="M3 9h18"/>
                <path d="M9 14l-1.5 1.5L9 17"/>
                <path d="M15 14l1.5 1.5L15 17"/>
              </svg>
            {:else if s.icon === 'tools'}
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round">
                <rect x="3" y="4" width="18" height="6" rx="1.5"/>
                <rect x="3" y="14" width="18" height="6" rx="1.5"/>
                <path d="M7 7h.01"/>
                <path d="M7 17h.01"/>
              </svg>
            {/if}
          </span>
          <span class="badge-label">{s.title}</span>
        </li>
      {/each}
    </ul>

    <div class="cta-row">
      <a href={localizeHref('/services')} class="all-services">
        {m.services_section_cta()}
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true">
          <line x1="5" y1="12" x2="19" y2="12"/>
          <polyline points="12,5 19,12 12,19"/>
        </svg>
      </a>
    </div>
  </div>
</section>

<style>
  .services {
    padding: 7rem 0;
    background: #141422;
  }

  .container {
    max-width: 1100px;
    margin: 0 auto;
    padding: 0 2rem;
  }

  .section-title {
    font-family: 'Plus Jakarta Sans', sans-serif;
    font-size: clamp(2rem, 4vw, 3rem);
    font-weight: 800;
    color: #e2e8f0;
    line-height: 1.1;
    letter-spacing: -0.02em;
    margin: 0 0 4rem;
    text-align: center;
  }

  .badges {
    list-style: none;
    padding: 0;
    margin: 0 0 4rem;
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 2rem;
  }

  .badge {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1.25rem;
    text-align: center;
  }

  .badge-circle {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    width: 7rem;
    height: 7rem;
    border-radius: 50%;
    border: 2px solid rgba(165, 180, 252, 0.5);
    color: rgba(165, 180, 252, 1);
    background: rgba(102, 126, 234, 0.06);
    transition: border-color 0.25s ease, background 0.25s ease;
  }

  .badge-circle svg {
    width: 2.75rem;
    height: 2.75rem;
    stroke-width: 1.8;
  }

  .badge:hover .badge-circle {
    border-color: rgba(165, 180, 252, 0.85);
    background: rgba(102, 126, 234, 0.14);
  }

  .badge-label {
    font-family: 'Plus Jakarta Sans', sans-serif;
    font-size: 1.1rem;
    font-weight: 700;
    color: #f5f5fa;
    line-height: 1.3;
    letter-spacing: -0.01em;
  }

  .cta-row {
    text-align: center;
  }

  .all-services {
    display: inline-flex;
    align-items: center;
    gap: 0.5rem;
    font-family: 'JetBrains Mono', monospace;
    color: rgba(255, 255, 255, 0.7);
    text-decoration: none;
    font-weight: 600;
    font-size: 0.9rem;
    padding: 0.9rem 1.75rem;
    border: 1px solid rgba(102, 126, 234, 0.3);
    border-radius: 0.5rem;
    transition: all 0.2s ease;
  }

  .all-services:hover {
    color: white;
    border-color: rgba(102, 126, 234, 0.6);
    background: rgba(102, 126, 234, 0.08);
  }

  .all-services svg {
    width: 1rem;
    height: 1rem;
  }

  @media (max-width: 720px) {
    .services {
      padding: 4rem 0;
    }

    .badges {
      grid-template-columns: repeat(2, 1fr);
      gap: 2.5rem 1.5rem;
    }
  }
</style>
