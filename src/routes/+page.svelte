<script>
  import * as m from '$lib/paraglide/messages';
  import Seo from '$lib/Seo.svelte';
  import Hero from '$lib/Hero.svelte';
  import Work from '$lib/Work.svelte';
  import MissionQuote from '$lib/MissionQuote.svelte';
  import ServicesPreview from '$lib/ServicesPreview.svelte';
  import HowIWork from '$lib/HowIWork.svelte';
  // TODO: re-enable <Testimonials /> below once real client quotes are wired in.
  // import Testimonials from '$lib/Testimonials.svelte';
  import Personal from '$lib/Personal.svelte';
  import Footer from '$lib/Footer.svelte';
</script>

<Seo title={m.meta_title()} description={m.meta_description()} />

<Hero />
<Work />
<MissionQuote />
<ServicesPreview />
<HowIWork />
<!-- <Testimonials /> -->
<Personal />
<Footer />
