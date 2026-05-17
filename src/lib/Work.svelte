<script>
  import * as m from '$lib/paraglide/messages';
  import { localizeHref } from '$lib/paraglide/runtime';
  import afidaImg from '$lib/assets/work-afida.png';
  import gareImg from '$lib/assets/work-gare.png';
  import ccaImg from '$lib/assets/work-cca.png';

  const projects = [
    {
      title: m.afida_title(),
      tagline: m.afida_tagline(),
      summary: m.afida_summary(),
      image: afidaImg,
      caseHref: '/case-study/afida',
      liveHref: 'https://afida.com'
    },
    {
      title: m.gare_title(),
      tagline: m.gare_tagline(),
      summary: m.gare_summary(),
      image: gareImg,
      caseHref: '/case-study/agence-de-la-gare',
      liveHref: 'https://www.agencegaremonaco.com/'
    },
    {
      title: m.cca_title(),
      tagline: m.cca_tagline(),
      summary: m.cca_summary(),
      image: ccaImg,
      caseHref: '/case-study/christian-curau-architecte',
      liveHref: 'https://cca-mc.com'
    }
  ];
</script>

<section id="work" class="work">
  <div class="container">
    <h2 class="section-title">{m.work_section_title()}</h2>

    <div class="projects">
      {#each projects as p, i (p.title)}
        <article class="project" class:reverse={i % 2 === 1}>
          <div class="project-media">
            <a href={localizeHref(p.caseHref)} class="media-link">
              <img src={p.image} alt={p.title} loading={i === 0 ? 'eager' : 'lazy'} />
            </a>
          </div>

          <div class="project-body">
            <h3 class="project-title">{p.title}</h3>
            <p class="project-tagline">{p.tagline}</p>
            <p class="project-summary">{p.summary}</p>

            <div class="project-actions">
              <a href={localizeHref(p.caseHref)} class="cta-read">
                {m.work_view_case_study()}
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true">
                  <line x1="5" y1="12" x2="19" y2="12"/>
                  <polyline points="12,5 19,12 12,19"/>
                </svg>
              </a>
              <a href={p.liveHref} target="_blank" rel="noopener noreferrer" class="cta-visit">
                {m.work_visit_site()}
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true">
                  <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/>
                  <polyline points="15 3 21 3 21 9"/>
                  <line x1="10" y1="14" x2="21" y2="3"/>
                </svg>
              </a>
            </div>
          </div>
        </article>
      {/each}
    </div>
  </div>
</section>

<style>
  .work {
    padding: 8rem 0;
    background: #0f0f1a;
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
    margin: 0 0 4rem;
    text-align: center;
  }

  .projects {
    display: flex;
    flex-direction: column;
    gap: 6rem;
  }

  .project {
    display: grid;
    grid-template-columns: 1.1fr 1fr;
    gap: 4rem;
    align-items: center;
  }

  .project.reverse {
    grid-template-columns: 1fr 1.1fr;
  }

  .project.reverse .project-media {
    order: 2;
  }

  .project-media {
    position: relative;
  }

  .media-link {
    display: block;
    border-radius: 1rem;
    overflow: hidden;
    border: 1px solid rgba(102, 126, 234, 0.18);
    box-shadow:
      0 0 50px rgba(102, 126, 234, 0.12),
      0 25px 50px rgba(0, 0, 0, 0.5);
    transition: transform 0.3s ease, box-shadow 0.3s ease;
  }

  .media-link:hover {
    transform: translateY(-4px);
    box-shadow:
      0 0 80px rgba(102, 126, 234, 0.2),
      0 30px 60px rgba(0, 0, 0, 0.55);
  }

  .media-link img {
    width: 100%;
    height: auto;
    display: block;
  }

  .project-title {
    font-family: 'Plus Jakarta Sans', sans-serif;
    font-size: clamp(2rem, 3.5vw, 2.5rem);
    font-weight: 800;
    color: #f5f5fa;
    line-height: 1.1;
    letter-spacing: -0.02em;
    margin: 0 0 0.75rem;
  }

  .project-tagline {
    font-family: 'Plus Jakarta Sans', sans-serif;
    font-size: 1.15rem;
    font-weight: 500;
    color: #a5b4fc;
    line-height: 1.4;
    margin: 0 0 1.5rem;
  }

  .project-summary {
    color: rgba(255, 255, 255, 0.6);
    line-height: 1.65;
    margin: 0 0 2rem;
  }

  .project-actions {
    display: flex;
    gap: 1.25rem;
    flex-wrap: wrap;
    align-items: center;
  }

  .cta-read {
    display: inline-flex;
    align-items: center;
    gap: 0.5rem;
    font-family: 'JetBrains Mono', monospace;
    background: linear-gradient(135deg, #667eea 0%, #0891b2 100%);
    color: white;
    padding: 0.8rem 1.5rem;
    border-radius: 0.5rem;
    text-decoration: none;
    font-weight: 600;
    font-size: 0.9rem;
    transition: transform 0.25s ease, box-shadow 0.25s ease;
  }

  .cta-read:hover {
    transform: translateY(-2px);
    box-shadow: 0 10px 25px rgba(102, 126, 234, 0.3);
  }

  .cta-read svg {
    width: 1rem;
    height: 1rem;
  }

  .cta-visit {
    display: inline-flex;
    align-items: center;
    gap: 0.5rem;
    font-family: 'JetBrains Mono', monospace;
    color: rgba(255, 255, 255, 0.55);
    padding: 0.8rem 1rem;
    text-decoration: none;
    font-weight: 500;
    font-size: 0.85rem;
    transition: color 0.2s ease;
  }

  .cta-visit:hover {
    color: #e2e8f0;
  }

  .cta-visit svg {
    width: 0.9rem;
    height: 0.9rem;
  }

  @media (max-width: 900px) {
    .work {
      padding: 5rem 0;
    }

    .projects {
      gap: 4rem;
    }

    .project,
    .project.reverse {
      grid-template-columns: 1fr;
      gap: 2rem;
    }

    .project.reverse .project-media {
      order: 0;
    }
  }
</style>
