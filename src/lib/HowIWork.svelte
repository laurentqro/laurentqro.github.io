<script>
  import * as m from '$lib/paraglide/messages';
</script>

<section id="how" class="how">
  <div class="container">
    <div class="section-header">
      <h2>{m.how_section_title()}</h2>
      <p class="lede">{m.how_section_lede()}</p>
    </div>

    <div class="grid">
      <div class="card">
        <div class="card-icon">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
            <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"/>
            <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"/>
          </svg>
        </div>
        <h3>{m.how_point_1_title()}</h3>
        <p>{m.how_point_1()}</p>
      </div>

      <div class="card">
        <div class="card-icon">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
            <path d="M20 12V6.5A2.5 2.5 0 0 0 17.5 4h-11A2.5 2.5 0 0 0 4 6.5v11A2.5 2.5 0 0 0 6.5 20H12"/>
            <path d="M14 14l3 3 5-5"/>
          </svg>
        </div>
        <h3>{m.how_point_2_title()}</h3>
        <p>{m.how_point_2()}</p>
      </div>

      <div class="card">
        <div class="card-icon">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
            <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/>
            <polyline points="14 2 14 8 20 8"/>
            <line x1="8" y1="13" x2="16" y2="13"/>
            <line x1="8" y1="17" x2="16" y2="17"/>
          </svg>
        </div>
        <h3>{m.how_point_3_title()}</h3>
        <p>{m.how_point_3()}</p>
      </div>

      <div class="card">
        <div class="card-icon">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
            <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
            <polyline points="9 12 11 14 15 10"/>
          </svg>
        </div>
        <h3>{m.how_point_4_title()}</h3>
        <p>{m.how_point_4()}</p>
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

  .section-header h2 {
    font-family: 'Plus Jakarta Sans', sans-serif;
    font-size: clamp(2rem, 4vw, 3rem);
    font-weight: 800;
    color: #e2e8f0;
    line-height: 1.1;
    letter-spacing: -0.02em;
    margin: 0 0 1rem;
  }

  .lede {
    font-size: 1.1rem;
    color: rgba(255, 255, 255, 0.55);
    line-height: 1.6;
    margin: 0;
  }

  .grid {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 1.25rem;
  }

  .card {
    background: #1a1a2e;
    border: 1px solid rgba(102, 126, 234, 0.12);
    border-radius: 1rem;
    padding: 2.25rem 1.75rem;
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
    font-size: 1.15rem;
    font-weight: 700;
    color: #f5f5fa;
    margin: 0 0 0.75rem;
  }

  .card p {
    color: rgba(255, 255, 255, 0.55);
    line-height: 1.55;
    margin: 0;
    font-size: 0.92rem;
  }

  @media (max-width: 900px) {
    .grid {
      grid-template-columns: repeat(2, 1fr);
    }
  }

  @media (max-width: 540px) {
    .grid {
      grid-template-columns: 1fr;
    }
  }
</style>
