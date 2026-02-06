<script>
  import * as m from '$lib/paraglide/messages';
</script>

<section id="solution" class="solution">
  <div class="container">
    <div class="section-header">
      <h2>{m.solution_title()}</h2>
      <p>{m.solution_subtitle()}</p>
    </div>

    <div class="solution-grid">
      <div class="solution-card">
        <div class="card-icon">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <path d="M9 12l2 2 4-4"/>
            <circle cx="12" cy="12" r="10"/>
          </svg>
        </div>
        <h3>{m.solution_point_1_title()}</h3>
        <p>{m.solution_point_1()}</p>
      </div>

      <div class="solution-card">
        <div class="card-icon">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
          </svg>
        </div>
        <h3>{m.solution_point_2_title()}</h3>
        <p>{m.solution_point_2()}</p>
      </div>

      <div class="solution-card">
        <div class="card-icon">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/>
            <circle cx="9" cy="7" r="4"/>
            <path d="M23 21v-2a4 4 0 0 0-3-3.87"/>
            <path d="M16 3.13a4 4 0 0 1 0 7.75"/>
          </svg>
        </div>
        <h3>{m.solution_point_3_title()}</h3>
        <p>{m.solution_point_3()}</p>
      </div>
    </div>
  </div>
</section>

<style>
  .solution {
    padding: 6rem 0;
    background: #141422;
  }

  .container {
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 2rem;
  }

  .section-header {
    text-align: center;
    margin-bottom: 4rem;
  }

  .section-header h2 {
    font-size: 2.5rem;
    font-weight: 700;
    color: #e2e8f0;
    margin-bottom: 1rem;
    font-family: 'Plus Jakarta Sans', sans-serif;
  }

  .section-header p {
    font-size: 1.25rem;
    color: rgba(255, 255, 255, 0.6);
    max-width: 600px;
    margin: 0 auto;
    line-height: 1.6;
  }

  .solution-grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 2rem;
  }

  .solution-card {
    background: #1a1a2e;
    padding: 2.5rem 2rem;
    border-radius: 1rem;
    border: 1px solid rgba(102, 126, 234, 0.12);
    text-align: center;
    transition: transform 0.2s, border-color 0.2s, box-shadow 0.2s;
  }

  .solution-card:hover {
    transform: translateY(-4px);
    border-color: rgba(102, 126, 234, 0.3);
    box-shadow: 0 0 30px rgba(102, 126, 234, 0.1);
  }

  .card-icon {
    width: 4rem;
    height: 4rem;
    background: rgba(102, 126, 234, 0.15);
    border-radius: 1rem;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 0 auto 1.5rem;
    color: #667eea;
  }

  .card-icon svg {
    width: 2rem;
    height: 2rem;
  }

  .solution-card h3 {
    font-size: 1.25rem;
    font-weight: 600;
    color: #e2e8f0;
    margin-bottom: 0.75rem;
    font-family: 'Plus Jakarta Sans', sans-serif;
  }

  .solution-card p {
    color: rgba(255, 255, 255, 0.6);
    line-height: 1.6;
  }

  @media (max-width: 768px) {
    .solution {
      padding: 4rem 0;
    }

    .section-header h2 {
      font-size: 2rem;
    }

    .solution-grid {
      grid-template-columns: 1fr;
    }
  }
</style>
