<script>
  import * as m from '$lib/paraglide/messages';
  import CaseStudy from '$lib/CaseStudy.svelte';
  import heroImage from '$lib/assets/work-cca.png';

  const data = {
    eyebrow: m.case_cca_eyebrow(),
    title: m.case_cca_title(),
    lede: m.case_cca_lede(),
    liveUrl: 'https://cca-mc.com',
    visitCta: m.case_cca_visit_cta(),
    heroImage,
    stats: [
      { value: m.case_cca_stat_1_value(), label: m.case_cca_stat_1_label() },
      { value: m.case_cca_stat_2_value(), label: m.case_cca_stat_2_label() },
      { value: m.case_cca_stat_3_value(), label: m.case_cca_stat_3_label() },
      { value: m.case_cca_stat_4_value(), label: m.case_cca_stat_4_label() }
    ],
    challengeTitle: m.case_cca_challenge_title(),
    challengeSubtitle: m.case_cca_challenge_subtitle(),
    challenges: [
      { title: m.case_cca_challenge_1_title(), body: m.case_cca_challenge_1() },
      { title: m.case_cca_challenge_2_title(), body: m.case_cca_challenge_2() },
      { title: m.case_cca_challenge_3_title(), body: m.case_cca_challenge_3() }
    ],
    solutionTitle: m.case_cca_solution_title(),
    solutionSubtitle: m.case_cca_solution_subtitle(),
    solutions: [
      { title: m.case_cca_solution_1_title(), body: m.case_cca_solution_1() },
      { title: m.case_cca_solution_2_title(), body: m.case_cca_solution_2() },
      { title: m.case_cca_solution_3_title(), body: m.case_cca_solution_3() },
      { title: m.case_cca_solution_4_title(), body: m.case_cca_solution_4() }
    ],
    stackTitle: m.case_cca_stack_title(),
    stackSubtitle: m.case_cca_stack_subtitle(),
    stack: [
      { name: 'Rails 8', role: 'Both apps' },
      { name: 'Hotwire', role: 'Turbo + Stimulus' },
      { name: 'Tailwind + DaisyUI', role: 'UI system' },
      { name: 'Vite + Bun', role: 'Frontend build' },
      { name: 'Net::FTP', role: 'Protocol wrapper' },
      { name: 'Encrypted cookies', role: 'Stateless sessions' },
      { name: 'RSpec + Capybara', role: 'Test suite' },
      { name: 'Kamal + Thruster', role: 'Docker deploy' }
    ],
    resultsTitle: m.case_cca_results_title(),
    resultsSubtitle: m.case_cca_results_subtitle(),
    results: [
      { label: m.case_cca_results_1_label(), value: m.case_cca_results_1_value() },
      { label: m.case_cca_results_2_label(), value: m.case_cca_results_2_value() },
      { label: m.case_cca_results_3_label(), value: m.case_cca_results_3_value() }
    ],
    bylineTitle: m.case_cca_byline_title(),
    byline: m.case_cca_byline(),
    ctaTitle: m.case_cca_cta_title(),
    ctaBody: m.case_cca_cta_body()
  };
</script>

<svelte:head>
  <title>{m.case_cca_meta_title()}</title>
  <meta name="description" content={m.case_cca_meta_description()} />
</svelte:head>

<CaseStudy {data} />
