<script>
  import * as m from '$lib/paraglide/messages';

  const institutions = [
    m.previously_at_1(),
    m.previously_at_2(),
    m.previously_at_3()
  ];
</script>

<section class="previously-at">
  <div class="container">
    <div class="label">{m.previously_at_label()}</div>
    <ul class="names">
      {#each institutions as name}
        <li class="name">{name}</li>
      {/each}
    </ul>
  </div>
</section>

<style>
  .previously-at {
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

  .names {
    list-style: none;
    padding: 0;
    margin: 0;
    display: flex;
    align-items: center;
    gap: 2.5rem;
    flex-wrap: wrap;
    flex: 1;
  }

  .name {
    font-family: 'Plus Jakarta Sans', sans-serif;
    font-size: 1.05rem;
    font-weight: 600;
    color: rgba(255, 255, 255, 0.55);
    letter-spacing: -0.005em;
    white-space: nowrap;
  }

  @media (max-width: 700px) {
    .container { gap: 1.25rem; }
    .names { gap: 1.5rem; }
    .name { font-size: 0.95rem; }
  }
</style>
