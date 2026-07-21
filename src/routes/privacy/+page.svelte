<script>
  import * as m from '$lib/paraglide/messages';
  import Seo from '$lib/Seo.svelte';
  import LegalPage from '$lib/LegalPage.svelte';

  const sections = [
    { title: m.privacy_who_title(), body: m.privacy_who_body() },
    { title: m.privacy_what_title(), body: m.privacy_what_body() },
    { title: m.privacy_analytics_title(), body: m.privacy_analytics_body() },
    { title: m.privacy_whatsapp_title(), body: m.privacy_whatsapp_body() },
    { title: m.privacy_rights_title(), body: m.privacy_rights_body() },
    { title: m.privacy_changes_title(), body: m.privacy_changes_body() }
  ];
</script>

<Seo title={m.privacy_meta_title()} description={m.privacy_meta_description()} />

<LegalPage title={m.privacy_title()} intro={m.privacy_intro()} {sections} />
