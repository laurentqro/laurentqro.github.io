<section id="services" class="services">
  <div class="container">
    <div class="section-header">
      <h2>How I Help You Succeed</h2>
      <p>Comprehensive technical leadership across all aspects of your product development</p>
    </div>
    
    <div class="services-grid">
      <div class="service-card">
        <div class="service-icon">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"/>
          </svg>
        </div>
        <h3>Build MVPs & Internal Tools</h3>
        <p>Rapid development of minimum viable products and internal tools that solve real business problems efficiently.</p>
      </div>
      
      <div class="service-card">
        <div class="service-icon">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
          </svg>
        </div>
        <h3>Tech Stack & Architecture</h3>
        <p>Choose the right technology stack and system architecture that scales with your business needs.</p>
      </div>
      
      <div class="service-card">
        <div class="service-icon">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"/>
            <rect x="8" y="2" width="8" height="4" rx="1" ry="1"/>
          </svg>
        </div>
        <h3>Mentor & Upskill Developers</h3>
        <p>Level up your existing development team through code reviews, best practices, and hands-on mentoring.</p>
      </div>
      
      <div class="service-card">
        <div class="service-icon">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/>
            <circle cx="9" cy="7" r="4"/>
            <path d="M22 21v-2a4 4 0 0 0-3-3.87"/>
            <path d="M16 3.13a4 4 0 0 1 0 7.75"/>
          </svg>
        </div>
        <h3>Help Recruit Engineers</h3>
        <p>Define technical roles, interview candidates, and build your engineering team with the right talent.</p>
      </div>
      
      <div class="service-card">
        <div class="service-icon">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"/>
          </svg>
        </div>
        <h3>CI/CD & Testing Setup</h3>
        <p>Implement continuous integration, deployment pipelines, and testing frameworks for long-term maintainability.</p>
      </div>
      
      <div class="service-card featured">
        <div class="service-icon">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <path d="M9 11H5a2 2 0 0 0-2 2v7a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7a2 2 0 0 0-2-2h-4"/>
            <polyline points="9,11 12,14 15,11"/>
            <line x1="12" y1="2" x2="12" y2="14"/>
          </svg>
        </div>
        <h3>Complete Handover Process</h3>
        <p>Seamless transition when you hire in-house, with full documentation and knowledge transfer to ensure continuity.</p>
      </div>
    </div>
  </div>
</section>

<style>
  .services {
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
  
  .services-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
    gap: 2rem;
  }
  
  .service-card {
    background: white;
    padding: 2rem;
    border-radius: 1rem;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.05);
    transition: all 0.3s ease;
    position: relative;
    overflow: hidden;
  }
  
  .service-card:hover {
    transform: translateY(-8px);
    box-shadow: 0 20px 40px rgba(0, 0, 0, 0.1);
  }
  
  .service-card.featured {
    background: linear-gradient(135deg, #667eea, #764ba2);
    color: white;
  }
  
  .service-card.featured .service-icon {
    background: rgba(255, 255, 255, 0.2);
    color: white;
  }
  
  .service-card.featured h3,
  .service-card.featured p {
    color: white;
  }
  
  .service-icon {
    width: 4rem;
    height: 4rem;
    background: linear-gradient(135deg, #3b82f6, #1d4ed8);
    border-radius: 1rem;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: 1.5rem;
    color: white;
  }
  
  .service-icon svg {
    width: 2rem;
    height: 2rem;
  }
  
  .service-card h3 {
    font-size: 1.5rem;
    font-weight: 600;
    color: #1f2937;
    margin-bottom: 1rem;
  }
  
  .service-card p {
    color: #6b7280;
    line-height: 1.6;
  }
  
  .service-card::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 4px;
    background: linear-gradient(90deg, #3b82f6, #8b5cf6, #06b6d4);
    opacity: 0;
    transition: opacity 0.3s ease;
  }
  
  .service-card:hover::before {
    opacity: 1;
  }
  
  .service-card.featured::before {
    opacity: 0;
  }
  
  @media (max-width: 768px) {
    .services {
      padding: 4rem 0;
    }
    
    .section-header h2 {
      font-size: 2rem;
    }
    
    .services-grid {
      grid-template-columns: 1fr;
    }
  }
</style>