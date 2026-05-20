<script>
  import * as m from '$lib/paraglide/messages';
  import { localizeHref } from '$lib/paraglide/runtime';
  import { whatsappLink } from '$lib/whatsapp.js';
  import logo from '$lib/assets/logo.svg';

  const waHref = whatsappLink(m.whatsapp_prefill());
  const currentYear = new Date().getFullYear();
</script>

<footer class="footer">
  <div class="container">
    <div class="footer-content">
      <div class="footer-brand">
        <div class="brand-wordmark">
          <img src={logo} alt="" class="brand-logo" aria-hidden="true" />
          <h3>Laurent Curau</h3>
        </div>
        <p>{m.footer_brand_description()}</p>
        <br />
        <p>{m.footer_address_line_1()}<br />
          {m.footer_address_line_2()}
        </p>
      </div>

      <div class="footer-links">
        <div class="link-group">
          <h4>{m.footer_work_title()}</h4>
          <a href={localizeHref('/case-study/afida')}>{m.footer_work_afida()}</a>
          <a href={localizeHref('/case-study/agence-de-la-gare')}>{m.footer_work_gare()}</a>
          <a href={localizeHref('/case-study/christian-curau-architecte')}>{m.footer_work_cca()}</a>
        </div>

        <div class="link-group">
          <h4>{m.footer_company_title()}</h4>
          <a href={localizeHref('/services')}>{m.footer_company_services()}</a>
        </div>

        <div class="link-group">
          <h4>{m.footer_connect_title()}</h4>
          <a href={waHref} target="_blank" rel="noopener noreferrer">{m.footer_connect_call()}</a>
          <a href="mailto:hello@laurentcurau.com">{m.footer_connect_email()}</a>
          <a href="https://linkedin.com/in/laurentcurau" target="_blank" rel="noopener noreferrer">{m.footer_connect_linkedin()}</a>
        </div>
      </div>
    </div>

    <div class="footer-bottom">
      <div class="footer-divider"></div>
      <div class="footer-copyright">
        <p>&copy; {currentYear} Laurent Curau. {m.footer_copyright()}</p>
        <div class="footer-legal">
          <a href={localizeHref('/privacy')}>{m.footer_links_privacy()}</a>
          <a href={localizeHref('/terms')}>{m.footer_links_terms()}</a>
        </div>
      </div>
    </div>
  </div>
</footer>

<style>
  .footer {
    background: #0a0a14;
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

  .brand-wordmark {
    display: flex;
    align-items: center;
    gap: 0.75rem;
    margin-bottom: 1rem;
  }

  .brand-logo {
    width: 32px;
    height: 32px;
    filter: brightness(0) invert(1);
    flex-shrink: 0;
  }

  .footer-brand h3 {
    font-size: 1.4rem;
    font-weight: 700;
    margin: 0;
    color: #e2e8f0;
    font-family: 'Plus Jakarta Sans', sans-serif;
  }

  .footer-brand p {
    color: rgba(255, 255, 255, 0.4);
    line-height: 1.6;
  }

  .footer-links {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 2rem;
  }

  .link-group h4 {
    font-family: 'JetBrains Mono', monospace;
    font-size: 0.72rem;
    font-weight: 600;
    margin-bottom: 1rem;
    color: rgba(255, 255, 255, 0.4);
    text-transform: uppercase;
    letter-spacing: 0.12em;
  }

  .link-group a {
    display: block;
    color: rgba(255, 255, 255, 0.4);
    text-decoration: none;
    margin-bottom: 0.75rem;
    transition: color 0.2s;
    font-size: 0.92rem;
  }

  .link-group a:hover {
    color: #a5b4fc;
  }

  .footer-bottom {
    margin-top: 2rem;
  }

  .footer-divider {
    height: 1px;
    background: rgba(102, 126, 234, 0.15);
    margin-bottom: 2rem;
  }

  .footer-copyright {
    display: flex;
    justify-content: space-between;
    align-items: center;
    color: rgba(255, 255, 255, 0.3);
    font-size: 0.85rem;
  }

  .footer-legal {
    display: flex;
    gap: 2rem;
  }

  .footer-legal a {
    color: rgba(255, 255, 255, 0.4);
    text-decoration: none;
    transition: color 0.2s;
  }

  .footer-legal a:hover {
    color: #a5b4fc;
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
