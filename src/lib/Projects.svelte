<script>
  import * as m from '$lib/paraglide/messages';
  import monibotLogo from '$lib/assets/monibot-logo.webp';
  import monibotMatch from '$lib/assets/monibot-match.png';
  import monibotAlerts from '$lib/assets/monibot-alerts.png';
  import xbrlLogo from '$lib/assets/xbrl.png';

  let waitlistStatus = $state('idle');

  async function handleWaitlist(e) {
    e.preventDefault();
    waitlistStatus = 'submitting';
    const form = e.target;
    const res = await fetch(form.action, {
      method: 'POST',
      body: new FormData(form),
      headers: { 'Accept': 'application/json' }
    });
    waitlistStatus = res.ok ? 'success' : 'idle';
  }
</script>

<section id="projects" class="projects">
  <div class="container">
    <div class="section-header">
      <h2>{m.projects_title()}</h2>
      <p>{m.projects_subtitle()}</p>
    </div>

    <div class="project-feature">
      <div class="project-info">
        <div class="project-logo">
          <img src={monibotLogo} alt="Monibot" class="logo-img" loading="lazy" />
        </div>
        <h3>{m.projects_monibot_title()}</h3>
        <p class="project-description">{m.projects_monibot_description()}</p>
        <div class="project-tags">
          <span class="tag">{m.projects_monibot_tag_1()}</span>
          <span class="tag">{m.projects_monibot_tag_2()}</span>
          <span class="tag">{m.projects_monibot_tag_3()}</span>
        </div>
        <a href="https://t.me/mc_monibot?start=CIM" target="_blank" rel="noopener noreferrer" class="telegram-link">
          <svg viewBox="0 0 24 24" fill="currentColor">
            <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.479.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z"/>
          </svg>
          {m.projects_monibot_cta()}
        </a>
      </div>
      <div class="project-screenshots">
        <div class="screenshot-wrapper screenshot-back">
          <img src={monibotAlerts} alt="Monibot - buyer alerts" loading="lazy" />
        </div>
        <div class="screenshot-wrapper screenshot-front">
          <img src={monibotMatch} alt="Monibot - property match" loading="lazy" />
        </div>
      </div>
    </div>

    <div class="project-card">
      <div class="project-card-icon">
        <img src={xbrlLogo} alt="XBRL" class="xbrl-logo" loading="lazy" />
      </div>
      <div class="project-card-content">
        <div class="immocrm-header">
          <h3>{m.projects_immocrm_title()}</h3>
          <span class="badge-coming-soon">{m.projects_immocrm_badge()}</span>
        </div>
        <ul class="benefit-list">
          <li>{m.projects_immocrm_benefit_1()}</li>
          <li>{m.projects_immocrm_benefit_2()}</li>
          <li>{m.projects_immocrm_benefit_3()}</li>
          <li>{m.projects_immocrm_benefit_4()}</li>
        </ul>
        <div class="project-tags">
          <span class="tag">{m.projects_immocrm_tag_1()}</span>
          <span class="tag">{m.projects_immocrm_tag_2()}</span>
          <span class="tag">{m.projects_immocrm_tag_3()}</span>
        </div>
        {#if waitlistStatus === 'success'}
          <p class="waitlist-success">{m.projects_immocrm_waitlist_success()}</p>
        {:else}
          <p class="waitlist-label">{m.projects_immocrm_waitlist_label()}</p>
          <form class="waitlist-form" action="https://formspree.io/f/xpqjavjv" method="POST" onsubmit={handleWaitlist}>
            <input type="email" name="email" placeholder={m.projects_immocrm_waitlist_placeholder()} required disabled={waitlistStatus === 'submitting'} />
            <input type="hidden" name="_subject" value="Immo CRM waitlist signup" />
            <button type="submit" disabled={waitlistStatus === 'submitting'}>
              {waitlistStatus === 'submitting' ? '...' : m.projects_immocrm_waitlist_cta()}
            </button>
          </form>
        {/if}
      </div>
    </div>
  </div>
</section>

<style>
  .projects {
    padding: 6rem 0;
    background: #0f0f1a;
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
    color: #e2e8f0;
    margin-bottom: 1rem;
    font-family: 'Plus Jakarta Sans', sans-serif;
  }

  .section-header p {
    font-size: 1.25rem;
    color: rgba(255, 255, 255, 0.6);
    max-width: 600px;
    margin: 0 auto;
  }

  /* Monibot featured project */
  .project-feature {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 4rem;
    align-items: center;
    background: #1a1a2e;
    border-radius: 1.5rem;
    border: 1px solid rgba(102, 126, 234, 0.12);
    padding: 3rem;
    margin-bottom: 2rem;
  }

  .project-logo {
    width: 120px;
    height: 120px;
    margin-bottom: 1.5rem;
  }

  .logo-img {
    width: 100%;
    height: 100%;
    object-fit: contain;
  }

  .project-info h3 {
    font-size: 2rem;
    font-weight: 700;
    color: #e2e8f0;
    margin-bottom: 1rem;
    font-family: 'JetBrains Mono', monospace;
  }

  .project-description {
    color: rgba(255, 255, 255, 0.6);
    line-height: 1.7;
    margin-bottom: 1.5rem;
  }

  .project-tags {
    display: flex;
    gap: 0.5rem;
    flex-wrap: wrap;
  }

  .telegram-link {
    display: inline-flex;
    align-items: center;
    gap: 0.5rem;
    margin-top: 1.5rem;
    background: linear-gradient(135deg, #667eea, #0891b2);
    color: white;
    text-decoration: none;
    font-size: 0.95rem;
    font-weight: 600;
    padding: 0.75rem 1.5rem;
    border-radius: 0.5rem;
    transition: transform 0.2s, box-shadow 0.2s;
  }

  .telegram-link:hover {
    transform: translateY(-2px);
    box-shadow: 0 10px 20px rgba(102, 126, 234, 0.3);
  }

  .telegram-link svg {
    width: 1.25rem;
    height: 1.25rem;
  }

  .tag {
    background: rgba(102, 126, 234, 0.12);
    color: #667eea;
    padding: 0.35rem 0.85rem;
    border-radius: 2rem;
    font-size: 0.8rem;
    font-weight: 500;
    font-family: 'JetBrains Mono', monospace;
  }

  /* Screenshots */
  .project-screenshots {
    position: relative;
    height: 400px;
  }

  .screenshot-wrapper {
    position: absolute;
    border-radius: 1rem;
    overflow: hidden;
    box-shadow: 0 20px 40px rgba(0, 0, 0, 0.4);
    border: 1px solid rgba(102, 126, 234, 0.15);
  }

  .screenshot-wrapper img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  .screenshot-back {
    width: 220px;
    height: 380px;
    top: 0;
    left: 0;
    transform: rotate(-3deg);
    z-index: 1;
  }

  .screenshot-front {
    width: 220px;
    height: 380px;
    top: 10px;
    right: 0;
    transform: rotate(3deg);
    z-index: 2;
  }

  /* Immo CRM card */
  .project-card {
    background: #1a1a2e;
    padding: 2.5rem;
    border-radius: 1rem;
    border: 1px solid rgba(102, 126, 234, 0.12);
    display: flex;
    gap: 2rem;
    align-items: flex-start;
  }

  .project-card-icon {
    width: 3.5rem;
    height: 3.5rem;
    min-width: 3.5rem;
    background: white;
    border-radius: 0.75rem;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 0.4rem;
  }

  .xbrl-logo {
    width: 100%;
    height: 100%;
    object-fit: contain;
  }

  .immocrm-header {
    display: flex;
    align-items: center;
    gap: 0.75rem;
  }

  .badge-coming-soon {
    font-size: 0.7rem;
    font-weight: 600;
    text-transform: uppercase;
    letter-spacing: 0.05em;
    color: #67e8f9;
    background: rgba(103, 232, 249, 0.1);
    border: 1px solid rgba(103, 232, 249, 0.25);
    padding: 0.2rem 0.6rem;
    border-radius: 2rem;
    font-family: 'JetBrains Mono', monospace;
    white-space: nowrap;
  }

  .benefit-list {
    list-style: none;
    padding: 0;
    margin: 0 0 1.5rem 0;
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
  }

  .benefit-list li {
    color: rgba(255, 255, 255, 0.6);
    line-height: 1.6;
    padding-left: 1.5rem;
    position: relative;
  }

  .benefit-list li::before {
    content: '';
    position: absolute;
    left: 0;
    top: 0.55rem;
    width: 6px;
    height: 6px;
    background: #667eea;
    border-radius: 50%;
  }

  .project-card-content h3 {
    font-size: 1.5rem;
    font-weight: 700;
    color: #e2e8f0;
    margin-bottom: 0.75rem;
    font-family: 'JetBrains Mono', monospace;
  }

  /* Waitlist */
  .waitlist-success {
    margin-top: 1.5rem;
    font-size: 0.9rem;
    font-weight: 600;
    color: #67e8f9;
  }

  .waitlist-label {
    font-size: 0.85rem;
    color: rgba(255, 255, 255, 0.45);
    margin-top: 1.5rem;
    margin-bottom: 0.5rem;
  }

  .waitlist-form {
    display: flex;
    gap: 0.5rem;
  }

  .waitlist-form input[type="email"] {
    flex: 1;
    padding: 0.6rem 0.85rem;
    border: 1px solid rgba(102, 126, 234, 0.2);
    border-radius: 0.5rem;
    font-size: 0.9rem;
    background: #0f0f1a;
    color: #e2e8f0;
    transition: border-color 0.2s;
  }

  .waitlist-form input[type="email"]:focus {
    outline: none;
    border-color: #67e8f9;
  }

  .waitlist-form input[type="email"]::placeholder {
    color: rgba(255, 255, 255, 0.3);
  }

  .waitlist-form button {
    padding: 0.6rem 1.25rem;
    background: rgba(103, 232, 249, 0.15);
    color: #67e8f9;
    border: 1px solid rgba(103, 232, 249, 0.3);
    border-radius: 0.5rem;
    font-size: 0.85rem;
    font-weight: 600;
    cursor: pointer;
    white-space: nowrap;
    transition: all 0.2s;
    font-family: 'JetBrains Mono', monospace;
  }

  .waitlist-form button:hover {
    background: rgba(103, 232, 249, 0.25);
    border-color: rgba(103, 232, 249, 0.5);
  }

  @media (max-width: 768px) {
    .projects {
      padding: 4rem 0;
    }

    .section-header h2 {
      font-size: 2rem;
    }

    .project-feature {
      grid-template-columns: 1fr;
      gap: 2rem;
      padding: 2rem;
    }

    .project-screenshots {
      height: 300px;
    }

    .screenshot-back,
    .screenshot-front {
      width: 160px;
      height: 280px;
    }

    .project-card {
      flex-direction: column;
      padding: 2rem;
    }

    .project-info h3 {
      font-size: 1.5rem;
    }
  }
</style>
