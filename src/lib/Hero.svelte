<script>
  import * as m from '$lib/paraglide/messages';
  import heroImage from '$lib/assets/hero-monaco.jpg';
  function handleAnchorClick(event) {
    event.preventDefault();
    const link = event.currentTarget;
    const anchorId = new URL(link.href).hash.replace('#', '');
    const anchor = document.getElementById(anchorId);

    if (anchor) {
      anchor.scrollIntoView({ behavior: 'smooth' });
    }
  }
</script>

<section class="hero">
  <div class="hero-glow"></div>
  <div class="hero-content">
    <h1 class="hero-title">{m.hero_title()}</h1>
    <p class="hero-subtitle">{m.hero_subtitle()}</p>
  </div>
  <div class="hero-image-wrapper">
    <div class="hero-image-glow"></div>
    <img src={heroImage} alt="Monaco skyline in pixel art style" class="hero-image" />
  </div>
  <div class="hero-actions">
    <a href="#contact" class="cta-primary" onclick={handleAnchorClick}>
      <span class="cta-prompt">$</span> {m.hero_cta_primary()}
    </a>
    <a href="#services" class="cta-secondary" onclick={handleAnchorClick}>{m.hero_cta_secondary()}</a>
  </div>
</section>

<style>
  @import url('https://fonts.googleapis.com/css2?family=JetBrains+Mono:wght@400;700;800&family=Plus+Jakarta+Sans:wght@500;700;800&display=swap');

  .hero {
    background: #0f0f1a;
    color: white;
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 120px 2rem 4rem;
    position: relative;
    overflow: hidden;
  }

  .hero-glow {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 80%;
    height: 60%;
    background: radial-gradient(ellipse at center, rgba(102, 126, 234, 0.12) 0%, rgba(8, 145, 178, 0.06) 40%, transparent 70%);
    pointer-events: none;
  }

  .hero-content {
    text-align: center;
    max-width: 800px;
    margin-bottom: 3rem;
    position: relative;
    z-index: 1;
  }

  .hero-title {
    font-family: 'Plus Jakarta Sans', sans-serif;
    font-size: clamp(2.5rem, 6vw, 4.5rem);
    font-weight: 800;
    line-height: 1.05;
    margin-bottom: 1.25rem;
    background: linear-gradient(135deg, #ffffff 0%, #a5b4fc 50%, #67e8f9 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    letter-spacing: -0.03em;
  }

  .hero-subtitle {
    font-family: 'JetBrains Mono', monospace;
    font-size: clamp(0.85rem, 1.5vw, 1.05rem);
    color: rgba(255, 255, 255, 0.5);
    line-height: 1.7;
    max-width: 600px;
    margin: 0 auto;
    font-weight: 400;
  }

  .hero-image-wrapper {
    position: relative;
    width: 100%;
    max-width: 900px;
    margin-bottom: 3rem;
    z-index: 1;
  }

  .hero-image-glow {
    position: absolute;
    inset: -20px;
    background: radial-gradient(ellipse at center, rgba(102, 126, 234, 0.2) 0%, rgba(8, 145, 178, 0.1) 50%, transparent 70%);
    border-radius: 1.5rem;
    pointer-events: none;
    filter: blur(30px);
  }

  .hero-image {
    width: 100%;
    display: block;
    border-radius: 1rem;
    border: 1px solid rgba(102, 126, 234, 0.2);
    box-shadow:
      0 0 60px rgba(102, 126, 234, 0.15),
      0 0 120px rgba(8, 145, 178, 0.08),
      0 25px 50px rgba(0, 0, 0, 0.5);
    position: relative;
    z-index: 1;
  }

  .hero-actions {
    display: flex;
    gap: 1rem;
    align-items: center;
    position: relative;
    z-index: 1;
  }

  .cta-primary {
    font-family: 'JetBrains Mono', monospace;
    background: linear-gradient(135deg, #667eea 0%, #0891b2 100%);
    color: white;
    padding: 0.875rem 2rem;
    border-radius: 0.5rem;
    text-decoration: none;
    font-weight: 700;
    font-size: 0.95rem;
    transition: all 0.25s ease;
    box-shadow: 0 0 20px rgba(102, 126, 234, 0.3);
  }

  .cta-primary:hover {
    transform: translateY(-2px);
    box-shadow: 0 0 40px rgba(102, 126, 234, 0.5);
  }

  .cta-prompt {
    opacity: 0.6;
    margin-right: 0.25rem;
  }

  .cta-secondary {
    font-family: 'JetBrains Mono', monospace;
    color: rgba(255, 255, 255, 0.5);
    text-decoration: none;
    font-weight: 500;
    font-size: 0.9rem;
    padding: 0.875rem 1.5rem;
    border-radius: 0.5rem;
    border: 1px solid rgba(255, 255, 255, 0.1);
    transition: all 0.25s ease;
  }

  .cta-secondary:hover {
    color: rgba(255, 255, 255, 0.8);
    border-color: rgba(255, 255, 255, 0.25);
    background: rgba(255, 255, 255, 0.03);
  }

  @media (max-width: 768px) {
    .hero {
      padding: 100px 1.25rem 3rem;
    }

    .hero-content {
      margin-bottom: 2rem;
    }

    .hero-subtitle {
      font-size: 0.85rem;
    }

    .hero-actions {
      flex-direction: column;
      width: 100%;
      max-width: 320px;
    }

    .cta-primary, .cta-secondary {
      text-align: center;
      width: 100%;
    }
  }
</style>
