<script>
  import logo from '$lib/assets/logo.svg';
  
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

<nav class="nav">
  <div class="nav-container">
    <div class="logo">
      <img src={logo} alt="Laurent Curau Logo" class="logo-icon" />
      <span class="logo-text">Laurent Curau</span>
    </div>
    <div class="nav-links">
      <a href="#services" on:click={handleAnchorClick}>Services</a>
      <a href="#pricing" on:click={handleAnchorClick}>Pricing</a>
      <a href="#contact" class="cta-button" on:click={handleAnchorClick}>Get Started</a>
    </div>
  </div>
</nav>

<style>
  .nav {
    background: white;
    padding: 1rem 0;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    z-index: 100;
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  }
  
  .nav-container {
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 2rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  
  .logo {
    display: flex;
    align-items: center;
    gap: 0.75rem;
  }
  
  .logo-icon {
    width: 32px;
    height: 32px;
  }
  
  .logo-text {
    font-size: 1.5rem;
    font-weight: 700;
    color: #1a202c;
  }
  
  .nav-links {
    display: flex;
    gap: 2rem;
    align-items: center;
  }
  
  .nav-links a {
    color: #4a5568;
    text-decoration: none;
    font-weight: 500;
    transition: color 0.2s;
  }
  
  .nav-links a:hover {
    color: #667eea;
  }
  
  .cta-button {
    background: linear-gradient(135deg, #667eea 0%, #0891b2 100%);
    color: white !important;
    padding: 0.5rem 1rem;
    border-radius: 0.5rem;
    transition: transform 0.2s;
  }
  
  .cta-button:hover {
    transform: translateY(-1px);
    color: white !important;
  }
  
  @media (max-width: 768px) {
    .nav-links {
      display: none;
    }
  }
</style>
