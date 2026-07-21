<script>
	import '../app.css';
	import favicon from '$lib/assets/favicon.ico';
	import Navigation from '$lib/Navigation.svelte';
	import { onMount } from 'svelte';
	import { locales, localizeHref } from '$lib/paraglide/runtime';
	import * as m from '$lib/paraglide/messages';
	import { page } from '$app/stores';

	let { children } = $props();

	onMount(() => {
		// Any initialization code if needed
	});

	// Canonical origin — $page.url is "http://sveltekit-prerender" during SSG
	const SITE_URL = 'https://laurentcurau.com';
	const canonicalUrl = $derived(SITE_URL + $page.url.pathname);

	// localizeHref drops the trailing slash the site is configured to use,
	// which would point hreflang at a URL that redirects.
	const altHref = (locale) => {
		const path = localizeHref($page.url.pathname, { locale });
		return SITE_URL + (path.endsWith('/') ? path : path + '/');
	};

	// Escape the "less than" character so a closing script tag inside any
	// string can't break out. Built from its code point because the Svelte
	// parser treats a literal "<" in this block as the start of a tag.
	const LT = String.fromCharCode(60);
	const jsonLd = (data) => JSON.stringify(data).split(LT).join('\\u003c');

	const personLd = $derived(
		jsonLd({
			'@context': 'https://schema.org',
			'@type': 'Person',
			name: 'Laurent Curau',
			jobTitle: m.footer_brand_description(),
			description: m.meta_description(),
			url: SITE_URL,
			image: SITE_URL + '/logo.png',
			address: {
				'@type': 'PostalAddress',
				addressLocality: 'Monaco',
				postalCode: '98000',
				addressCountry: 'MC'
			},
			sameAs: ['https://www.linkedin.com/in/laurentcurau'],
			alumniOf: {
				'@type': 'CollegeOrUniversity',
				name: 'University of Oxford',
				url: 'https://www.ox.ac.uk/',
				sameAs: 'https://en.wikipedia.org/wiki/University_of_Oxford'
			},
			hasCredential: {
				'@type': 'EducationalOccupationalCredential',
				credentialCategory: 'degree',
				educationalLevel: "Master's",
				name: 'MSc in Software Engineering',
				recognizedBy: {
					'@type': 'CollegeOrUniversity',
					name: 'University of Oxford'
				}
			},
			knowsAbout: [
				'Custom Software Development',
				'Custom CRM Development',
				'Business Automation',
				'Monaco SME IT Services',
				'Professional Services Software'
			],
			offers: {
				'@type': 'Service',
				name: m.meta_og_title(),
				description: m.meta_description(),
				areaServed: {
					'@type': 'City',
					name: 'Monaco'
				},
				provider: {
					'@type': 'Person',
					name: 'Laurent Curau'
				}
			}
		})
	);

	const businessLd = $derived(
		jsonLd({
			'@context': 'https://schema.org',
			'@type': 'ProfessionalService',
			name: 'Laurent Curau - ' + m.footer_brand_description(),
			description: m.meta_description(),
			url: SITE_URL,
			image: SITE_URL + '/logo.png',
			email: 'hello@laurentcurau.com',
			address: {
				'@type': 'PostalAddress',
				addressLocality: 'Monaco',
				postalCode: '98000',
				addressCountry: 'MC'
			},
			geo: {
				'@type': 'GeoCoordinates',
				latitude: 43.7384,
				longitude: 7.4246
			},
			areaServed: {
				'@type': 'City',
				name: 'Monaco'
			},
			priceRange: '€€€',
			openingHoursSpecification: {
				'@type': 'OpeningHoursSpecification',
				dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
				opens: '09:00',
				closes: '18:00'
			},
			hasOfferCatalog: {
				'@type': 'OfferCatalog',
				name: 'Services',
				itemListElement: [
					{
						'@type': 'Offer',
						itemOffered: {
							'@type': 'Service',
							name: m.service_1_title(),
							description: m.service_1_summary()
						}
					},
					{
						'@type': 'Offer',
						itemOffered: {
							'@type': 'Service',
							name: m.service_2_title(),
							description: m.service_2_summary()
						}
					},
					{
						'@type': 'Offer',
						itemOffered: {
							'@type': 'Service',
							name: m.service_3_title(),
							description: m.service_3_summary()
						}
					}
				]
			}
		})
	);
</script>

<svelte:head>
	<!-- Basic Meta Tags -->
	<!-- Title, description and og:title/og:description are set per page via Seo.svelte -->
	<meta name="author" content="Laurent Curau" />
	<meta name="robots" content="index, follow" />

	<!-- Open Graph Meta Tags (Facebook, LinkedIn) -->
	<meta property="og:type" content="website" />
	<meta property="og:url" content={canonicalUrl} />
	<meta property="og:site_name" content="Laurent Curau" />
	<meta property="og:image" content="https://laurentcurau.com/og-image.png" />
	<meta property="og:image:type" content="image/png" />
	<meta property="og:image:width" content="1200" />
	<meta property="og:image:height" content="630" />
	<meta property="og:image:alt" content="Laurent Curau — Ingénieur logiciel à Monaco" />

	<!-- Twitter Card Meta Tags -->
	<meta name="twitter:card" content="summary_large_image" />
	<meta name="twitter:image" content="https://laurentcurau.com/og-image.png" />
	<meta name="twitter:image:alt" content="Laurent Curau — Ingénieur logiciel à Monaco" />

	<!-- Additional SEO Meta Tags -->
	<meta name="theme-color" content="#667eea" />
	<meta name="msapplication-TileColor" content="#667eea" />
	<link rel="canonical" href={canonicalUrl} />

	<!-- Multilingual SEO -->
	{#each locales as lang}
		<link rel="alternate" hreflang={lang} href={altHref(lang)} />
	{/each}
	<link rel="alternate" hreflang="x-default" href={altHref('fr')} />

	<!-- Favicon -->
	<link rel="icon" href={favicon} />
	<link rel="apple-touch-icon" href={favicon} />

	<!-- Structured Data: Person (JSON-LD) -->
	<!-- eslint-disable-next-line svelte/no-at-html-tags -->
	{@html `<script type="application/ld+json">${personLd}<` + `/script>`}

	<!-- Structured Data: LocalBusiness (JSON-LD) -->
	{@html `<script type="application/ld+json">${businessLd}<` + `/script>`}
</svelte:head>

<!-- Hidden anchors for SSG - SvelteKit crawls these during build -->
<div style="display:none">
	{#each locales as locale}
		<a href={localizeHref($page.url.pathname, { locale })}>{locale}</a>
	{/each}
</div>

<Navigation />
{@render children?.()}
