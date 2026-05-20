<script>
  import * as m from '$lib/paraglide/messages';
  import { localizeHref } from '$lib/paraglide/runtime';

  const services = [
    { title: m.service_1_title(), summary: m.service_1_summary() },
    { title: m.service_2_title(), summary: m.service_2_summary() },
    { title: m.service_3_title(), summary: m.service_3_summary() },
    { title: m.service_4_title(), summary: m.service_4_summary() }
  ];
</script>

<section id="services" class="services">
  <div class="container">
    <h2 class="section-title">{m.services_section_title()}</h2>

    <div class="grid">
      {#each services as s}
        <a href={localizeHref('/services')} class="service">
          <h3 class="service-title">{s.title}</h3>
          <p class="service-summary">{s.summary}</p>
          <span class="service-arrow" aria-hidden="true">→</span>
        </a>
      {/each}
    </div>

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
    max-width: 1200px;
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
    margin: 0 0 3rem;
    text-align: center;
  }

  .grid {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 1.25rem;
    margin-bottom: 3rem;
  }

  @media (max-width: 720px) {
    .grid {
      grid-template-columns: 1fr;
    }
  }

  .service {
    position: relative;
    display: flex;
    flex-direction: column;
    gap: 0.75rem;
    background: #1a1a2e;
    border: 1px solid rgba(102, 126, 234, 0.12);
    border-radius: 1rem;
    padding: 2rem 2rem 3.5rem;
    text-decoration: none;
    transition: transform 0.25s ease, border-color 0.25s ease, background 0.25s ease;
  }

  .service:hover {
    transform: translateY(-3px);
    border-color: rgba(102, 126, 234, 0.35);
    background: #1d1d33;
  }

  .service-title {
    font-family: 'Plus Jakarta Sans', sans-serif;
    font-size: 1.4rem;
    font-weight: 700;
    color: #f5f5fa;
    line-height: 1.25;
    margin: 0;
  }

  .service-summary {
    color: rgba(255, 255, 255, 0.55);
    line-height: 1.55;
    margin: 0;
    font-size: 0.95rem;
  }

  .service-arrow {
    position: absolute;
    bottom: 1.5rem;
    right: 1.75rem;
    font-family: 'JetBrains Mono', monospace;
    color: rgba(165, 180, 252, 0.5);
    font-size: 1.25rem;
    transition: transform 0.25s ease, color 0.25s ease;
  }

  .service:hover .service-arrow {
    color: #a5b4fc;
    transform: translateX(4px);
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

  @media (max-width: 768px) {
    .services {
      padding: 4rem 0;
    }
  }
</style>
