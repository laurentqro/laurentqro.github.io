<script>
  import * as m from '$lib/paraglide/messages';

  let contactStatus = $state('idle');

  async function handleContact(e) {
    e.preventDefault();
    contactStatus = 'submitting';
    const form = e.target;
    try {
      const res = await fetch(form.action, {
        method: 'POST',
        body: new FormData(form),
        headers: { 'Accept': 'application/json' }
      });
      contactStatus = res.ok ? 'success' : 'idle';
    } catch {
      contactStatus = 'idle';
    }
  }
</script>

<section id="contact" class="contact">
  <div class="container">
    <div class="contact-content">
      <div class="contact-text">
        <h2>{m.contact_title()}</h2>
        <p class="contact-subtitle">
          {m.contact_subtitle()}
        </p>

        <div class="contact-methods">
          <a href="mailto:hello@laurentcurau.com" class="contact-method">
            <div class="method-icon">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
                <polyline points="22,6 12,13 2,6"/>
              </svg>
            </div>
            <div class="method-content">
              <h3>{m.contact_email()}</h3>
              <p>hello@laurentcurau.com</p>
            </div>
          </a>

          <a href="https://cal.com/laurentcurau" target="_blank" rel="noopener noreferrer" class="contact-method">
            <div class="method-icon">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <rect x="3" y="4" width="18" height="18" rx="2" ry="2"/>
                <line x1="16" y1="2" x2="16" y2="6"/>
                <line x1="8" y1="2" x2="8" y2="6"/>
                <line x1="3" y1="10" x2="21" y2="10"/>
              </svg>
            </div>
            <div class="method-content">
              <h3>{m.contact_calendar()}</h3>
              <p>{m.contact_book_call()}</p>
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
          <p>{m.contact_response_time()} <strong>{m.contact_response_hours()}</strong></p>
        </div>
      </div>

      <div class="contact-form">
        {#if contactStatus === 'success'}
          <p class="contact-success">{m.contact_form_success()}</p>
        {:else}
          <form class="form" action="https://formspree.io/f/mjgekwde" method="POST" onsubmit={handleContact}>
            <div class="form-group">
              <label for="name">{m.contact_form_name()}</label>
              <input type="text" id="name" name="name" required disabled={contactStatus === 'submitting'}>
            </div>

            <div class="form-group">
              <label for="email">{m.contact_form_email()}</label>
              <input type="email" id="email" name="email" required disabled={contactStatus === 'submitting'}>
            </div>

            <div class="form-group">
              <label for="company">{m.contact_form_company()}</label>
              <input type="text" id="company" name="company" disabled={contactStatus === 'submitting'}>
            </div>

            <div class="form-group">
              <label for="stage">{m.contact_form_stage()}</label>
              <select id="stage" name="stage" disabled={contactStatus === 'submitting'}>
                <option value="">{m.contact_form_stage_placeholder()}</option>
                <option value="pre-seed">{m.contact_form_stage_preseed()}</option>
                <option value="seed">{m.contact_form_stage_seed()}</option>
                <option value="series-a">{m.contact_form_stage_series_a()}</option>
                <option value="sme">{m.contact_form_stage_sme()}</option>
                <option value="established">{m.contact_form_stage_established()}</option>
              </select>
            </div>

            <div class="form-group">
              <label for="message">{m.contact_form_message()}</label>
              <textarea id="message" name="message" rows="4" placeholder={m.contact_form_message_placeholder()} required disabled={contactStatus === 'submitting'}></textarea>
            </div>

            <button type="submit" class="submit-button" disabled={contactStatus === 'submitting'}>
              {contactStatus === 'submitting' ? m.contact_form_submitting() : m.contact_form_submit()}
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <line x1="22" y1="2" x2="11" y2="13"/>
                <polygon points="22,2 15,22 11,13 2,9 22,2"/>
              </svg>
            </button>
          </form>
        {/if}
      </div>
    </div>
  </div>
</section>

<style>
  .contact {
    padding: 6rem 0;
    background: #141422;
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
    color: #e2e8f0;
    margin-bottom: 1rem;
    font-family: 'Plus Jakarta Sans', sans-serif;
  }

  .contact-subtitle {
    font-size: 1.25rem;
    color: rgba(255, 255, 255, 0.6);
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
    background: rgba(102, 126, 234, 0.05);
    border-radius: 0.75rem;
    text-decoration: none;
    transition: all 0.2s;
  }

  .contact-method:hover {
    background: rgba(102, 126, 234, 0.1);
    transform: translateX(4px);
  }

  .method-icon {
    width: 3rem;
    height: 3rem;
    background: linear-gradient(135deg, #667eea, #0891b2);
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
    color: #e2e8f0;
    margin-bottom: 0.25rem;
    font-family: 'Plus Jakarta Sans', sans-serif;
  }

  .method-content p {
    color: rgba(255, 255, 255, 0.6);
    margin: 0;
  }

  .response-time {
    display: flex;
    align-items: center;
    gap: 0.75rem;
    padding: 1rem;
    background: rgba(102, 126, 234, 0.08);
    border-radius: 0.75rem;
    border: 1px solid rgba(102, 126, 234, 0.15);
  }

  .response-icon {
    color: #667eea;
  }

  .response-icon svg {
    width: 1.25rem;
    height: 1.25rem;
  }

  .response-time p {
    color: rgba(255, 255, 255, 0.6);
    margin: 0;
  }

  .contact-form {
    background: #1a1a2e;
    padding: 2rem;
    border-radius: 1rem;
    border: 1px solid rgba(102, 126, 234, 0.12);
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
    color: rgba(255, 255, 255, 0.7);
  }

  .form-group input,
  .form-group select,
  .form-group textarea {
    padding: 0.75rem;
    border: 1px solid rgba(102, 126, 234, 0.2);
    border-radius: 0.5rem;
    font-size: 1rem;
    transition: border-color 0.2s;
    background: #1a1a2e;
    color: #e2e8f0;
  }

  .form-group input:focus,
  .form-group select:focus,
  .form-group textarea:focus {
    outline: none;
    border-color: #667eea;
  }

  .form-group textarea {
    resize: vertical;
    min-height: 100px;
  }

  .contact-success {
    font-size: 1.1rem;
    font-weight: 600;
    color: #67e8f9;
    text-align: center;
    padding: 2rem;
  }

  .submit-button:disabled {
    opacity: 0.6;
    cursor: not-allowed;
  }

  .submit-button {
    background: linear-gradient(135deg, #667eea, #0891b2);
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
    box-shadow: 0 10px 25px rgba(102, 126, 234, 0.3);
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
