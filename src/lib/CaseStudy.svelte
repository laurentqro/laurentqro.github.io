<script>
  import * as m from '$lib/paraglide/messages';
  import { localizeHref } from '$lib/paraglide/runtime';
  import Footer from '$lib/Footer.svelte';

  let { data } = $props();
</script>

<section class="case-hero">
  <div class="case-hero-inner">
    <a href={localizeHref('/portfolio')} class="back-link">
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true">
        <line x1="19" y1="12" x2="5" y2="12"/>
        <polyline points="12,19 5,12 12,5"/>
      </svg>
      {m.footer_back_home()}
    </a>

    <h1>{data.title}</h1>

    <p class="description">{data.description}</p>

    <div class="tags">
      {#each data.tags as t}
        <span class="tag">{t}</span>
      {/each}
    </div>

    <div class="meta-grid">
      <div class="meta-cell">
        <div class="meta-label">{data.metaPlatformLabel}</div>
        <div class="meta-value">{data.metaPlatformValue}</div>
      </div>
      <div class="meta-cell">
        <div class="meta-label">{data.metaCategoryLabel}</div>
        <div class="meta-value">{data.metaCategoryValue}</div>
      </div>
      <div class="meta-cell">
        <div class="meta-label">{data.metaYearLabel}</div>
        <div class="meta-value">{data.metaYearValue}</div>
      </div>
    </div>

    <a href={data.liveUrl} target="_blank" rel="noopener noreferrer" class="visit-cta">
      {data.visitCta}
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true">
        <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/>
        <polyline points="15 3 21 3 21 9"/>
        <line x1="10" y1="14" x2="21" y2="3"/>
      </svg>
    </a>
  </div>
</section>

<section class="shots">
  <div class="shots-inner">
    <figure class="shot">
      <img src={data.imagePrimary} alt={data.title} />
    </figure>
    {#if data.imageSecondary}
      <figure class="shot">
        <img src={data.imageSecondary} alt={data.title} loading="lazy" />
      </figure>
    {/if}
  </div>
</section>

<section class="related">
  <div class="related-inner">
    <div class="related-label">{data.relatedServiceLabel}</div>
    <h3>{data.relatedServiceTitle}</h3>
    <p>{data.relatedServiceBody}</p>
    <a href={localizeHref('/services')} class="related-link">
      {m.services_section_cta()}
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true">
        <line x1="5" y1="12" x2="19" y2="12"/>
        <polyline points="12,5 19,12 12,19"/>
      </svg>
    </a>
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
    max-width: 900px;
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
    margin-bottom: 2.5rem;
    transition: color 0.2s ease;
  }

  .back-link:hover { color: #a5b4fc; }

  .back-link svg {
    width: 0.95rem;
    height: 0.95rem;
  }

  .case-hero h1 {
    font-family: 'Plus Jakarta Sans', sans-serif;
    font-size: clamp(2.25rem, 5.5vw, 4rem);
    font-weight: 800;
    color: #f5f5fa;
    margin: 0 0 1.5rem;
    line-height: 1.05;
    letter-spacing: -0.03em;
  }

  .description {
    font-size: 1.1rem;
    color: rgba(255, 255, 255, 0.65);
    line-height: 1.7;
    margin: 0 0 2rem;
  }

  .tags {
    display: flex;
    flex-wrap: wrap;
    gap: 0.6rem;
    margin-bottom: 2.5rem;
  }

  .tag {
    font-family: 'JetBrains Mono', monospace;
    font-size: 0.78rem;
    color: #a5b4fc;
    background: rgba(102, 126, 234, 0.08);
    border: 1px solid rgba(102, 126, 234, 0.22);
    padding: 0.4rem 0.8rem;
    border-radius: 999px;
    letter-spacing: 0.02em;
  }

  .meta-grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 2rem;
    padding: 1.75rem 0;
    border-top: 1px solid rgba(255, 255, 255, 0.08);
    border-bottom: 1px solid rgba(255, 255, 255, 0.08);
    margin-bottom: 2.5rem;
  }

  .meta-label {
    font-family: 'JetBrains Mono', monospace;
    font-size: 0.7rem;
    color: rgba(255, 255, 255, 0.4);
    text-transform: uppercase;
    letter-spacing: 0.1em;
    margin-bottom: 0.4rem;
  }

  .meta-value {
    font-family: 'JetBrains Mono', monospace;
    font-size: 1rem;
    color: #e2e8f0;
    font-weight: 600;
  }

  .visit-cta {
    display: inline-flex;
    align-items: center;
    gap: 0.5rem;
    font-family: 'JetBrains Mono', monospace;
    color: rgba(255, 255, 255, 0.7);
    text-decoration: none;
    font-weight: 600;
    font-size: 0.9rem;
    padding: 0.85rem 1.5rem;
    border: 1px solid rgba(102, 126, 234, 0.3);
    border-radius: 0.5rem;
    transition: all 0.2s ease;
  }

  .visit-cta:hover {
    color: white;
    border-color: rgba(102, 126, 234, 0.6);
    background: rgba(102, 126, 234, 0.08);
  }

  .visit-cta svg {
    width: 1rem;
    height: 1rem;
  }

  .shots {
    padding: 4rem 2rem;
    background: #0f0f1a;
  }

  .shots-inner {
    max-width: 1100px;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    gap: 2rem;
  }

  .shot {
    margin: 0;
    border-radius: 1rem;
    overflow: hidden;
    border: 1px solid rgba(102, 126, 234, 0.18);
    box-shadow: 0 0 60px rgba(102, 126, 234, 0.12), 0 25px 50px rgba(0, 0, 0, 0.5);
  }

  .shot img {
    width: 100%;
    height: auto;
    display: block;
  }

  .related {
    padding: 5rem 2rem 7rem;
    background: #141422;
    border-top: 1px solid rgba(102, 126, 234, 0.08);
  }

  .related-inner {
    max-width: 700px;
    margin: 0 auto;
    text-align: center;
  }

  .related-label {
    font-family: 'JetBrains Mono', monospace;
    font-size: 0.75rem;
    color: rgba(255, 255, 255, 0.4);
    text-transform: uppercase;
    letter-spacing: 0.15em;
    margin-bottom: 1rem;
  }

  .related h3 {
    font-family: 'Plus Jakarta Sans', sans-serif;
    font-size: clamp(1.5rem, 3vw, 2rem);
    font-weight: 800;
    color: #f5f5fa;
    margin: 0 0 0.75rem;
    letter-spacing: -0.02em;
  }

  .related p {
    color: rgba(255, 255, 255, 0.6);
    line-height: 1.6;
    font-size: 1rem;
    margin: 0 0 1.5rem;
  }

  .related-link {
    display: inline-flex;
    align-items: center;
    gap: 0.4rem;
    font-family: 'JetBrains Mono', monospace;
    color: #a5b4fc;
    text-decoration: none;
    font-weight: 600;
    font-size: 0.9rem;
    transition: gap 0.2s ease, color 0.2s ease;
  }

  .related-link:hover {
    color: #c4b5fd;
    gap: 0.65rem;
  }

  .related-link svg {
    width: 1rem;
    height: 1rem;
  }

  @media (max-width: 700px) {
    .case-hero { padding: 8rem 1.25rem 3rem; }
    .shots, .related { padding-left: 1.25rem; padding-right: 1.25rem; }

    .meta-grid {
      grid-template-columns: 1fr;
      gap: 1.25rem;
    }
  }
</style>
