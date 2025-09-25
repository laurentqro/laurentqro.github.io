<section id="process" class="process">
  <div class="container">
    <div class="section-header">
      <h2>Typical Engagement Process</h2>
      <p>A structured approach to ensure successful outcomes and smooth transitions</p>
    </div>
    
    <div class="process-timeline">
      <div class="process-step">
        <div class="step-number">1</div>
        <div class="step-content">
          <h3>Kickoff</h3>
          <p>Define scope, identify risks, and establish clear success criteria for the engagement.</p>
          <div class="step-details">
            <span class="detail">Project scoping</span>
            <span class="detail">Risk assessment</span>
            <span class="detail">Success metrics</span>
          </div>
        </div>
      </div>
      
      <div class="process-step">
        <div class="step-number">2</div>
        <div class="step-content">
          <h3>Weekly Planning</h3>
          <p>Regular planning sessions to set priorities and make strategic trade-offs.</p>
          <div class="step-details">
            <span class="detail">Priority setting</span>
            <span class="detail">Resource allocation</span>
            <span class="detail">Trade-off decisions</span>
          </div>
        </div>
      </div>
      
      <div class="process-step">
        <div class="step-number">3</div>
        <div class="step-content">
          <h3>Build & Ship</h3>
          <p>Iterative development with regular milestones and continuous delivery.</p>
          <div class="step-details">
            <span class="detail">Iterative development</span>
            <span class="detail">Regular milestones</span>
            <span class="detail">Continuous delivery</span>
          </div>
        </div>
      </div>
      
      <div class="process-step">
        <div class="step-number">4</div>
        <div class="step-content">
          <h3>Handover</h3>
          <p>Seamless transition when you hire in-house, with complete documentation and knowledge transfer.</p>
          <div class="step-details">
            <span class="detail">Documentation</span>
            <span class="detail">Knowledge transfer</span>
            <span class="detail">Team transition</span>
          </div>
        </div>
      </div>
    </div>
    
    <div class="process-benefits">
      <h3>Why This Process Works</h3>
      <div class="benefits-grid">
        <div class="benefit">
          <div class="benefit-icon">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <path d="M9 12l2 2 4-4"/>
              <circle cx="12" cy="12" r="10"/>
            </svg>
          </div>
          <h4>Clear Expectations</h4>
          <p>Everyone knows what success looks like from day one.</p>
        </div>
        
        <div class="benefit">
          <div class="benefit-icon">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"/>
            </svg>
          </div>
          <h4>Fast Iteration</h4>
          <p>Weekly cycles ensure rapid progress and quick course corrections.</p>
        </div>
        
        <div class="benefit">
          <div class="benefit-icon">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
            </svg>
          </div>
          <h4>Smooth Transition</h4>
          <p>Complete handover ensures continuity when you hire full-time.</p>
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