<script>
  import * as m from '$lib/paraglide/messages';
  import { localizeHref } from '$lib/paraglide/runtime';
  import { whatsappLink } from '$lib/whatsapp.js';
  import Footer from '$lib/Footer.svelte';
  import afidaImg from '$lib/assets/work-afida.png';
  import gareImg from '$lib/assets/work-gare.png';
  import ccaImg from '$lib/assets/work-cca.png';
  import mdbImg from '$lib/assets/work-mdb.png';

  const waHref = whatsappLink(m.whatsapp_prefill());

  const projects = [
    {
      image: afidaImg,
      category: m.portfolio_card_afida_category(),
      year: m.portfolio_card_year(),
      title: m.case_afida_title(),
      href: '/case-study/afida'
    },
    {
      image: mdbImg,
      category: m.portfolio_card_mdb_category(),
      year: m.case_mdb_meta_year_value(),
      title: m.case_mdb_title(),
      href: '/case-study/maison-de-bacon'
    },
    {
      image: gareImg,
      category: m.portfolio_card_gare_category(),
      year: m.portfolio_card_year(),
      title: m.case_gare_title(),
      href: '/case-study/agence-de-la-gare'
    },
    {
      image: ccaImg,
      category: m.portfolio_card_cca_category(),
      year: m.portfolio_card_year(),
      title: m.case_cca_title(),
      href: '/case-study/christian-curau-architecte'
    }
  ];

  function handleAnchorClick(event) {
    event.preventDefault();
    const link = event.currentTarget;
    const anchorId = new URL(link.href).hash.replace('#', '');
    const anchor = document.getElementById(anchorId);
    if (anchor) anchor.scrollIntoView({ behavior: 'smooth' });
  }
</script>

<svelte:head>
  <title>{m.portfolio_meta_title()}</title>
  <meta name="description" content={m.portfolio_meta_description()} />
</svelte:head>

<section class="hero">
  <div class="hero-inner">
    <h1>{m.portfolio_hero_title()}</h1>
    <p class="hero-paragraph">{m.portfolio_hero_paragraph()}</p>
    <div class="hero-actions">
      <a href="#projects" class="cta-primary" onclick={handleAnchorClick}>
        {m.portfolio_hero_cta_primary()}
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true">
          <line x1="5" y1="12" x2="19" y2="12"/>
          <polyline points="12,5 19,12 12,19"/>
        </svg>
      </a>
      <a href={waHref} target="_blank" rel="noopener noreferrer" class="cta-secondary">
        {m.portfolio_hero_cta_secondary()}
      </a>
    </div>
  </div>
</section>

<section class="strip">
  <div class="strip-inner">
    <div class="strip-stat">
      <span class="strip-stat-value">{m.portfolio_stat_value()}</span>
      <span class="strip-stat-label">{m.portfolio_stat_label()}</span>
    </div>
    <div class="strip-chips">
      <span class="strip-chip">Rails 8</span>
      <span class="strip-chip">Hotwire</span>
      <span class="strip-chip">Postgres</span>
      <span class="strip-chip">Stripe</span>
    </div>
  </div>
</section>

