<script>
  let isMenuOpen = false;

  function toggleMenu() {
    isMenuOpen = !isMenuOpen;
  }

  function handleAnchorClick(event) {
    event.preventDefault();
    const link = event.currentTarget;
    const anchorId = new URL(link.href).hash.replace('#', '');
    const anchor = document.getElementById(anchorId);

    if (anchor) {
      // Add offset for navigation spacing and use slower scrolling
      const offsetTop = anchor.offsetTop - 80;

      // Custom smooth scroll with slower timing
      const startPosition = window.pageYOffset;
      const distance = offsetTop - startPosition;
      const duration = 1200; // 1.2 seconds
      let start = null;

      function animation(currentTime) {
        if (start === null) start = currentTime;
        const timeElapsed = currentTime - start;
        const run = ease(timeElapsed, startPosition, distance, duration);
        window.scrollTo(0, run);
        if (timeElapsed < duration) requestAnimationFrame(animation);
      }

      // Easing function for smoother animation
      function ease(t, b, c, d) {
        t /= d / 2;
        if (t < 1) return c / 2 * t * t + b;
        t--;
        return -c / 2 * (t * (t - 2) - 1) + b;
      }

      requestAnimationFrame(animation);
    }
  }
</script>

<section class="hero">
  <nav class="nav">
    <div class="nav-container">
      <div class="logo">
        <span class="logo-text">Fractional CTO</span>
      </div>
      <div class="nav-links">
        <a href="#services" on:click={handleAnchorClick}>Services</a>
        <a href="#pricing" on:click={handleAnchorClick}>Pricing</a>
        <a href="#contact" class="cta-button" on:click={handleAnchorClick}>Get Started</a>
      </div>
    </div>
  </nav>
  
  <div class="hero-content">
    <div class="hero-text">
      <h1>Your Technical Co-Founder, On-Demand</h1>
      <p class="hero-subtitle">
        Get senior engineering leadership without the full-time commitment. 
        Build better products, make smarter tech decisions, and scale your team effectively.
      </p>
      <div class="hero-buttons">
        <a href="#contact" class="primary-button" on:click={handleAnchorClick}>Book a Call</a>
        <a href="#services" class="secondary-button" on:click={handleAnchorClick}>Learn More</a>
      </div>
    </div>
    <div class="hero-visual">
      <div class="code-window">
        <div class="window-header">
          <div class="window-controls">
            <span class="control red"></span>
            <span class="control yellow"></span>
            <span class="control green"></span>
          </div>
          <span class="window-title">strategy.js</span>
        </div>
        <div class="code-content">
          <div class="code-line"><span class="punctuation">&#123;</span>
          </div>
          <div class="code-line indent">
            <span class="property">mvp</span>: <span class="string">'build fast'</span>,
          </div>
          <div class="code-line indent">
            <span class="property">architecture</span>: <span class="string">'scale ready'</span>,
          </div>
          <div class="code-line indent">
            <span class="property">team</span>: <span class="string">'grow smart'</span>
          </div>
          <div class="code-line"><span class="punctuation">&#125;</span></div>
        </div>
      </div>
    </div>
  </div>
</section>

<style>
  .hero {
    background: linear-gradient(135deg, #667eea 0%, #0891b2 100%);
    color: white;
    min-height: 100vh;
    display: flex;
    flex-direction: column;
  }
  
  .nav {
    padding: 1rem 0;
    position: relative;
    z-index: 10;
  }
  
  .nav-container {
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 2rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  
  .logo-text {
    font-size: 1.5rem;
    font-weight: 700;
  }
  
  .nav-links {
    display: flex;
    gap: 2rem;
    align-items: center;
  }
  
  .nav-links a {
    color: white;
    text-decoration: none;
    font-weight: 500;
    transition: opacity 0.2s;
  }
  
  .nav-links a:hover {
    opacity: 0.8;
  }
  
  .cta-button {
    background: rgba(255, 255, 255, 0.2);
    padding: 0.5rem 1rem;
    border-radius: 0.5rem;
    backdrop-filter: blur(10px);
  }
  
  .hero-content {
    flex: 1;
    max-width: 1200px;
    margin: 0 auto;
    padding: 4rem 2rem;
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 4rem;
    align-items: center;
  }
  
  .hero-text h1 {
    font-size: 3.5rem;
    font-weight: 800;
    line-height: 1.1;
    margin-bottom: 1.5rem;
  }
  
  .hero-subtitle {
    font-size: 1.25rem;
    opacity: 0.9;
    margin-bottom: 2rem;
    line-height: 1.6;
  }
  
  .hero-buttons {
    display: flex;
    gap: 1rem;
  }
  
  .primary-button, .secondary-button {
    padding: 1rem 2rem;
    border-radius: 0.5rem;
    text-decoration: none;
    font-weight: 600;
    transition: all 0.2s;
    display: inline-block;
  }
  
  .primary-button {
    background: white;
    color: #667eea;
  }
  
  .primary-button:hover {
    transform: translateY(-2px);
    box-shadow: 0 10px 25px rgba(0, 0, 0, 0.2);
  }
  
  .secondary-button {
    background: transparent;
    color: white;
    border: 2px solid rgba(255, 255, 255, 0.3);
  }
  
  .secondary-button:hover {
    background: rgba(255, 255, 255, 0.1);
  }
  
  .code-window {
    background: #1e1e1e;
    border-radius: 0.75rem;
    overflow: hidden;
    box-shadow: 0 20px 40px rgba(0, 0, 0, 0.3);
  }
  
  .window-header {
    background: #2d2d2d;
    padding: 1rem;
    display: flex;
    align-items: center;
    gap: 1rem;
  }
  
  .window-controls {
    display: flex;
    gap: 0.5rem;
  }
  
  .control {
    width: 12px;
    height: 12px;
    border-radius: 50%;
  }
  
  .control.red { background: #ff5f57; }
  .control.yellow { background: #ffbd2e; }
  .control.green { background: #28ca42; }
  
  .window-title {
    color: #888;
    font-size: 0.875rem;
  }
  
  .code-content {
    padding: 1.5rem;
    font-family: 'Fira Code', monospace;
    font-size: 0.875rem;
    line-height: 1.6;
  }
  
  .code-line {
  }
  
  @media (max-width: 768px) {
    .hero-content {
      grid-template-columns: 1fr;
      gap: 2rem;
      text-align: center;
    }
    
    .hero-text h1 {
      font-size: 2.5rem;
    }
    
    .hero-buttons {
      justify-content: center;
    }
    
    .nav-links {
      display: none;
    }
  }
</style>