<script>
  import * as m from '$lib/paraglide/messages';
</script>

<section id="pricing" class="pricing">
  <div class="container">
    <div class="section-header">
      <h2>{m.pricing_title()}</h2>
      <p>{m.pricing_subtitle()}</p>
    </div>

    <div class="pricing-single">
      <div class="pricing-card">
        <div class="price">
          <span class="currency">€</span>
          <span class="amount">{m.pricing_price()}</span>
          <span class="period">{m.pricing_per_month()}</span>
        </div>

        <div class="features">
          <div class="feature">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <path d="M5 13l4 4L19 7"/>
            </svg>
            {m.pricing_feature_1()}
          </div>
          <div class="feature">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <path d="M5 13l4 4L19 7"/>
            </svg>
            {m.pricing_feature_2()}
          </div>
          <div class="feature">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <path d="M5 13l4 4L19 7"/>
            </svg>
            {m.pricing_feature_3()}
          </div>
          <div class="feature">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <path d="M5 13l4 4L19 7"/>
            </svg>
            {m.pricing_feature_4()}
          </div>
        </div>

        <a href="#contact" class="cta-button">
          {m.pricing_cta()}
        </a>
      </div>
    </div>

    <div class="pricing-note">
      <p>{m.pricing_note_text()}</p>
    </div>
  </div>
</section>

<style>
  .pricing {
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
    margin-bottom: 3rem;
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

  .pricing-single {
    display: flex;
    justify-content: center;
    margin-bottom: 2rem;
  }

  .pricing-card {
    background: #1a1a2e;
    border-radius: 1.5rem;
    padding: 3rem;
    text-align: center;
    max-width: 400px;
    width: 100%;
    border: 1px solid rgba(102, 126, 234, 0.2);
  }

  .price {
    display: flex;
    align-items: baseline;
    justify-content: center;
    margin-bottom: 2.5rem;
  }

  .currency {
    font-size: 2rem;
    font-weight: 600;
    color: #667eea;
    font-family: 'JetBrains Mono', monospace;
  }

  .amount {
    font-size: 4rem;
    font-weight: 700;
    color: #e2e8f0;
    margin: 0 0.25rem;
    line-height: 1;
    font-family: 'JetBrains Mono', monospace;
  }

  .period {
    font-size: 1.25rem;
    color: rgba(255, 255, 255, 0.6);
  }

  .features {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    margin-bottom: 2.5rem;
    text-align: left;
  }

  .feature {
    display: flex;
    align-items: center;
    gap: 0.75rem;
    color: rgba(255, 255, 255, 0.6);
    font-size: 1.1rem;
  }

  .feature svg {
    width: 1.5rem;
    height: 1.5rem;
    color: #667eea;
    flex-shrink: 0;
  }

  .cta-button {
    display: inline-block;
    background: linear-gradient(135deg, #667eea, #0891b2);
    color: white;
    padding: 1rem 2.5rem;
    border-radius: 0.5rem;
    font-weight: 600;
    font-size: 1.1rem;
    text-decoration: none;
    transition: transform 0.2s ease, box-shadow 0.2s ease;
  }

  .cta-button:hover {
    transform: translateY(-2px);
    box-shadow: 0 10px 20px rgba(102, 126, 234, 0.3);
  }

  .pricing-note {
    text-align: center;
  }

  .pricing-note p {
    color: rgba(255, 255, 255, 0.5);
    font-size: 1rem;
    max-width: 500px;
    margin: 0 auto;
  }

  @media (max-width: 768px) {
    .pricing {
      padding: 4rem 0;
    }

    .section-header h2 {
      font-size: 2rem;
    }

    .pricing-card {
      padding: 2rem;
    }

    .amount {
      font-size: 3rem;
    }
  }
</style>
