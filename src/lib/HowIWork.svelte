<script>
  import * as m from '$lib/paraglide/messages';
</script>

<section id="how" class="how">
  <div class="container">
    <div class="section-header">
      <div class="eyebrow">{m.how_section_eyebrow()}</div>
      <h2>{m.how_section_title()}</h2>
    </div>

    <div class="grid">
      <div class="card">
        <div class="card-icon">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true">
            <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/>
          </svg>
        </div>
        <h3>{m.how_point_1_title()}</h3>
        <p>{m.how_point_1()}</p>
      </div>

      <div class="card">
        <div class="card-icon">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true">
            <circle cx="12" cy="12" r="10"/>
            <line x1="4.93" y1="4.93" x2="19.07" y2="19.07"/>
          </svg>
        </div>
        <h3>{m.how_point_2_title()}</h3>
        <p>{m.how_point_2()}</p>
      </div>

      <div class="card">
        <div class="card-icon">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true">
            <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/>
            <circle cx="9" cy="7" r="4"/>
            <path d="M23 21v-2a4 4 0 0 0-3-3.87"/>
            <path d="M16 3.13a4 4 0 0 1 0 7.75"/>
          </svg>
        </div>
        <h3>{m.how_point_3_title()}</h3>
        <p>{m.how_point_3()}</p>
      </div>
    </div>
  </div>
</section>

<style>
  .how {
    padding: 7rem 0;
    background: #0f0f1a;
  }

  .container {
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 2rem;
  }

  .section-header {
    text-align: center;
    max-width: 720px;
    margin: 0 auto 4rem;
  }

  .eyebrow {
    font-family: 'JetBrains Mono', monospace;
    font-size: 0.75rem;
    color: rgba(255, 255, 255, 0.4);
    text-transform: uppercase;
    letter-spacing: 0.15em;
    margin-bottom: 1rem;
  }

  .section-header h2 {
    font-family: 'Plus Jakarta Sans', sans-serif;
    font-size: clamp(2rem, 4vw, 3rem);
    font-weight: 800;
    color: #e2e8f0;
    line-height: 1.1;
    letter-spacing: -0.02em;
    margin: 0;
  }

  .grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 1.5rem;
  }

  .card {
    background: #1a1a2e;
    border: 1px solid rgba(102, 126, 234, 0.12);
    border-radius: 1rem;
    padding: 2.5rem 2rem;
    text-align: center;
    transition: transform 0.25s ease, border-color 0.25s ease;
  }

  .card:hover {
    transform: translateY(-3px);
    border-color: rgba(102, 126, 234, 0.3);
  }

  .card-icon {
    width: 3.5rem;
    height: 3.5rem;
    background: rgba(102, 126, 234, 0.12);
    border-radius: 0.75rem;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 0 auto 1.5rem;
    color: #a5b4fc;
  }

  .card-icon svg {
    width: 1.6rem;
    height: 1.6rem;
  }

  .card h3 {
    font-family: 'Plus Jakarta Sans', sans-serif;
    font-size: 1.25rem;
    font-weight: 700;
    color: #f5f5fa;
    margin: 0 0 0.75rem;
  }

  .card p {
    color: rgba(255, 255, 255, 0.55);
    line-height: 1.6;
    margin: 0;
  }

  @media (max-width: 900px) {
    .grid {
      grid-template-columns: 1fr;
    }
  }
</style>
