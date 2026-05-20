<script>
  import * as m from '$lib/paraglide/messages';
</script>

<section class="mission">
  <div class="container">
    <div class="eyebrow">{m.mission_eyebrow()}</div>
    <blockquote class="quote">
      <p>{m.mission_quote()}</p>
    </blockquote>
    <div class="attribution">{m.mission_attribution()}</div>
  </div>
</section>

<style>
  .mission {
    background: #141422;
    padding: 8rem 2rem;
    border-top: 1px solid rgba(255, 255, 255, 0.04);
    border-bottom: 1px solid rgba(255, 255, 255, 0.04);
  }

  .container {
    max-width: 900px;
    margin: 0 auto;
    text-align: center;
  }

  .eyebrow {
    font-family: 'JetBrains Mono', monospace;
    font-size: 0.75rem;
    color: rgba(255, 255, 255, 0.4);
    text-transform: uppercase;
    letter-spacing: 0.15em;
    margin-bottom: 2.5rem;
  }

  .quote {
    margin: 0 0 2rem;
    padding: 0;
  }

  .quote p {
    font-family: 'Plus Jakarta Sans', sans-serif;
    font-size: clamp(1.5rem, 3vw, 2.25rem);
    font-weight: 700;
    color: #f5f5fa;
    line-height: 1.3;
    letter-spacing: -0.02em;
    margin: 0;
  }

  .attribution {
    font-family: 'JetBrains Mono', monospace;
    font-size: 0.85rem;
    color: rgba(165, 180, 252, 0.7);
    letter-spacing: 0.02em;
  }

  @media (max-width: 700px) {
    .mission { padding: 5rem 1.5rem; }
  }
</style>
