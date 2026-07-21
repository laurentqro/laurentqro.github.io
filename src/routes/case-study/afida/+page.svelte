<script>
  import * as m from '$lib/paraglide/messages';
  import Seo from '$lib/Seo.svelte';
  import CaseStudy from '$lib/CaseStudy.svelte';
  import imagePrimary from '$lib/assets/work-afida.webp';
  import imageSecondary from '$lib/assets/work-afida-2.webp';

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
    relatedServiceBody: m.case_afida_related_service_body(),
    sections: [
      { heading: m.case_afida_section_1_heading(), body: m.case_afida_section_1_body() },
      { heading: m.case_afida_section_2_heading(), body: m.case_afida_section_2_body() },
      { heading: m.case_afida_section_3_heading(), body: m.case_afida_section_3_body() },
      { heading: m.case_afida_section_4_heading(), body: m.case_afida_section_4_body() },
      { heading: m.case_afida_section_5_heading(), body: m.case_afida_section_5_body() }
    ]
  };
</script>

<Seo title={m.case_afida_meta_title()} description={m.case_afida_meta_description()} />

<CaseStudy {data} />
