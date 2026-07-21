<script>
  import * as m from '$lib/paraglide/messages';
  import Seo from '$lib/Seo.svelte';
  import CaseStudy from '$lib/CaseStudy.svelte';
  import imagePrimary from '$lib/assets/work-gare.webp';
  import imageSecondary from '$lib/assets/work-gare-2.webp';

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
    relatedServiceBody: m.case_gare_related_service_body(),
    sections: [
      { heading: m.case_gare_section_1_heading(), body: m.case_gare_section_1_body() },
      { heading: m.case_gare_section_2_heading(), body: m.case_gare_section_2_body() },
      { heading: m.case_gare_section_3_heading(), body: m.case_gare_section_3_body() },
      { heading: m.case_gare_section_4_heading(), body: m.case_gare_section_4_body() },
      { heading: m.case_gare_section_5_heading(), body: m.case_gare_section_5_body() }
    ]
  };
</script>

<Seo title={m.case_gare_meta_title()} description={m.case_gare_meta_description()} />

<CaseStudy {data} />
