<script>
  import * as m from '$lib/paraglide/messages';
</script>

<section id="solution" class="solution">
  <div class="container">
    <div class="solution-content">
      <div class="solution-text">
        <h2>{m.solution_title()}</h2>
        <p class="solution-subtitle">
          {m.solution_subtitle()}
        </p>

        <div class="solution-points">
          <div class="solution-point">
            <div class="point-icon">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <path d="M9 12l2 2 4-4"/>
                <circle cx="12" cy="12" r="10"/>
              </svg>
            </div>
            <div class="point-content">
              <h3>{m.solution_point_1_title()}</h3>
              <p>{m.solution_point_1()}</p>
            </div>
          </div>

          <div class="solution-point">
            <div class="point-icon">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
              </svg>
            </div>
            <div class="point-content">
              <h3>{m.solution_point_2_title()}</h3>
              <p>{m.solution_point_2()}</p>
            </div>
          </div>

          <div class="solution-point">
            <div class="point-icon">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/>
                <circle cx="9" cy="7" r="4"/>
                <path d="M23 21v-2a4 4 0 0 0-3-3.87"/>
                <path d="M16 3.13a4 4 0 0 1 0 7.75"/>
              </svg>
            </div>
            <div class="point-content">
              <h3>{m.solution_point_3_title()}</h3>
              <p>{m.solution_point_3()}</p>
            </div>
          </div>
        </div>
      </div>

      <div class="solution-visual">
        <div class="stats-card">
          <div class="stat">
            <div class="stat-number">50+</div>
            <div class="stat-label">{m.solution_stat_1_label()}</div>
          </div>
          <div class="stat">
            <div class="stat-number">€2M+</div>
            <div class="stat-label">{m.solution_stat_2_label()}</div>
          </div>
          <div class="stat">
            <div class="stat-number">95%</div>
            <div class="stat-label">{m.solution_stat_3_label()}</div>
          </div>
        </div>

        <div class="tech-stack">
          <h4>{m.solution_tech_stack_title()}</h4>
          <div class="tech-grid">
            <span class="tech-item">React</span>
            <span class="tech-item">Node.js</span>
            <span class="tech-item">Python</span>
            <span class="tech-item">AWS</span>
            <span class="tech-item">Docker</span>
            <span class="tech-item">PostgreSQL</span>
          </div>
        </div>
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

  .solution-content {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 4rem;
    align-items: center;
  }

  .solution-text h2 {
    font-size: 2.5rem;
    font-weight: 700;
    color: #e2e8f0;
    margin-bottom: 1rem;
    font-family: 'Plus Jakarta Sans', sans-serif;
  }

  .solution-subtitle {
    font-size: 1.25rem;
    color: rgba(255, 255, 255, 0.6);
    margin-bottom: 2rem;
    line-height: 1.6;
  }

  .solution-points {
    display: flex;
    flex-direction: column;
    gap: 1.5rem;
  }

  .solution-point {
    display: flex;
    gap: 1rem;
    align-items: flex-start;
  }

  .point-icon {
    width: 3rem;
    height: 3rem;
    background: rgba(102, 126, 234, 0.15);
    border-radius: 0.75rem;
    display: flex;
    align-items: center;
    justify-content: center;
    color: #667eea;
    flex-shrink: 0;
  }

  .point-icon svg {
    width: 1.5rem;
    height: 1.5rem;
  }

  .point-content h3 {
    font-size: 1.25rem;
    font-weight: 600;
    color: #e2e8f0;
    margin-bottom: 0.5rem;
    font-family: 'Plus Jakarta Sans', sans-serif;
  }

  .point-content p {
    color: rgba(255, 255, 255, 0.6);
    line-height: 1.6;
  }

  .solution-visual {
    display: flex;
    flex-direction: column;
    gap: 2rem;
  }

  .stats-card {
    background: linear-gradient(135deg, #667eea, #0891b2);
    padding: 2rem;
    border-radius: 1rem;
    color: white;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 1rem;
    text-align: center;
  }

  .stat-number {
    font-size: 2rem;
    font-weight: 700;
    margin-bottom: 0.5rem;
    font-family: 'JetBrains Mono', monospace;
  }

  .stat-label {
    font-size: 0.875rem;
    opacity: 0.9;
  }

  .tech-stack {
    background: #1a1a2e;
    padding: 2rem;
    border-radius: 1rem;
  }

  .tech-stack h4 {
    font-size: 1.25rem;
    font-weight: 600;
    color: #e2e8f0;
    margin-bottom: 1rem;
    text-align: center;
    font-family: 'Plus Jakarta Sans', sans-serif;
  }

  .tech-grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 0.75rem;
  }

  .tech-item {
    background: rgba(102, 126, 234, 0.1);
    padding: 0.75rem;
    border-radius: 0.5rem;
    text-align: center;
    font-weight: 500;
    color: #a5b4fc;
    font-family: 'JetBrains Mono', monospace;
  }

  @media (max-width: 768px) {
    .solution {
      padding: 4rem 0;
    }

    .solution-content {
      grid-template-columns: 1fr;
      gap: 2rem;
    }

    .solution-text h2 {
      font-size: 2rem;
    }

    .stats-card {
      grid-template-columns: 1fr;
    }

    .tech-grid {
      grid-template-columns: repeat(2, 1fr);
    }
  }
</style>