<script>
  import * as m from '$lib/paraglide/messages';
  import CaseStudy from '$lib/CaseStudy.svelte';
  import imagePrimary from '$lib/assets/work-afida.png';
  import imageSecondary from '$lib/assets/work-afida-2.png';

  const data = {
    title: m.case_afida_title(),
    description: m.case_afida_description(),
    liveUrl: 'https://afida.com',
    visitCta: m.case_afida_visit_cta(),
    imagePrimary,
    imageSecondary,
    tags: [
      m.case_afida_tag_1(),
      m.case_afida_tag_2(),
      m.case_afida_tag_3(),
      m.case_afida_tag_4(),
      m.case_afida_tag_5()
    ],
    metaPlatformLabel: m.case_afida_meta_platform_label(),
    metaPlatformValue: m.case_afida_meta_platform_value(),
    metaCategoryLabel: m.case_afida_meta_category_label(),
    metaCategoryValue: m.case_afida_meta_category_value(),
    metaYearLabel: m.case_afida_meta_year_label(),
    metaYearValue: m.case_afida_meta_year_value(),
    relatedServiceLabel: m.case_afida_related_service_label(),
    relatedServiceTitle: m.case_afida_related_service_title(),
    relatedServiceBody: m.case_afida_related_service_body()
  };
</script>

<svelte:head>
  <title>{m.case_afida_meta_title()}</title>
  <meta name="description" content={m.case_afida_meta_description()} />
</svelte:head>

<CaseStudy {data} />
