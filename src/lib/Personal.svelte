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
        <div class="credentials">
          <div class="credential-item">
            <span class="credential-number">10+</span>
            <span class="credential-text">{m.personal_credentials_years()}</span>
          </div>
          <div class="credential-item">
            <span class="credential-number">30+</span>
            <span class="credential-text">{m.personal_credentials_companies()}</span>
          </div>
          <div class="credential-item">
            <span class="credential-number">€2M+</span>
            <span class="credential-text">{m.personal_credentials_value()}</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

<style>
  .personal-section {
    padding: 6rem 0;
    background: linear-gradient(135deg, #f8fafc 0%, #e2e8f0 100%);
    position: relative;
    overflow: hidden;
  }
  
  .personal-section::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23667eea' fill-opacity='0.03'%3E%3Ccircle cx='30' cy='30' r='4'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E") repeat;
    pointer-events: none;
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
    border: 6px solid white;
    box-shadow: 0 20px 40px rgba(0, 0, 0, 0.1);
    position: relative;
    z-index: 2;
  }
  
  .photo-decoration {
    position: absolute;
    top: -20px;
    right: -20px;
    width: 120px;
    height: 120px;
    background: linear-gradient(135deg, #667eea 0%, #0891b2 100%);
    border-radius: 50%;
    opacity: 0.1;
    z-index: 1;
  }
  
  .message-container {
    padding-left: 2rem;
  }
  
  .personal-header h2 {
    font-size: 2.5rem;
    font-weight: 800;
    color: #1a202c;
    margin-bottom: 0.5rem;
    line-height: 1.2;
  }
  
  .subtitle {
    font-size: 1.25rem;
    color: #667eea;
    font-weight: 600;
    margin-bottom: 2rem;
  }
  
  .message p {
    font-size: 1.125rem;
    line-height: 1.7;
    color: #4a5568;
    margin-bottom: 1.5rem;
  }
  
  .signature {
    font-weight: 600;
    color: #2d3748;
    font-style: italic;
  }
  
  .signature-name {
    font-size: 1.25rem;
    font-weight: 700;
    color: #667eea;
    margin-top: 1rem;
    margin-bottom: 2rem;
  }
  
  .credentials {
    display: flex;
    gap: 2rem;
    margin-top: 2rem;
  }
  
  .credential-item {
    text-align: center;
  }
  
  .credential-number {
    display: block;
    font-size: 2rem;
    font-weight: 800;
    color: #667eea;
    margin-bottom: 0.5rem;
  }
  
  .credential-text {
    font-size: 0.875rem;
    color: #718096;
    font-weight: 600;
    text-transform: uppercase;
    letter-spacing: 0.05em;
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
    
    .credentials {
      justify-content: center;
      gap: 1.5rem;
    }
    
    .credential-number {
      font-size: 1.5rem;
    }
  }
</style>
