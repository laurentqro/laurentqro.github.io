<script>
  import * as m from '$lib/paraglide/messages';
</script>

<section id="pricing" class="pricing">
  <div class="container">
    <div class="section-header">
      <h2>{m.pricing_title()}</h2>
      <p>{m.pricing_subtitle()}</p>
    </div>

    <div class="pricing-grid">
      <div class="pricing-card">
        <div class="pricing-header">
          <h3>{m.pricing_tier_1_title()}</h3>
          <div class="commitment">{m.pricing_tier_1_commitment()}</div>
        </div>
        <div class="pricing-body">
          <div class="price">
            <span class="currency">€</span>
            <span class="amount">{m.pricing_tier_1_price()}</span>
            <span class="period">{m.pricing_per_month()}</span>
          </div>
          <div class="features">
            <div class="feature">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <path d="M9 12l2 2 4-4"/>
                <circle cx="12" cy="12" r="10"/>
              </svg>
              {m.pricing_tier_1_feature_1()}
            </div>
            <div class="feature">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <path d="M9 12l2 2 4-4"/>
                <circle cx="12" cy="12" r="10"/>
              </svg>
              {m.pricing_tier_1_feature_2()}
            </div>
            <div class="feature">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <path d="M9 12l2 2 4-4"/>
                <circle cx="12" cy="12" r="10"/>
              </svg>
              {m.pricing_tier_1_feature_3()}
            </div>
            <div class="feature">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <path d="M9 12l2 2 4-4"/>
                <circle cx="12" cy="12" r="10"/>
              </svg>
              {m.pricing_tier_1_feature_4()}
            </div>
          </div>
        </div>
      </div>

      <div class="pricing-card featured">
        <div class="popular-badge">{m.pricing_popular()}</div>
        <div class="pricing-header">
          <h3>{m.pricing_tier_2_title()}</h3>
          <div class="commitment">{m.pricing_tier_2_commitment()}</div>
        </div>
        <div class="pricing-body">
          <div class="price">
            <span class="currency">€</span>
            <span class="amount">{m.pricing_tier_2_price()}</span>
            <span class="period">{m.pricing_per_month()}</span>
          </div>
          <div class="features">
            <div class="feature">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <path d="M9 12l2 2 4-4"/>
                <circle cx="12" cy="12" r="10"/>
              </svg>
              {m.pricing_tier_2_feature_1()}
            </div>
            <div class="feature">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <path d="M9 12l2 2 4-4"/>
                <circle cx="12" cy="12" r="10"/>
              </svg>
              {m.pricing_tier_2_feature_2()}
            </div>
            <div class="feature">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <path d="M9 12l2 2 4-4"/>
                <circle cx="12" cy="12" r="10"/>
              </svg>
              {m.pricing_tier_2_feature_3()}
            </div>
            <div class="feature">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <path d="M9 12l2 2 4-4"/>
                <circle cx="12" cy="12" r="10"/>
              </svg>
              {m.pricing_tier_2_feature_4()}
            </div>
            <div class="feature">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <path d="M9 12l2 2 4-4"/>
                <circle cx="12" cy="12" r="10"/>
              </svg>
              {m.pricing_tier_2_feature_5()}
            </div>
          </div>
        </div>
      </div>

      <div class="pricing-card">
        <div class="pricing-header">
          <h3>{m.pricing_tier_3_title()}</h3>
          <div class="commitment">{m.pricing_tier_3_commitment()}</div>
        </div>
        <div class="pricing-body">
          <div class="price">
            <span class="currency">€</span>
            <span class="amount">{m.pricing_tier_3_price()}</span>
            <span class="period">{m.pricing_per_month()}</span>
          </div>
          <div class="features">
            <div class="feature">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <path d="M9 12l2 2 4-4"/>
                <circle cx="12" cy="12" r="10"/>
              </svg>
              {m.pricing_tier_3_feature_1()}
            </div>
            <div class="feature">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <path d="M9 12l2 2 4-4"/>
                <circle cx="12" cy="12" r="10"/>
              </svg>
              {m.pricing_tier_3_feature_2()}
            </div>
            <div class="feature">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <path d="M9 12l2 2 4-4"/>
                <circle cx="12" cy="12" r="10"/>
              </svg>
              {m.pricing_tier_3_feature_3()}
            </div>
            <div class="feature">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <path d="M9 12l2 2 4-4"/>
                <circle cx="12" cy="12" r="10"/>
              </svg>
              {m.pricing_tier_3_feature_4()}
            </div>
            <div class="feature">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <path d="M9 12l2 2 4-4"/>
                <circle cx="12" cy="12" r="10"/>
              </svg>
              {m.pricing_tier_3_feature_5()}
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="pricing-note">
      <div class="note-content">
        <h4>{m.pricing_note_title()}</h4>
        <p>{m.pricing_note_text()}</p>
      </div>
    </div>
  </div>
