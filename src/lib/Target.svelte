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
  }

  .target-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
    gap: 2rem;
    margin-bottom: 4rem;
  }

  .target-card {
    background: white;
    padding: 2rem;
    border-radius: 1rem;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.05);
    transition: all 0.3s ease;
  }

  .target-card:hover {
    transform: translateY(-4px);
    box-shadow: 0 20px 40px rgba(0, 0, 0, 0.1);
  }

  .target-icon {
    width: 4rem;
    height: 4rem;
    background: linear-gradient(135deg, #8b5cf6, #7c3aed);
    border-radius: 1rem;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: 1.5rem;
    color: white;
  }

  .target-icon svg {
    width: 2rem;
    height: 2rem;
  }

  .target-card h3 {
    font-size: 1.5rem;
    font-weight: 600;
    color: #1f2937;
    margin-bottom: 1rem;
  }

  .target-card p {
    color: #6b7280;
    line-height: 1.6;
    margin-bottom: 1.5rem;
  }

  .target-examples {
    display: flex;
    flex-wrap: wrap;
    gap: 0.5rem;
  }

  .example {
    background: #e0e7ff;
    color: #3730a3;
    padding: 0.25rem 0.75rem;
    border-radius: 1rem;
    font-size: 0.875rem;
    font-weight: 500;
  }

  .success-stories {
    background: white;
    padding: 3rem;
    border-radius: 1rem;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.05);
  }

  .success-stories h3 {
    font-size: 2rem;
    font-weight: 700;
    color: #1f2937;
    text-align: center;
    margin-bottom: 2rem;
  }

  .stories-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: 2rem;
  }

  .story {
    padding: 1.5rem;
    background: #f8fafc;
    border-radius: 0.75rem;
    border-left: 4px solid #3b82f6;
  }

  .story-quote {
    font-style: italic;
    color: #374151;
    line-height: 1.6;
    margin-bottom: 1rem;
  }

  .story-author {
    color: #6b7280;
    font-size: 0.875rem;
  }

  .story-author strong {
    color: #1f2937;
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
