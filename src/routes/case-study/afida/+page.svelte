<script>
  import * as m from '$lib/paraglide/messages';
  import CaseStudy from '$lib/CaseStudy.svelte';
  import heroImage from '$lib/assets/work-afida.png';

  const data = {
    eyebrow: m.case_afida_eyebrow(),
    title: m.case_afida_title(),
    lede: m.case_afida_lede(),
    liveUrl: 'https://afida.com',
    visitCta: m.case_afida_visit_cta(),
    heroImage,
    stats: [
      { value: m.case_afida_stat_1_value(), label: m.case_afida_stat_1_label() },
      { value: m.case_afida_stat_2_value(), label: m.case_afida_stat_2_label() },
      { value: m.case_afida_stat_3_value(), label: m.case_afida_stat_3_label() },
      { value: m.case_afida_stat_4_value(), label: m.case_afida_stat_4_label() }
    ],
    challengeTitle: m.case_afida_challenge_title(),
    challengeSubtitle: m.case_afida_challenge_subtitle(),
    challenges: [
      { title: m.case_afida_challenge_1_title(), body: m.case_afida_challenge_1() },
      { title: m.case_afida_challenge_2_title(), body: m.case_afida_challenge_2() },
      { title: m.case_afida_challenge_3_title(), body: m.case_afida_challenge_3() }
    ],
    solutionTitle: m.case_afida_solution_title(),
    solutionSubtitle: m.case_afida_solution_subtitle(),
    solutions: [
      { title: m.case_afida_solution_1_title(), body: m.case_afida_solution_1() },
      { title: m.case_afida_solution_2_title(), body: m.case_afida_solution_2() },
      { title: m.case_afida_solution_3_title(), body: m.case_afida_solution_3() },
      { title: m.case_afida_solution_4_title(), body: m.case_afida_solution_4() }
    ],
    stackTitle: m.case_afida_stack_title(),
    stackSubtitle: m.case_afida_stack_subtitle(),
    stack: [
      { name: 'Rails 8', role: 'Backend monolith' },
      { name: 'PostgreSQL', role: 'Primary database' },
      { name: 'Hotwire', role: 'Turbo + Stimulus' },
      { name: 'Vite + Tailwind 4', role: 'Frontend toolchain' },
      { name: 'Stripe Checkout', role: 'Hosted payments' },
      { name: 'Mailgun', role: 'Transactional email' },
      { name: 'AWS S3', role: 'Image storage' },
      { name: 'Solid Queue', role: 'Background jobs' },
      { name: 'Sentry', role: 'Error monitoring' },
      { name: 'Google Merchant', role: 'Product feed XML' }
    ],
    resultsTitle: m.case_afida_results_title(),
    resultsSubtitle: m.case_afida_results_subtitle(),
    results: [
      { label: m.case_afida_results_1_label(), value: m.case_afida_results_1_value() },
      { label: m.case_afida_results_2_label(), value: m.case_afida_results_2_value() },
      { label: m.case_afida_results_3_label(), value: m.case_afida_results_3_value() }
    ],
    bylineTitle: m.case_afida_byline_title(),
    byline: m.case_afida_byline(),
    ctaTitle: m.case_afida_cta_title(),
    ctaBody: m.case_afida_cta_body()
  };
</script>

<svelte:head>
  <title>{m.case_afida_meta_title()}</title>
  <meta name="description" content={m.case_afida_meta_description()} />
</svelte:head>

<CaseStudy {data} />
