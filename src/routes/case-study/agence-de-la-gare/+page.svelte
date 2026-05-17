<script>
  import * as m from '$lib/paraglide/messages';
  import CaseStudy from '$lib/CaseStudy.svelte';
  import heroImage from '$lib/assets/work-gare.png';

  const data = {
    eyebrow: m.case_gare_eyebrow(),
    title: m.case_gare_title(),
    lede: m.case_gare_lede(),
    liveUrl: 'https://www.agencegaremonaco.com/',
    visitCta: m.case_gare_visit_cta(),
    heroImage,
    stats: [
      { value: m.case_gare_stat_1_value(), label: m.case_gare_stat_1_label() },
      { value: m.case_gare_stat_2_value(), label: m.case_gare_stat_2_label() },
      { value: m.case_gare_stat_3_value(), label: m.case_gare_stat_3_label() },
      { value: m.case_gare_stat_4_value(), label: m.case_gare_stat_4_label() }
    ],
    challengeTitle: m.case_gare_challenge_title(),
    challengeSubtitle: m.case_gare_challenge_subtitle(),
    challenges: [
      { title: m.case_gare_challenge_1_title(), body: m.case_gare_challenge_1() },
      { title: m.case_gare_challenge_2_title(), body: m.case_gare_challenge_2() },
      { title: m.case_gare_challenge_3_title(), body: m.case_gare_challenge_3() }
    ],
    solutionTitle: m.case_gare_solution_title(),
    solutionSubtitle: m.case_gare_solution_subtitle(),
    solutions: [
      { title: m.case_gare_solution_1_title(), body: m.case_gare_solution_1() },
      { title: m.case_gare_solution_2_title(), body: m.case_gare_solution_2() },
      { title: m.case_gare_solution_3_title(), body: m.case_gare_solution_3() },
      { title: m.case_gare_solution_4_title(), body: m.case_gare_solution_4() }
    ],
    stackTitle: m.case_gare_stack_title(),
    stackSubtitle: m.case_gare_stack_subtitle(),
    stack: [
      { name: 'Rails 8.1', role: 'Monolithic backend' },
      { name: 'SQLite', role: 'Embedded database' },
      { name: 'Hotwire', role: 'Turbo + Stimulus' },
      { name: 'Tailwind CSS', role: 'Styling' },
      { name: 'Solid Queue', role: 'Scheduled sync jobs' },
      { name: 'Immotoolbox API', role: 'Listing source' },
      { name: 'Typst', role: 'PDF brochures' },
      { name: 'Frankfurter API', role: 'Daily ECB FX rates' },
      { name: 'Kamal', role: 'Docker deploy' },
      { name: 'Sentry', role: 'Error monitoring' }
    ],
    resultsTitle: m.case_gare_results_title(),
    resultsSubtitle: m.case_gare_results_subtitle(),
    results: [
      { label: m.case_gare_results_1_label(), value: m.case_gare_results_1_value() },
      { label: m.case_gare_results_2_label(), value: m.case_gare_results_2_value() },
      { label: m.case_gare_results_3_label(), value: m.case_gare_results_3_value() }
    ],
    bylineTitle: m.case_gare_byline_title(),
    byline: m.case_gare_byline(),
    ctaTitle: m.case_gare_cta_title(),
    ctaBody: m.case_gare_cta_body()
  };
</script>

<svelte:head>
  <title>{m.case_gare_meta_title()}</title>
  <meta name="description" content={m.case_gare_meta_description()} />
</svelte:head>

<CaseStudy {data} />
