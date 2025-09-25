<section id="solution" class="solution">
  <div class="container">
    <div class="solution-content">
      <div class="solution-text">
        <h2>Your Fractional CTO Solution</h2>
        <p class="solution-subtitle">
          I act as your <strong>Fractional CTO</strong>, providing the technical leadership you need without the full-time commitment.
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
              <h3>Hands-on Development</h3>
              <p>Build or modernize your product with experienced hands-on coding and architecture.</p>
            </div>
          </div>

          <div class="solution-point">
            <div class="point-icon">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
              </svg>
            </div>
            <div class="point-content">
              <h3>Technology Strategy</h3>
              <p>Ensure technical decisions align with your business goals and long-term vision.</p>
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
              <h3>Team & Process Setup</h3>
              <p>Build the foundation for smooth scaling with proper processes and team structure.</p>
            </div>
          </div>
        </div>
      </div>

      <div class="solution-visual">
        <div class="stats-card">
          <div class="stat">
            <div class="stat-number">50+</div>
            <div class="stat-label">Projects Delivered</div>
          </div>
          <div class="stat">
            <div class="stat-number">€2M+</div>
            <div class="stat-label">Development Costs Saved</div>
          </div>
          <div class="stat">
            <div class="stat-number">95%</div>
            <div class="stat-label">Client Satisfaction</div>
          </div>
        </div>

        <div class="tech-stack">
          <h4>Technology Expertise</h4>
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
    background: white;
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
    color: #1f2937;
    margin-bottom: 1rem;
  }

  .solution-subtitle {
    font-size: 1.25rem;
    color: #6b7280;
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
    background: linear-gradient(135deg, #10b981, #059669);
    border-radius: 0.75rem;
    display: flex;
    align-items: center;
    justify-content: center;
    color: white;
    flex-shrink: 0;
  }

  .point-icon svg {
    width: 1.5rem;
    height: 1.5rem;
  }

  .point-content h3 {
    font-size: 1.25rem;
    font-weight: 600;
    color: #1f2937;
    margin-bottom: 0.5rem;
  }

  .point-content p {
    color: #6b7280;
    line-height: 1.6;
  }

  .solution-visual {
    display: flex;
    flex-direction: column;
    gap: 2rem;
  }

  .stats-card {
    background: linear-gradient(135deg, #667eea, #764ba2);
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
  }

  .stat-label {
    font-size: 0.875rem;
    opacity: 0.9;
  }

  .tech-stack {
    background: #f8fafc;
    padding: 2rem;
    border-radius: 1rem;
  }

  .tech-stack h4 {
    font-size: 1.25rem;
    font-weight: 600;
    color: #1f2937;
    margin-bottom: 1rem;
    text-align: center;
  }

  .tech-grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 0.75rem;
  }

  .tech-item {
    background: white;
    padding: 0.75rem;
    border-radius: 0.5rem;
    text-align: center;
    font-weight: 500;
    color: #374151;
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
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