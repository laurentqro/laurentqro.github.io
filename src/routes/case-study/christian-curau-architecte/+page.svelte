<script>
	import * as m from '$lib/paraglide/messages';
	import Seo from '$lib/Seo.svelte';
	import CaseStudy from '$lib/CaseStudy.svelte';
	import imagePrimary from '$lib/assets/work-cca.webp';
	import imageSecondary from '$lib/assets/work-cca-2.webp';

	const data = {
		title: m.case_cca_title(),
		description: m.case_cca_description(),
		platform: m.case_cca_meta_platform_value(),
		category: m.case_cca_meta_category_value(),
		year: m.case_cca_meta_year_value(),
		liveUrl: 'https://cca-mc.com',
		visitCta: m.case_cca_visit_cta(),
		imagePrimary,
		imageSecondary,
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
