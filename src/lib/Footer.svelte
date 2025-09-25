<script>
  import * as m from '$lib/paraglide/messages';
  const currentYear = new Date().getFullYear();
</script>

<footer class="footer">
  <div class="container">
    <div class="footer-content">
      <div class="footer-brand">
        <h3>Laurent Curau</h3>
        <p>{m.footer_brand_description()}</p>
        <br />
        <p>{m.footer_address_line_1()}<br />
          {m.footer_address_line_2()}
        </p>
      </div>

      <div class="footer-links">
        <div class="link-group">
          <h4>Services</h4>
          <a href="#services">MVP Development</a>
          <a href="#services">Tech Strategy</a>
          <a href="#services">Team Building</a>
          <a href="#services">Architecture</a>
        </div>

        <div class="link-group">
          <h4>Company</h4>
          <a href="#target">Who We Help</a>
          <a href="#pricing">Pricing</a>
          <a href="#process">Process</a>
          <a href="#contact">Contact</a>
        </div>

        <div class="link-group">
          <h4>Connect</h4>
          <a href="mailto:hello@laurentcurau.com">Email</a>
          <a href="https://cal.com/laurentcurau" target="_blank" rel="noopener noreferrer">Book a Call</a>
          <a href="https://linkedin.com/in/laurentcurau" target="_blank" rel="noopener noreferrer">LinkedIn</a>
        </div>
      </div>
    </div>

    <div class="footer-bottom">
      <div class="footer-divider"></div>
      <div class="footer-copyright">
        <p>&copy; {currentYear} Laurent Curau. {m.footer_copyright()}</p>
        <div class="footer-legal">
          <a href="/privacy">{m.footer_links_privacy()}</a>
          <a href="/terms">{m.footer_links_terms()}</a>
        </div>
      </div>
    </div>
  </div>
</footer>

<style>
  .footer {
    background: #1f2937;
    color: white;
    padding: 4rem 0 2rem;
  }
  
  .container {
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 2rem;
  }
  
  .footer-content {
    display: grid;
    grid-template-columns: 1fr 2fr;
    gap: 4rem;
    margin-bottom: 3rem;
  }
  
  .footer-brand h3 {
    font-size: 1.5rem;
    font-weight: 700;
    margin-bottom: 1rem;
    color: white;
  }
  
  .footer-brand p {
    color: #9ca3af;
    line-height: 1.6;
  }
  
  .footer-links {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 2rem;
  }
  
  .link-group h4 {
    font-size: 1.125rem;
    font-weight: 600;
    margin-bottom: 1rem;
    color: white;
  }
  
  .link-group a {
    display: block;
    color: #9ca3af;
    text-decoration: none;
    margin-bottom: 0.75rem;
    transition: color 0.2s;
  }
  
  .link-group a:hover {
    color: #3b82f6;
  }
  
  .footer-bottom {
    margin-top: 2rem;
  }
  
  .footer-divider {
    height: 1px;
    background: #374151;
    margin-bottom: 2rem;
  }
  
  .footer-copyright {
    display: flex;
    justify-content: space-between;
    align-items: center;
    color: #9ca3af;
    font-size: 0.875rem;
  }
  
  .footer-legal {
    display: flex;
    gap: 2rem;
  }
  
  .footer-legal a {
    color: #9ca3af;
    text-decoration: none;
    transition: color 0.2s;
  }
  
  .footer-legal a:hover {
    color: #3b82f6;
  }
  
  @media (max-width: 768px) {
    .footer {
      padding: 3rem 0 2rem;
    }
    
    .footer-content {
      grid-template-columns: 1fr;
      gap: 2rem;
    }
    
    .footer-links {
      grid-template-columns: 1fr;
      gap: 1.5rem;
    }
    
    .footer-copyright {
      flex-direction: column;
      gap: 1rem;
      text-align: center;
    }
    
    .footer-legal {
      justify-content: center;
    }
  }
</style>