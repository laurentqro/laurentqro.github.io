<script>
	import '../app.css';
	import favicon from '$lib/assets/favicon.ico';
	import Header from '$lib/Header.svelte';
	import Footer from '$lib/Footer.svelte';
	import { locales } from '$lib/paraglide/runtime';
	import { localizeHref } from '$lib/href';
	import * as m from '$lib/paraglide/messages';
	import { page } from '$app/stores';

	let { children } = $props();

	// Canonical origin — $page.url is "http://sveltekit-prerender" during SSG
	const SITE_URL = 'https://laurentcurau.com';
	const canonicalUrl = $derived(SITE_URL + $page.url.pathname);

	const altHref = (locale) => SITE_URL + localizeHref($page.url.pathname, { locale });

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
			jobTitle: m.meta_job_title(),
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
				'AI integration',
				'Business process automation',
				'Custom software development',
				'Web development'
			],
			// schema.org has no `offers` on Person; `makesOffer` is the valid property.
			makesOffer: {
				'@type': 'Offer',
				itemOffered: {
					'@type': 'Service',
					name: m.meta_service_name(),
					description: m.meta_description(),
					areaServed: {
						'@type': 'City',
						name: 'Monaco'
					}
				}
			}
		})
	);

	const businessLd = $derived(
		jsonLd({
			'@context': 'https://schema.org',
			'@type': 'ProfessionalService',
			name: 'Laurent Curau',
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
			openingHoursSpecification: {
				'@type': 'OpeningHoursSpecification',
				dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
				opens: '09:00',
				closes: '18:00'
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
	<meta
		property="og:image:alt"
		content="Laurent Curau. J'intègre l'IA dans votre entreprise, de façon sécurisée."
	/>

	<!-- Twitter Card Meta Tags -->
	<meta name="twitter:card" content="summary_large_image" />
	<meta name="twitter:image" content="https://laurentcurau.com/og-image.png" />
	<meta
		name="twitter:image:alt"
		content="Laurent Curau. J'intègre l'IA dans votre entreprise, de façon sécurisée."
	/>

	<!-- Additional SEO Meta Tags -->
	<meta name="theme-color" content="#008080" />
	<meta name="msapplication-TileColor" content="#008080" />
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

<Header />
<main>
	{@render children?.()}
</main>
<Footer />
