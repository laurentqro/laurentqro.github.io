<script>
	import * as m from '$lib/paraglide/messages';
	import Seo from '$lib/Seo.svelte';
	import CaseStudy from '$lib/CaseStudy.svelte';
	import imagePrimary from '$lib/assets/work-gare.webp';
	import imageSecondary from '$lib/assets/work-gare-2.webp';

	const data = {
		title: m.case_gare_title(),
		description: m.case_gare_description(),
		platform: m.case_gare_meta_platform_value(),
		category: m.case_gare_meta_category_value(),
		year: m.case_gare_meta_year_value(),
		liveUrl: 'https://www.agencegaremonaco.com/',
		visitCta: m.case_gare_visit_cta(),
		imagePrimary,
		imageSecondary,
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