</section>

<style>
  .pricing {
    padding: 6rem 0;
    background: white;
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

  .pricing-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
    gap: 2rem;
    margin-bottom: 3rem;
  }

  .pricing-card {
    background: white;
    border: 2px solid #e5e7eb;
    border-radius: 1rem;
    padding: 2rem;
    position: relative;
    transition: all 0.3s ease;
  }

  .pricing-card:hover {
    transform: translateY(-4px);
    box-shadow: 0 20px 40px rgba(0, 0, 0, 0.1);
  }

  .pricing-card.featured {
    border-color: #3b82f6;
    background: linear-gradient(135deg, #667eea, #0891b2);
    color: white;
    transform: scale(1.05);
  }

  .pricing-card.featured:hover {
    transform: scale(1.05) translateY(-4px);
  }

  .popular-badge {
    position: absolute;
    top: -12px;
    left: 50%;
    transform: translateX(-50%);
    background: #10b981;
    color: white;
    padding: 0.5rem 1rem;
    border-radius: 2rem;
    font-size: 0.875rem;
    font-weight: 600;
  }

  .pricing-header h3 {
    font-size: 1.5rem;
    font-weight: 700;
    color: #1f2937;
    margin-bottom: 0.5rem;
  }

  .pricing-card.featured .pricing-header h3 {
    color: white;
  }

  .commitment {
    font-size: 0.875rem;
    color: #6b7280;
    margin-bottom: 2rem;
  }

  .pricing-card.featured .commitment {
    color: rgba(255, 255, 255, 0.8);
  }

  .price {
    display: flex;
    align-items: baseline;
    margin-bottom: 2rem;
  }

  .currency {
    font-size: 1.5rem;
    font-weight: 600;
    color: #6b7280;
  }

  .amount {
    font-size: 3rem;
    font-weight: 700;
    color: #1f2937;
    margin: 0 0.25rem;
  }

  .period {
    font-size: 1rem;
    color: #6b7280;
  }

  .pricing-card.featured .currency,
  .pricing-card.featured .amount,
  .pricing-card.featured .period {
    color: white;
  }

  .features {
    display: flex;
    flex-direction: column;
    gap: 1rem;
  }

  .feature {
    display: flex;
    align-items: center;
    gap: 0.75rem;
    color: #374151;
  }

  .pricing-card.featured .feature {
    color: white;
  }

  .feature svg {
    width: 1.25rem;
    height: 1.25rem;
    color: #10b981;
    flex-shrink: 0;
  }

  .pricing-card.featured .feature svg {
    color: rgba(255, 255, 255, 0.8);
  }

  .pricing-note {
    background: #f8fafc;
    border-radius: 1rem;
    padding: 2rem;
    text-align: center;
  }

  .note-content h4 {
    font-size: 1.25rem;
    font-weight: 600;
    color: #1f2937;
    margin-bottom: 0.5rem;
  }

  .note-content p {
    color: #6b7280;
    line-height: 1.6;
    max-width: 600px;
    margin: 0 auto;
  }

  @media (max-width: 768px) {
    .pricing {
      padding: 4rem 0;
    }

    .section-header h2 {
      font-size: 2rem;
    }

    .pricing-grid {
      grid-template-columns: 1fr;
    }

    .pricing-card.featured {
      transform: none;
    }

    .pricing-card.featured:hover {
      transform: translateY(-4px);
    }
  }
</style>
