<script>
  import * as m from '$lib/paraglide/messages';
  import profilePhoto from '$lib/assets/profile.jpg';
</script>

<section id="personal" class="personal">
  <div class="container">
    <div class="grid">
      <div class="photo-wrap">
        <img src={profilePhoto} alt="Laurent Curau" class="photo" loading="lazy" />
      </div>
      <div class="text">
        <div class="eyebrow">{m.personal_eyebrow()}</div>
        <h2>{m.personal_title()}</h2>
        <div class="subtitle">{m.personal_subtitle()}</div>
        <p>{m.personal_message_1()}</p>
        <p>{m.personal_message_2()}</p>
        <p class="bio-detail">{m.personal_education()}</p>
        <div class="signature">{m.personal_signature_name()}</div>
      </div>
    </div>
  </div>
</section>

<style>
  .personal {
    padding: 7rem 0;
    background: #141422;
  }

  .container {
    max-width: 1100px;
    margin: 0 auto;
    padding: 0 2rem;
  }

  .grid {
    display: grid;
    grid-template-columns: 320px 1fr;
    gap: 4rem;
    align-items: center;
  }

  .photo-wrap {
    display: flex;
    justify-content: center;
  }

  .photo {
    width: 280px;
    height: 280px;
    border-radius: 50%;
    object-fit: cover;
    border: 3px solid rgba(102, 126, 234, 0.25);
    box-shadow: 0 0 40px rgba(102, 126, 234, 0.12);
  }

  .eyebrow {
    font-family: 'JetBrains Mono', monospace;
    font-size: 0.75rem;
    color: rgba(255, 255, 255, 0.4);
    text-transform: uppercase;
    letter-spacing: 0.15em;
    margin-bottom: 0.75rem;
  }

  .text h2 {
    font-family: 'Plus Jakarta Sans', sans-serif;
    font-size: 2.25rem;
    font-weight: 800;
    color: #f5f5fa;
    margin: 0 0 0.25rem;
    letter-spacing: -0.02em;
  }

  .subtitle {
    font-family: 'JetBrains Mono', monospace;
    font-size: 0.95rem;
    color: #a5b4fc;
    margin-bottom: 1.5rem;
  }

  .text p {
    color: rgba(255, 255, 255, 0.6);
    line-height: 1.7;
    margin: 0 0 1.25rem;
    font-size: 1.05rem;
  }

  .bio-detail {
    font-family: 'JetBrains Mono', monospace;
    font-size: 0.85rem !important;
    color: rgba(255, 255, 255, 0.45) !important;
    letter-spacing: 0.01em;
  }

  .signature {
    font-family: 'JetBrains Mono', monospace;
    color: rgba(165, 180, 252, 0.7);
    font-weight: 600;
    margin-top: 1.5rem;
  }

  @media (max-width: 800px) {
    .grid {
      grid-template-columns: 1fr;
      gap: 2rem;
      text-align: center;
    }

    .photo {
      width: 200px;
      height: 200px;
    }
  }
</style>
