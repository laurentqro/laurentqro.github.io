<script>
  import * as m from '$lib/paraglide/messages';
  import CaseStudy from '$lib/CaseStudy.svelte';
  import imagePrimary from '$lib/assets/work-gare.png';
  import imageSecondary from '$lib/assets/work-gare-2.png';

  const data = {
    title: m.case_gare_title(),
    description: m.case_gare_description(),
    liveUrl: 'https://www.agencegaremonaco.com/',
    visitCta: m.case_gare_visit_cta(),
    imagePrimary,
    imageSecondary,
    tags: [
      m.case_gare_tag_1(),
      m.case_gare_tag_2(),
      m.case_gare_tag_3(),
      m.case_gare_tag_4(),
      m.case_gare_tag_5()
    ],
    metaPlatformLabel: m.case_gare_meta_platform_label(),
    metaPlatformValue: m.case_gare_meta_platform_value(),
    metaCategoryLabel: m.case_gare_meta_category_label(),
    metaCategoryValue: m.case_gare_meta_category_value(),
    metaYearLabel: m.case_gare_meta_year_label(),
    metaYearValue: m.case_gare_meta_year_value(),
    relatedServiceLabel: m.case_gare_related_service_label(),
    relatedServiceTitle: m.case_gare_related_service_title(),
    relatedServiceBody: m.case_gare_related_service_body()
  };
</script>

<svelte:head>
  <title>{m.case_gare_meta_title()}</title>
  <meta name="description" content={m.case_gare_meta_description()} />
</svelte:head>

<CaseStudy {data} />
