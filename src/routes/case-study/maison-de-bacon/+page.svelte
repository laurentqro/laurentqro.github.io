<script>
	import * as m from '$lib/paraglide/messages';
	import Seo from '$lib/Seo.svelte';
	import CaseStudy from '$lib/CaseStudy.svelte';
	import imagePrimary from '$lib/assets/work-mdb.webp';
	import imageSecondary from '$lib/assets/work-mdb-2.webp';

	const data = {
		title: m.case_mdb_title(),
		description: m.case_mdb_description(),
		platform: m.case_mdb_meta_platform_value(),
		category: m.case_mdb_meta_category_value(),
		year: m.case_mdb_meta_year_value(),
		liveUrl: 'https://maisondebacon.fr/',
		visitCta: m.case_mdb_visit_cta(),
		imagePrimary,
		imageWidth: 1483,
		imageHeight: 812,
		imageSecondary,
		sections: [
			{ heading: m.case_mdb_section_1_heading(), body: m.case_mdb_section_1_body() },
			{ heading: m.case_mdb_section_2_heading(), body: m.case_mdb_section_2_body() },
			{ heading: m.case_mdb_section_3_heading(), body: m.case_mdb_section_3_body() },
			{ heading: m.case_mdb_section_4_heading(), body: m.case_mdb_section_4_body() },
			{ heading: m.case_mdb_section_5_heading(), body: m.case_mdb_section_5_body() }
		]
	};
</script>

<Seo title={m.case_mdb_meta_title()} description={m.case_mdb_meta_description()} />

<CaseStudy {data} />