<section id="projects" class="projects">
  <div class="projects-inner">
    <div class="card-grid">
      {#each projects as p, i}
        <a href={localizeHref(p.href)} class="card">
          <div class="card-media">
            <img src={p.image} alt={p.title} loading={i === 0 ? 'eager' : 'lazy'} />
          </div>
          <div class="card-body">
            <div class="card-meta">{p.category} · {p.year}</div>
            <h3 class="card-title">{p.title}</h3>
          </div>
        </a>
      {/each}
    </div>
  </div>
</section>

<Footer />

<style>
  .hero {
    padding: 11rem 2rem 4rem;
    background: #0f0f1a;
  }

  .hero-inner {
    max-width: 900px;
    margin: 0 auto;
  }

  .hero h1 {
    font-family: 'Plus Jakarta Sans', sans-serif;
    font-size: clamp(2.5rem, 6vw, 4.5rem);
    font-weight: 800;
    color: #f5f5fa;
    margin: 0 0 1.25rem;
    line-height: 1.05;
    letter-spacing: -0.03em;
  }

  .hero-paragraph {
    font-size: 1.15rem;
    color: rgba(255, 255, 255, 0.6);
    line-height: 1.6;
    margin: 0 0 2rem;
    max-width: 700px;
  }

  .hero-actions {
    display: flex;
    gap: 1rem;
    flex-wrap: wrap;
    align-items: center;
  }

  .cta-primary {
    display: inline-flex;
    align-items: center;
    gap: 0.5rem;
    font-family: 'JetBrains Mono', monospace;
    background: linear-gradient(135deg, #667eea 0%, #0891b2 100%);
    color: white;
    padding: 0.95rem 1.75rem;
    border-radius: 0.5rem;
    text-decoration: none;
    font-weight: 700;
    font-size: 0.9rem;
    transition: transform 0.25s ease, box-shadow 0.25s ease;
    box-shadow: 0 0 25px rgba(102, 126, 234, 0.3);
  }

  .cta-primary:hover {
    transform: translateY(-2px);
    box-shadow: 0 0 40px rgba(102, 126, 234, 0.5);
  }

  .cta-primary svg {
    width: 1rem;
    height: 1rem;
  }

  .cta-secondary {
    display: inline-flex;
    align-items: center;
    gap: 0.5rem;
    font-family: 'JetBrains Mono', monospace;
    background: transparent;
    border: 1px solid rgba(255, 255, 255, 0.15);
    color: rgba(255, 255, 255, 0.7);
    padding: 0.95rem 1.5rem;
    border-radius: 0.5rem;
    text-decoration: none;
    font-weight: 600;
    font-size: 0.9rem;
    transition: all 0.25s ease;
  }

  .cta-secondary:hover {
    background: rgba(255, 255, 255, 0.04);
    border-color: rgba(255, 255, 255, 0.3);
    color: white;
  }

  .strip {
    padding: 2.5rem 2rem;
    background: #0f0f1a;
    border-top: 1px solid rgba(255, 255, 255, 0.06);
    border-bottom: 1px solid rgba(255, 255, 255, 0.06);
  }

  .strip-inner {
    max-width: 1200px;
    margin: 0 auto;
    display: flex;
    align-items: center;
    gap: 2.5rem;
    flex-wrap: wrap;
  }

  .strip-stat {
    display: flex;
    align-items: baseline;
    gap: 0.75rem;
  }

  .strip-stat-value {
    font-family: 'JetBrains Mono', monospace;
    font-size: 1.75rem;
    font-weight: 700;
    color: #e2e8f0;
  }

  .strip-stat-label {
    font-family: 'JetBrains Mono', monospace;
    font-size: 0.75rem;
    color: rgba(255, 255, 255, 0.4);
    text-transform: uppercase;
    letter-spacing: 0.08em;
  }

  .strip-chips {
    display: flex;
    flex-wrap: wrap;
    gap: 0.5rem;
  }

  .strip-chip {
    font-family: 'JetBrains Mono', monospace;
    font-size: 0.78rem;
    color: #a5b4fc;
    background: rgba(102, 126, 234, 0.08);
    border: 1px solid rgba(102, 126, 234, 0.22);
    padding: 0.35rem 0.75rem;
    border-radius: 999px;
  }

  .projects {
    padding: 4rem 2rem 6rem;
    background: #0f0f1a;
  }

  .projects-inner {
    max-width: 1200px;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    gap: 1.5rem;
  }

  .card {
    display: block;
    background: #1a1a2e;
    border: 1px solid rgba(102, 126, 234, 0.12);
    border-radius: 1rem;
    overflow: hidden;
    text-decoration: none;
    color: inherit;
    transition: transform 0.25s ease, border-color 0.25s ease, box-shadow 0.25s ease;
  }

  .card:hover {
    transform: translateY(-3px);
    border-color: rgba(102, 126, 234, 0.3);
    box-shadow: 0 0 40px rgba(102, 126, 234, 0.12);
  }

  .card-media {
    overflow: hidden;
    aspect-ratio: 4 / 3;
    background: #0f0f1a;
  }

  .card-media img {
    width: 100%;
    height: 100%;
    display: block;
    object-fit: cover;
    transition: transform 0.4s ease;
  }

  .card:hover .card-media img {
    transform: scale(1.02);
  }

  .card-body {
    padding: 1.75rem 2rem 2rem;
  }

  .card-meta {
    font-family: 'JetBrains Mono', monospace;
    font-size: 0.75rem;
    color: rgba(255, 255, 255, 0.45);
    text-transform: uppercase;
    letter-spacing: 0.08em;
    margin-bottom: 0.75rem;
  }

  .card-title {
    font-family: 'Plus Jakarta Sans', sans-serif;
    font-size: 1.4rem;
    font-weight: 800;
    color: #f5f5fa;
    margin: 0;
    line-height: 1.15;
    letter-spacing: -0.02em;
  }

  .card-grid {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 1.5rem;
  }

  @media (max-width: 900px) {
    .card-grid {
      grid-template-columns: 1fr;
    }
  }

  @media (max-width: 700px) {
    .hero { padding: 9rem 1.25rem 3rem; }
    .strip { padding: 2rem 1.25rem; }
    .projects { padding: 3rem 1.25rem 5rem; }
    .card-body { padding: 1.75rem; }
  }
</style>
