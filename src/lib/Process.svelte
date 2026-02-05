<script>
  import * as m from '$lib/paraglide/messages';
</script>

<section id="process" class="process">
  <div class="container">
    <div class="section-header">
      <h2>{m.process_title()}</h2>
      <p>{m.process_subtitle()}</p>
    </div>

    <div class="process-timeline">
      <div class="process-step">
        <div class="step-number">1</div>
        <div class="step-content">
          <h3>{m.process_step_1_title()}</h3>
          <p>{m.process_step_1_description()}</p>
          <div class="step-details">
            <span class="detail">{m.process_step_1_detail_1()}</span>
            <span class="detail">{m.process_step_1_detail_2()}</span>
            <span class="detail">{m.process_step_1_detail_3()}</span>
          </div>
        </div>
      </div>

      <div class="process-step">
        <div class="step-number">2</div>
        <div class="step-content">
          <h3>{m.process_step_2_title()}</h3>
          <p>{m.process_step_2_description()}</p>
          <div class="step-details">
            <span class="detail">{m.process_step_2_detail_1()}</span>
            <span class="detail">{m.process_step_2_detail_2()}</span>
            <span class="detail">{m.process_step_2_detail_3()}</span>
          </div>
        </div>
      </div>

      <div class="process-step">
        <div class="step-number">3</div>
        <div class="step-content">
          <h3>{m.process_step_3_title()}</h3>
          <p>{m.process_step_3_description()}</p>
          <div class="step-details">
            <span class="detail">{m.process_step_3_detail_1()}</span>
            <span class="detail">{m.process_step_3_detail_2()}</span>
            <span class="detail">{m.process_step_3_detail_3()}</span>
          </div>
        </div>
      </div>

      <div class="process-step">
        <div class="step-number">4</div>
        <div class="step-content">
          <h3>{m.process_step_4_title()}</h3>
          <p>{m.process_step_4_description()}</p>
          <div class="step-details">
            <span class="detail">{m.process_step_4_detail_1()}</span>
            <span class="detail">{m.process_step_4_detail_2()}</span>
            <span class="detail">{m.process_step_4_detail_3()}</span>
          </div>
        </div>
      </div>
    </div>

    <div class="process-benefits">
      <h3>{m.process_benefits_title()}</h3>
      <div class="benefits-grid">
        <div class="benefit">
          <div class="benefit-icon">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <path d="M9 12l2 2 4-4"/>
              <circle cx="12" cy="12" r="10"/>
            </svg>
          </div>
          <h4>{m.process_benefit_1_title()}</h4>
          <p>{m.process_benefit_1_description()}</p>
        </div>

        <div class="benefit">
          <div class="benefit-icon">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"/>
            </svg>
          </div>
          <h4>{m.process_benefit_2_title()}</h4>
          <p>{m.process_benefit_2_description()}</p>
        </div>

        <div class="benefit">
          <div class="benefit-icon">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
            </svg>
          </div>
          <h4>{m.process_benefit_3_title()}</h4>
          <p>{m.process_benefit_3_description()}</p>
        </div>
      </div>
    </div>
  </div>
</section>

<style>
  .process {
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

  .process-timeline {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    gap: 2rem;
    margin-bottom: 4rem;
  }

  .process-step {
    background: white;
    padding: 2rem;
    border-radius: 1rem;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.05);
    position: relative;
    transition: all 0.3s ease;
  }

  .process-step:hover {
    transform: translateY(-4px);
    box-shadow: 0 20px 40px rgba(0, 0, 0, 0.1);
  }

  .step-number {
    position: absolute;
    top: -1rem;
    left: 2rem;
    width: 2rem;
    height: 2rem;
    background: linear-gradient(135deg, #3b82f6, #1d4ed8);
    color: white;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    font-weight: 700;
    font-size: 1.125rem;
  }

  .step-content h3 {
    font-size: 1.5rem;
    font-weight: 600;
    color: #1f2937;
    margin-bottom: 1rem;
    margin-top: 0.5rem;
  }

  .step-content p {
    color: #6b7280;
    line-height: 1.6;
    margin-bottom: 1.5rem;
  }

  .step-details {
    display: flex;
    flex-wrap: wrap;
    gap: 0.5rem;
  }

  .detail {
    background: #e0e7ff;
    color: #3730a3;
    padding: 0.25rem 0.75rem;
    border-radius: 1rem;
    font-size: 0.875rem;
    font-weight: 500;
  }

  .process-benefits {
    background: white;
    padding: 3rem;
    border-radius: 1rem;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.05);
  }

  .process-benefits h3 {
    font-size: 2rem;
    font-weight: 700;
    color: #1f2937;
    text-align: center;
    margin-bottom: 2rem;
  }

  .benefits-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    gap: 2rem;
  }

  .benefit {
    text-align: center;
  }

  .benefit-icon {
    width: 4rem;
    height: 4rem;
    background: linear-gradient(135deg, #10b981, #059669);
    border-radius: 1rem;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 0 auto 1rem;
    color: white;
  }

  .benefit-icon svg {
    width: 2rem;
    height: 2rem;
  }

  .benefit h4 {
    font-size: 1.25rem;
    font-weight: 600;
    color: #1f2937;
    margin-bottom: 0.5rem;
  }

  .benefit p {
    color: #6b7280;
    line-height: 1.6;
  }

  @media (max-width: 768px) {
    .process {
      padding: 4rem 0;
    }

    .section-header h2 {
      font-size: 2rem;
    }

    .process-timeline {
      grid-template-columns: 1fr;
    }

    .process-benefits {
      padding: 2rem;
    }

    .benefits-grid {
      grid-template-columns: 1fr;
    }
  }
</style>
