<script>
  import * as m from '$lib/paraglide/messages';
</script>

<section id="target" class="target">
  <div class="container">
    <div class="section-header">
      <h2>{m.target_title()}</h2>
      <p>{m.target_subtitle()}</p>
    </div>

    <div class="target-grid">
      <div class="target-card">
        <div class="target-icon">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"/>
          </svg>
        </div>
        <h3>{m.target_card_1_title()}</h3>
        <p>{m.target_card_1_description()}</p>
        <div class="target-examples">
          <span class="example">{m.target_card_1_example_1()}</span>
          <span class="example">{m.target_card_1_example_2()}</span>
          <span class="example">{m.target_card_1_example_3()}</span>
        </div>
      </div>

      <div class="target-card">
        <div class="target-icon">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <rect x="2" y="3" width="20" height="14" rx="2" ry="2"/>
            <line x1="8" y1="21" x2="16" y2="21"/>
            <line x1="12" y1="17" x2="12" y2="21"/>
          </svg>
        </div>
        <h3>{m.target_card_2_title()}</h3>
        <p>{m.target_card_2_description()}</p>
        <div class="target-examples">
          <span class="example">{m.target_card_2_example_1()}</span>
          <span class="example">{m.target_card_2_example_2()}</span>
          <span class="example">{m.target_card_2_example_3()}</span>
        </div>
      </div>

      <div class="target-card">
        <div class="target-icon">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"/>
          </svg>
        </div>
        <h3>{m.target_card_3_title()}</h3>
        <p>{m.target_card_3_description()}</p>
        <div class="target-examples">
          <span class="example">{m.target_card_3_example_1()}</span>
          <span class="example">{m.target_card_3_example_2()}</span>
          <span class="example">{m.target_card_3_example_3()}</span>
        </div>
      </div>
    </div>
</section>

<style>
  .target {
    padding: 6rem 0;
    background: #0f0f1a;
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
  }

  .target-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
    gap: 2rem;
    margin-bottom: 4rem;
  }

  .target-card {
    background: #1a1a2e;
    padding: 2rem;
    border-radius: 1rem;
    border: 1px solid rgba(102, 126, 234, 0.12);
    transition: all 0.3s ease;
  }

  .target-card:hover {
    transform: translateY(-4px);
    border-color: rgba(102, 126, 234, 0.3);
    box-shadow: 0 0 30px rgba(102, 126, 234, 0.1);
  }

  .target-icon {
    width: 4rem;
    height: 4rem;
    background: rgba(102, 126, 234, 0.15);
    border-radius: 1rem;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: 1.5rem;
    color: #667eea;
  }

  .target-icon svg {
    width: 2rem;
    height: 2rem;
  }

  .target-card h3 {
    font-size: 1.5rem;
    font-weight: 600;
    color: #e2e8f0;
    margin-bottom: 1rem;
    font-family: 'Plus Jakarta Sans', sans-serif;
  }

  .target-card p {
    color: rgba(255, 255, 255, 0.6);
    line-height: 1.6;
    margin-bottom: 1.5rem;
  }

  .target-examples {
    display: flex;
    flex-wrap: wrap;
    gap: 0.5rem;
  }

  .example {
    background: rgba(102, 126, 234, 0.1);
    color: #a5b4fc;
    padding: 0.25rem 0.75rem;
    border-radius: 1rem;
    font-size: 0.875rem;
    font-weight: 500;
    font-family: 'JetBrains Mono', monospace;
  }

  .success-stories {
    background: #1a1a2e;
    padding: 3rem;
    border-radius: 1rem;
    border: 1px solid rgba(102, 126, 234, 0.12);
  }

  .success-stories h3 {
    font-size: 2rem;
    font-weight: 700;
    color: #e2e8f0;
    text-align: center;
    margin-bottom: 2rem;
    font-family: 'Plus Jakarta Sans', sans-serif;
  }

  .stories-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: 2rem;
  }

  .story {
    padding: 1.5rem;
    background: rgba(102, 126, 234, 0.05);
    border-radius: 0.75rem;
    border-left: 4px solid #667eea;
  }

  .story-quote {
    font-style: italic;
    color: rgba(255, 255, 255, 0.6);
    line-height: 1.6;
    margin-bottom: 1rem;
  }

  .story-author {
    color: rgba(255, 255, 255, 0.4);
    font-size: 0.875rem;
  }

  .story-author strong {
    color: #e2e8f0;
  }

  @media (max-width: 768px) {
    .target {
      padding: 4rem 0;
    }

    .section-header h2 {
      font-size: 2rem;
    }

    .target-grid {
      grid-template-columns: 1fr;
    }

    .success-stories {
      padding: 2rem;
    }

    .stories-grid {
      grid-template-columns: 1fr;
    }
  }
</style>
