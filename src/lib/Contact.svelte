<section id="contact" class="contact">
  <div class="container">
    <div class="contact-content">
      <div class="contact-text">
        <h2>Ready to Get Started?</h2>
        <p class="contact-subtitle">
          Send a short note about your product, stage, and goals. Let's discuss how fractional CTO services can accelerate your success.
        </p>
        
        <div class="contact-methods">
          <a href="mailto:hello@yourdomain.com" class="contact-method">
            <div class="method-icon">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
                <polyline points="22,6 12,13 2,6"/>
              </svg>
            </div>
            <div class="method-content">
              <h3>Email</h3>
              <p>hello@yourdomain.com</p>
            </div>
          </a>
          
          <a href="https://cal.com/your-handle" target="_blank" rel="noopener noreferrer" class="contact-method">
            <div class="method-icon">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <rect x="3" y="4" width="18" height="18" rx="2" ry="2"/>
                <line x1="16" y1="2" x2="16" y2="6"/>
                <line x1="8" y1="2" x2="8" y2="6"/>
                <line x1="3" y1="10" x2="21" y2="10"/>
              </svg>
            </div>
            <div class="method-content">
              <h3>Calendar</h3>
              <p>Book a call</p>
            </div>
          </a>
        </div>
        
        <div class="response-time">
          <div class="response-icon">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <circle cx="12" cy="12" r="10"/>
              <polyline points="12,6 12,12 16,14"/>
            </svg>
          </div>
          <p>Typical response time: <strong>24 hours</strong></p>
        </div>
      </div>
      
      <div class="contact-form">
        <form class="form">
          <div class="form-group">
            <label for="name">Name</label>
            <input type="text" id="name" name="name" required>
          </div>
          
          <div class="form-group">
            <label for="email">Email</label>
            <input type="email" id="email" name="email" required>
          </div>
          
          <div class="form-group">
            <label for="company">Company</label>
            <input type="text" id="company" name="company">
          </div>
          
          <div class="form-group">
            <label for="stage">Company Stage</label>
            <select id="stage" name="stage">
              <option value="">Select stage</option>
              <option value="pre-seed">Pre-seed</option>
              <option value="seed">Seed</option>
              <option value="series-a">Series A</option>
              <option value="sme">SME</option>
              <option value="established">Established</option>
            </select>
          </div>
          
          <div class="form-group">
            <label for="message">Tell me about your product and goals</label>
            <textarea id="message" name="message" rows="4" placeholder="What are you building? What challenges are you facing? What are your goals?" required></textarea>
          </div>
          
          <button type="submit" class="submit-button">
            Send Message
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <line x1="22" y1="2" x2="11" y2="13"/>
              <polygon points="22,2 15,22 11,13 2,9 22,2"/>
            </svg>
          </button>
        </form>
      </div>
    </div>
  </div>
</section>

<style>
  .contact {
    padding: 6rem 0;
    background: white;
  }
  
  .container {
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 2rem;
  }
  
  .contact-content {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 4rem;
    align-items: start;
  }
  
  .contact-text h2 {
    font-size: 2.5rem;
    font-weight: 700;
    color: #1f2937;
    margin-bottom: 1rem;
  }
  
  .contact-subtitle {
    font-size: 1.25rem;
    color: #6b7280;
    line-height: 1.6;
    margin-bottom: 2rem;
  }
  
  .contact-methods {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    margin-bottom: 2rem;
  }
  
  .contact-method {
    display: flex;
    align-items: center;
    gap: 1rem;
    padding: 1rem;
    background: #f8fafc;
    border-radius: 0.75rem;
    text-decoration: none;
    transition: all 0.2s;
  }
  
  .contact-method:hover {
    background: #e0e7ff;
    transform: translateX(4px);
  }
  
  .method-icon {
    width: 3rem;
    height: 3rem;
    background: linear-gradient(135deg, #3b82f6, #1d4ed8);
    border-radius: 0.75rem;
    display: flex;
    align-items: center;
    justify-content: center;
    color: white;
    flex-shrink: 0;
  }
  
  .method-icon svg {
    width: 1.5rem;
    height: 1.5rem;
  }
  
  .method-content h3 {
    font-size: 1.125rem;
    font-weight: 600;
    color: #1f2937;
    margin-bottom: 0.25rem;
  }
  
  .method-content p {
    color: #6b7280;
    margin: 0;
  }
  
  .response-time {
    display: flex;
    align-items: center;
    gap: 0.75rem;
    padding: 1rem;
    background: #ecfdf5;
    border-radius: 0.75rem;
    border: 1px solid #d1fae5;
  }
  
  .response-icon {
    color: #10b981;
  }
  
  .response-icon svg {
    width: 1.25rem;
    height: 1.25rem;
  }
  
  .response-time p {
    color: #374151;
    margin: 0;
  }
  
  .contact-form {
    background: #f8fafc;
    padding: 2rem;
    border-radius: 1rem;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.05);
  }
  
  .form {
    display: flex;
    flex-direction: column;
    gap: 1.5rem;
  }
  
  .form-group {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
  }
  
  .form-group label {
    font-weight: 600;
    color: #374151;
  }
  
  .form-group input,
  .form-group select,
  .form-group textarea {
    padding: 0.75rem;
    border: 2px solid #e5e7eb;
    border-radius: 0.5rem;
    font-size: 1rem;
    transition: border-color 0.2s;
    background: white;
  }
  
  .form-group input:focus,
  .form-group select:focus,
  .form-group textarea:focus {
    outline: none;
    border-color: #3b82f6;
  }
  
  .form-group textarea {
    resize: vertical;
    min-height: 100px;
  }
  
  .submit-button {
    background: linear-gradient(135deg, #3b82f6, #1d4ed8);
    color: white;
    padding: 1rem 2rem;
    border: none;
    border-radius: 0.5rem;
    font-size: 1rem;
    font-weight: 600;
    cursor: pointer;
    transition: all 0.2s;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.5rem;
  }
  
  .submit-button:hover {
    transform: translateY(-2px);
    box-shadow: 0 10px 25px rgba(59, 130, 246, 0.3);
  }
  
  .submit-button svg {
    width: 1.25rem;
    height: 1.25rem;
  }
  
  @media (max-width: 768px) {
    .contact {
      padding: 4rem 0;
    }
    
    .contact-content {
      grid-template-columns: 1fr;
      gap: 2rem;
    }
    
    .contact-text h2 {
      font-size: 2rem;
    }
    
    .contact-form {
      padding: 1.5rem;
    }
  }
</style>