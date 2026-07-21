<script>
  import * as m from '$lib/paraglide/messages';
  import Seo from '$lib/Seo.svelte';
  import LegalPage from '$lib/LegalPage.svelte';

  const sections = [
    { title: m.terms_about_title(), body: m.terms_about_body() },
    { title: m.terms_use_title(), body: m.terms_use_body() },
    { title: m.terms_third_parties_title(), body: m.terms_third_parties_body() },
    { title: m.terms_warranty_title(), body: m.terms_warranty_body() },
    { title: m.terms_law_title(), body: m.terms_law_body() },
    { title: m.terms_contact_title(), body: m.terms_contact_body() }
  ];
</script>

<Seo title={m.terms_meta_title()} description={m.terms_meta_description()} />

<LegalPage title={m.terms_title()} intro={m.terms_intro()} {sections} />
