<script>
  import * as m from '$lib/paraglide/messages';
  import profilePhoto from '$lib/assets/profile.jpg';
</script>

<section id="personal" class="personal-section">
  <div class="container">
    <div class="personal-content">
      <div class="photo-container">
        <img src={profilePhoto} alt="Laurent Curau - Fractional CTO" class="profile-photo" />
        <div class="photo-decoration"></div>
      </div>
      <div class="message-container">
        <div class="personal-header">
          <h2>{m.personal_title()}</h2>
          <div class="subtitle">{m.personal_subtitle()}</div>
        </div>
        <div class="message">
          <p>
            {m.personal_message_1()}
          </p>
          <p>
            {m.personal_message_2()}
          </p>
          <p>
            {m.personal_message_3()}
          </p>
          <p class="signature">
            {m.personal_signature()}
          </p>
          <div class="signature-name">
            {m.personal_signature_name()}
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

<style>
  .personal-section {
    padding: 6rem 0;
    background: #141422;
    position: relative;
    overflow: hidden;
  }

  .personal-section::before {
    display: none;
  }

  .container {
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 2rem;
    position: relative;
    z-index: 1;
  }

  .personal-content {
    display: grid;
    grid-template-columns: 1fr 2fr;
    gap: 4rem;
    align-items: center;
  }

  .photo-container {
    position: relative;
    display: flex;
    justify-content: center;
  }

  .profile-photo {
    width: 280px;
    height: 280px;
    border-radius: 50%;
    object-fit: cover;
    border: 3px solid rgba(102, 126, 234, 0.3);
    box-shadow: 0 0 30px rgba(102, 126, 234, 0.1);
    position: relative;
    z-index: 2;
  }

  .photo-decoration {
    position: absolute;
    top: -20px;
    right: -20px;
    width: 120px;
    height: 120px;
    background: radial-gradient(circle, rgba(102, 126, 234, 0.08) 0%, transparent 70%);
    border-radius: 50%;
    opacity: 1;
    z-index: 1;
  }

  .message-container {
    padding-left: 2rem;
  }

  .personal-header h2 {
    font-size: 2.5rem;
    font-weight: 800;
    color: #e2e8f0;
    margin-bottom: 0.5rem;
    line-height: 1.2;
    font-family: 'Plus Jakarta Sans', sans-serif;
  }

  .subtitle {
    font-size: 1.25rem;
    color: #667eea;
    font-weight: 600;
    margin-bottom: 2rem;
    font-family: 'JetBrains Mono', monospace;
  }

  .message p {
    font-size: 1.125rem;
    line-height: 1.7;
    color: rgba(255, 255, 255, 0.6);
    margin-bottom: 1.5rem;
  }

  .signature {
    font-weight: 600;
    color: rgba(255, 255, 255, 0.6);
    font-style: italic;
  }

  .signature-name {
    font-size: 1.25rem;
    font-weight: 700;
    background: linear-gradient(135deg, #667eea, #67e8f9);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    margin-top: 1rem;
    margin-bottom: 2rem;
  }


  @media (max-width: 768px) {
    .personal-section {
      padding: 4rem 0;
    }

    .personal-content {
      grid-template-columns: 1fr;
      gap: 2rem;
      text-align: center;
    }

    .message-container {
      padding-left: 0;
    }

    .profile-photo {
      width: 200px;
      height: 200px;
    }

    .personal-header h2 {
      font-size: 2rem;
    }

  }
</style>
