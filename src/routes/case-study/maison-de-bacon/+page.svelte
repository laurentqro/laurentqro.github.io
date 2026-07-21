<script>
  import * as m from '$lib/paraglide/messages';
  import Seo from '$lib/Seo.svelte';
  import CaseStudy from '$lib/CaseStudy.svelte';
  import imagePrimary from '$lib/assets/work-mdb.webp';
  import imageSecondary from '$lib/assets/work-mdb-2.webp';

  const data = {
    title: m.case_mdb_title(),
    description: m.case_mdb_description(),
    liveUrl: 'https://maisondebacon.fr/',
    visitCta: m.case_mdb_visit_cta(),
    imagePrimary,
    imageWidth: 1483,
    imageHeight: 812,
    imageSecondary,
    tags: [
      m.case_mdb_tag_1(),
      m.case_mdb_tag_2(),
      m.case_mdb_tag_3(),
      m.case_mdb_tag_4(),
      m.case_mdb_tag_5()
    ],
    metaPlatformLabel: m.case_mdb_meta_platform_label(),
    metaPlatformValue: m.case_mdb_meta_platform_value(),
    metaCategoryLabel: m.case_mdb_meta_category_label(),
    metaCategoryValue: m.case_mdb_meta_category_value(),
    metaYearLabel: m.case_mdb_meta_year_label(),
    metaYearValue: m.case_mdb_meta_year_value(),
    relatedServiceLabel: m.case_mdb_related_service_label(),
    relatedServiceTitle: m.case_mdb_related_service_title(),
    relatedServiceBody: m.case_mdb_related_service_body()
  };
</script>

<Seo title={m.case_mdb_meta_title()} description={m.case_mdb_meta_description()} />

<CaseStudy {data} />
