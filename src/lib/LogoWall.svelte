<script>
  import * as m from '$lib/paraglide/messages';

  const clients = [
    { name: 'Afida', href: 'https://afida.com' },
    { name: 'Agence de la Gare', href: 'https://www.agencegaremonaco.com' },
    { name: 'Christian Curau Architecte', href: 'https://cca-mc.com' }
  ];
</script>

<section class="logo-wall">
  <div class="container">
    <div class="label">{m.trust_label()}</div>
    <div class="logos">
      {#each clients as c}
        <a href={c.href} target="_blank" rel="noopener noreferrer" class="logo">
          {c.name}
        </a>
      {/each}
    </div>
  </div>
</section>

<style>
  .logo-wall {
    background: #0f0f1a;
    padding: 2.5rem 2rem;
    border-top: 1px solid rgba(255, 255, 255, 0.06);
    border-bottom: 1px solid rgba(255, 255, 255, 0.06);
  }

  .container {
    max-width: 1200px;
    margin: 0 auto;
    display: flex;
    align-items: center;
    gap: 3rem;
    flex-wrap: wrap;
  }

  .label {
    font-family: 'JetBrains Mono', monospace;
    font-size: 0.72rem;
    color: rgba(255, 255, 255, 0.35);
    text-transform: uppercase;
    letter-spacing: 0.15em;
    flex-shrink: 0;
  }

  .logos {
    display: flex;
    align-items: center;
    gap: 2.5rem;
    flex-wrap: wrap;
    flex: 1;
  }

  .logo {
    font-family: 'Plus Jakarta Sans', sans-serif;
    font-size: 1.15rem;
    font-weight: 700;
    color: rgba(255, 255, 255, 0.45);
    text-decoration: none;
    letter-spacing: -0.01em;
    transition: color 0.25s ease;
    white-space: nowrap;
  }

  .logo:hover {
    color: #e2e8f0;
  }

  @media (max-width: 700px) {
    .container {
      gap: 1.25rem;
    }
    .logos {
      gap: 1.5rem;
    }
    .logo {
      font-size: 1rem;
    }
  }
</style>
