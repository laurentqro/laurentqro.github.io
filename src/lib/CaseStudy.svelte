<script>
  import * as m from '$lib/paraglide/messages';
  import { localizeHref } from '$lib/paraglide/runtime';
  import { whatsappLink } from '$lib/whatsapp.js';
  import Footer from '$lib/Footer.svelte';

  let { data } = $props();
  const waHref = whatsappLink(m.whatsapp_prefill());
</script>

<section class="case-hero">
  <div class="case-hero-inner">
    <a href={localizeHref('/') + '#work'} class="back-link">
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true">
        <line x1="19" y1="12" x2="5" y2="12"/>
        <polyline points="12,19 5,12 12,5"/>
      </svg>
      {m.footer_back_home()}
    </a>

    <div class="eyebrow">{data.eyebrow}</div>
    <h1>{data.title}</h1>
    <p class="lede">{data.lede}</p>

    <div class="hero-actions">
      <a href={data.liveUrl} target="_blank" rel="noopener noreferrer" class="cta-primary">
        {data.visitCta}
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true">
          <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/>
          <polyline points="15 3 21 3 21 9"/>
          <line x1="10" y1="14" x2="21" y2="3"/>
        </svg>
      </a>
    </div>

    <div class="hero-image-wrap">
      <img src={data.heroImage} alt={data.title} />
    </div>

    <div class="hero-stats">
      {#each data.stats as s}
        <div class="hero-stat">
          <span class="hero-stat-value">{s.value}</span>
          <span class="hero-stat-label">{s.label}</span>
        </div>
      {/each}
    </div>
  </div>
</section>

<section class="block challenge">
  <div class="block-inner">
    <div class="block-header">
      <div class="eyebrow">{data.challengeTitle}</div>
      <h2>{data.challengeSubtitle}</h2>
    </div>

    <div class="challenges">
      {#each data.challenges as c, i}
        <div class="challenge-card">
          <div class="challenge-num">{String(i + 1).padStart(2, '0')}</div>
          <h3>{c.title}</h3>
          <p>{c.body}</p>
        </div>
      {/each}
    </div>
  </div>
</section>

<section class="block solution">
  <div class="block-inner">
    <div class="block-header">
      <div class="eyebrow">{data.solutionTitle}</div>
      <h2>{data.solutionSubtitle}</h2>
    </div>

    <div class="solutions">
      {#each data.solutions as s, i}
        <div class="solution-card">
          <div class="solution-num">{String(i + 1).padStart(2, '0')}</div>
          <h3>{s.title}</h3>
          <p>{s.body}</p>
        </div>
      {/each}
    </div>
  </div>
</section>

<section class="block stack">
  <div class="block-inner">
    <div class="block-header">
      <div class="eyebrow">{data.stackTitle}</div>
      <h2>{data.stackSubtitle}</h2>
    </div>

    <div class="stack-grid">
      {#each data.stack as item}
        <div class="stack-item">
          <div class="stack-name">{item.name}</div>
          <div class="stack-role">{item.role}</div>
        </div>
      {/each}
    </div>
  </div>
</section>

<section class="block results">
  <div class="block-inner">
    <div class="block-header">
      <div class="eyebrow">{data.resultsTitle}</div>
      <h2>{data.resultsSubtitle}</h2>
    </div>

    <div class="results-list">
      {#each data.results as r}
        <div class="result-row">
          <div class="result-label">{r.label}</div>
          <div class="result-value">{r.value}</div>
        </div>
      {/each}
    </div>
  </div>
</section>

<section class="block byline">
  <div class="block-inner byline-inner">
    <h2>{data.bylineTitle}</h2>
    <p>{data.byline}</p>
  </div>
</section>

<section class="block cta-block">
  <div class="block-inner cta-inner">
    <h2>{data.ctaTitle}</h2>
    <p>{data.ctaBody}</p>
    <div class="cta-buttons">
      <a href={waHref} target="_blank" rel="noopener noreferrer" class="cta-primary">
        <svg class="cta-icon" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.077 4.487.71.306 1.263.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.83 9.83 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413"/>
        </svg>
        {m.whatsapp_cta()}
      </a>
      <a href={localizeHref('/services')} class="cta-secondary">{m.services_section_cta()}</a>
    </div>
  </div>
</section>

<Footer />

<style>
  .case-hero {
    padding: 10rem 2rem 4rem;
    background: #0f0f1a;
    border-bottom: 1px solid rgba(102, 126, 234, 0.08);
  }

  .case-hero-inner {
    max-width: 1000px;
    margin: 0 auto;
  }

  .back-link {
    display: inline-flex;
    align-items: center;
    gap: 0.4rem;
    font-family: 'JetBrains Mono', monospace;
    color: rgba(255, 255, 255, 0.4);
    text-decoration: none;
    font-size: 0.8rem;
    margin-bottom: 2rem;
    transition: color 0.2s ease;
  }

  .back-link:hover {
    color: #a5b4fc;
  }

  .back-link svg {
    width: 0.95rem;
    height: 0.95rem;
  }

  .eyebrow {
    font-family: 'JetBrains Mono', monospace;
    font-size: 0.75rem;
    color: rgba(255, 255, 255, 0.4);
    text-transform: uppercase;
    letter-spacing: 0.15em;
    margin-bottom: 1.25rem;
  }

  .case-hero h1 {
    font-family: 'Plus Jakarta Sans', sans-serif;
    font-size: clamp(2rem, 5vw, 3.75rem);
    font-weight: 800;
    color: #f5f5fa;
    margin: 0 0 1.5rem;
    line-height: 1.1;
    letter-spacing: -0.03em;
  }

  .lede {
    font-size: 1.2rem;
    color: rgba(255, 255, 255, 0.7);
    line-height: 1.6;
    margin: 0 0 2rem;
    max-width: 780px;
  }

  .hero-actions {
    margin-bottom: 3rem;
  }

  .cta-primary {
    display: inline-flex;
    align-items: center;
    gap: 0.5rem;
    font-family: 'JetBrains Mono', monospace;
    background: linear-gradient(135deg, #25D366 0%, #128C7E 100%);
    color: white;
    padding: 0.95rem 1.75rem;
    border-radius: 0.5rem;
    text-decoration: none;
    font-weight: 700;
    font-size: 0.9rem;
    transition: transform 0.25s ease, box-shadow 0.25s ease;
  }

  .cta-primary:hover {
    transform: translateY(-2px);
    box-shadow: 0 0 40px rgba(37, 211, 102, 0.4);
  }

  .cta-primary svg {
    width: 1rem;
    height: 1rem;
  }

  .cta-icon {
    width: 1rem;
    height: 1rem;
  }

  .hero-image-wrap {
    border-radius: 1rem;
    overflow: hidden;
    border: 1px solid rgba(102, 126, 234, 0.18);
    box-shadow: 0 0 60px rgba(102, 126, 234, 0.12), 0 25px 50px rgba(0, 0, 0, 0.5);
    margin-bottom: 3rem;
  }

  .hero-image-wrap img {
    width: 100%;
    height: auto;
    display: block;
  }

  .hero-stats {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(160px, 1fr));
    gap: 1.5rem;
    padding-top: 2rem;
    border-top: 1px solid rgba(255, 255, 255, 0.08);
  }

  .hero-stat {
    display: flex;
    flex-direction: column;
    gap: 0.4rem;
  }

  .hero-stat-value {
    font-family: 'JetBrains Mono', monospace;
    font-size: 1.5rem;
    font-weight: 700;
    color: #e2e8f0;
    line-height: 1;
  }

  .hero-stat-label {
    font-family: 'JetBrains Mono', monospace;
    font-size: 0.72rem;
    color: rgba(255, 255, 255, 0.4);
    text-transform: uppercase;
    letter-spacing: 0.08em;
  }

  .block {
    padding: 6rem 2rem;
  }

  .block-inner {
    max-width: 1000px;
    margin: 0 auto;
  }

  .block-header {
    margin-bottom: 3.5rem;
    max-width: 800px;
  }

  .block-header h2 {
    font-family: 'Plus Jakarta Sans', sans-serif;
    font-size: clamp(1.75rem, 3.5vw, 2.5rem);
    font-weight: 800;
    color: #f5f5fa;
    margin: 0;
    line-height: 1.2;
    letter-spacing: -0.02em;
  }

  .challenge { background: #141422; }
  .solution { background: #0f0f1a; }
  .stack { background: #141422; }
  .results { background: #0f0f1a; }
  .byline { background: #141422; }
  .cta-block { background: #0a0a14; }

  .challenges, .solutions {
    display: grid;
    gap: 1.25rem;
  }

  .challenges {
    grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  }

  .solutions {
    grid-template-columns: 1fr 1fr;
  }

  .challenge-card, .solution-card {
    background: #1a1a2e;
    border: 1px solid rgba(102, 126, 234, 0.1);
    border-radius: 1rem;
    padding: 2rem;
  }

  .challenge-num, .solution-num {
    font-family: 'JetBrains Mono', monospace;
    font-size: 0.8rem;
    color: rgba(165, 180, 252, 0.55);
    font-weight: 700;
    letter-spacing: 0.1em;
    margin-bottom: 1rem;
  }

  .challenge-card h3, .solution-card h3 {
    font-family: 'Plus Jakarta Sans', sans-serif;
    font-size: 1.2rem;
    font-weight: 700;
    color: #f5f5fa;
    margin: 0 0 0.85rem;
    line-height: 1.25;
  }

  .challenge-card p, .solution-card p {
    color: rgba(255, 255, 255, 0.6);
    line-height: 1.6;
    margin: 0;
    font-size: 0.95rem;
  }

  .stack-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));
    gap: 1rem;
  }

  .stack-item {
    background: #1a1a2e;
    border: 1px solid rgba(102, 126, 234, 0.1);
    border-radius: 0.75rem;
    padding: 1.25rem 1.5rem;
  }

  .stack-name {
    font-family: 'JetBrains Mono', monospace;
    font-size: 0.95rem;
    color: #a5b4fc;
    font-weight: 700;
    margin-bottom: 0.3rem;
  }

  .stack-role {
    font-family: 'JetBrains Mono', monospace;
    font-size: 0.72rem;
    color: rgba(255, 255, 255, 0.4);
    letter-spacing: 0.05em;
  }

  .results-list {
    display: flex;
    flex-direction: column;
    gap: 1rem;
  }

  .result-row {
    display: grid;
    grid-template-columns: 220px 1fr;
    gap: 2rem;
    padding: 1.5rem 0;
    border-top: 1px solid rgba(255, 255, 255, 0.06);
  }

  .result-row:first-child {
    border-top: 0;
  }

  .result-label {
    font-family: 'JetBrains Mono', monospace;
    font-size: 0.78rem;
    color: rgba(255, 255, 255, 0.45);
    text-transform: uppercase;
    letter-spacing: 0.1em;
  }

  .result-value {
    color: #e2e8f0;
    font-size: 1.05rem;
    line-height: 1.5;
  }

  .byline-inner {
    text-align: center;
    max-width: 760px;
  }

  .byline-inner h2 {
    font-family: 'Plus Jakarta Sans', sans-serif;
    font-size: 1.75rem;
    font-weight: 800;
    color: #f5f5fa;
    margin: 0 0 1.25rem;
    letter-spacing: -0.02em;
  }

  .byline-inner p {
    color: rgba(255, 255, 255, 0.65);
    line-height: 1.7;
    font-size: 1.05rem;
    margin: 0;
  }

  .cta-inner {
    text-align: center;
    max-width: 720px;
  }

  .cta-inner h2 {
    font-family: 'Plus Jakarta Sans', sans-serif;
    font-size: clamp(1.75rem, 3.5vw, 2.5rem);
    font-weight: 800;
    color: #f5f5fa;
    margin: 0 0 1rem;
    letter-spacing: -0.02em;
  }

  .cta-inner p {
    color: rgba(255, 255, 255, 0.6);
    line-height: 1.6;
    font-size: 1.05rem;
    margin: 0 0 2rem;
  }

  .cta-buttons {
    display: flex;
    gap: 1rem;
    justify-content: center;
    flex-wrap: wrap;
  }

  .cta-secondary {
    font-family: 'JetBrains Mono', monospace;
    color: rgba(255, 255, 255, 0.7);
    text-decoration: none;
    font-weight: 600;
    font-size: 0.9rem;
    padding: 0.95rem 1.75rem;
    border: 1px solid rgba(102, 126, 234, 0.3);
    border-radius: 0.5rem;
    transition: all 0.2s ease;
  }

  .cta-secondary:hover {
    color: white;
    border-color: rgba(102, 126, 234, 0.6);
    background: rgba(102, 126, 234, 0.08);
  }

  @media (max-width: 800px) {
    .case-hero {
      padding: 8rem 1.25rem 3rem;
    }

    .block {
      padding: 4rem 1.25rem;
    }

    .solutions {
      grid-template-columns: 1fr;
    }

    .result-row {
      grid-template-columns: 1fr;
      gap: 0.5rem;
    }
  }
</style>
