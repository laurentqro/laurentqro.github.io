<script>
	import * as m from '$lib/paraglide/messages';
	import Seo from '$lib/Seo.svelte';
	import CaseStudy from '$lib/CaseStudy.svelte';
	import imagePrimary from '$lib/assets/work-cca.webp';
	import imageSecondary from '$lib/assets/work-cca-2.webp';

	const data = {
		title: m.case_cca_title(),
		description: m.case_cca_description(),
		liveUrl: 'https://cca-mc.com',
		visitCta: m.case_cca_visit_cta(),
		imagePrimary,
		imageSecondary,
		tags: [
			m.case_cca_tag_1(),
			m.case_cca_tag_2(),
			m.case_cca_tag_3(),
			m.case_cca_tag_4(),
			m.case_cca_tag_5()
		],
		metaPlatformLabel: m.case_cca_meta_platform_label(),
		metaPlatformValue: m.case_cca_meta_platform_value(),
		metaCategoryLabel: m.case_cca_meta_category_label(),
		metaCategoryValue: m.case_cca_meta_category_value(),
		metaYearLabel: m.case_cca_meta_year_label(),
		metaYearValue: m.case_cca_meta_year_value(),
		relatedServiceLabel: m.case_cca_related_service_label(),
		relatedServiceTitle: m.case_cca_related_service_title(),
		relatedServiceBody: m.case_cca_related_service_body(),
		sections: [
			{ heading: m.case_cca_section_1_heading(), body: m.case_cca_section_1_body() },
			{ heading: m.case_cca_section_2_heading(), body: m.case_cca_section_2_body() },
			{ heading: m.case_cca_section_3_heading(), body: m.case_cca_section_3_body() },
			{ heading: m.case_cca_section_4_heading(), body: m.case_cca_section_4_body() },
			{ heading: m.case_cca_section_5_heading(), body: m.case_cca_section_5_body() }
		]
	};
</script>

<Seo title={m.case_cca_meta_title()} description={m.case_cca_meta_description()} />

<CaseStudy {data} />
