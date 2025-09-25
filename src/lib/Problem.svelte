<section id="problem" class="problem">
  <div class="container">
    <div class="section-header">
      <h2>The Challenge Every Growing Company Faces</h2>
      <p>Building software without senior technical leadership is like sailing without a compass</p>
    </div>

    <div class="problems-grid">
      <div class="problem-card">
        <div class="problem-icon">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/>
            <circle cx="9" cy="7" r="4"/>
            <path d="M22 21v-2a4 4 0 0 0-3-3.87"/>
            <path d="M16 3.13a4 4 0 0 1 0 7.75"/>
          </svg>
        </div>
        <h3>No Technical Leadership</h3>
        <p>You want to build software, but don't have a CTO to guide technical decisions and strategy.</p>
      </div>
      
      <div class="problem-card">
        <div class="problem-icon">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <circle cx="12" cy="12" r="10"/>
            <path d="M12 6v6l4 2"/>
          </svg>
        </div>
        <h3>Too Early for Full-Time</h3>
        <p>Hiring a full-time CTO is too expensive or premature for your current stage and budget.</p>
      </div>

      <div class="problem-card">
        <div class="problem-icon">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <path d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126zM12 15.75h.007v.008H12v-.008z"/>
          </svg>
        </div>
        <h3>Costly Mistakes</h3>
        <p>Without senior guidance, product decisions and tech choices can become expensive mistakes that slow you down.</p>
      </div>
    </div>
  </div>
</section>

<style>
  .problem {
    padding: 6rem 0;
    background: #f8fafc;
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
    color: #1f2937;
    margin-bottom: 1rem;
  }

  .section-header p {
    font-size: 1.25rem;
    color: #6b7280;
    max-width: 600px;
    margin: 0 auto;
  }

  .problems-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: 2rem;
  }

  .problem-card {
    background: white;
    padding: 2rem;
    border-radius: 1rem;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.05);
    text-align: center;
    transition: transform 0.2s, box-shadow 0.2s;
  }

  .problem-card:hover {
    transform: translateY(-4px);
    box-shadow: 0 10px 25px rgba(0, 0, 0, 0.1);
  }

  .problem-icon {
    width: 4rem;
    height: 4rem;
    background: linear-gradient(135deg, #ef4444, #dc2626);
    border-radius: 1rem;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 0 auto 1.5rem;
    color: white;
  }

  .problem-icon svg {
    width: 2rem;
    height: 2rem;
  }

  .problem-card h3 {
    font-size: 1.5rem;
    font-weight: 600;
    color: #1f2937;
    margin-bottom: 1rem;
  }

  .problem-card p {
    color: #6b7280;
    line-height: 1.6;
  }

  @media (max-width: 768px) {
    .problem {
      padding: 4rem 0;
    }

    .section-header h2 {
      font-size: 2rem;
    }

    .problems-grid {
      grid-template-columns: 1fr;
    }
  }
</style>