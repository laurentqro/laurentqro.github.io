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
</script>

<svelte:head>
	<!-- Basic Meta Tags -->
	<title>{m.meta_title()}</title>
	<meta name="description" content={m.meta_description()} />
	<meta name="keywords" content={m.meta_keywords()} />
	<meta name="author" content="Laurent Curau" />
	<meta name="robots" content="index, follow" />
	<meta charset="utf-8" />
	<meta name="viewport" content="width=device-width, initial-scale=1" />
	
	<!-- Open Graph Meta Tags (Facebook, LinkedIn) -->
	<meta property="og:title" content={m.meta_og_title()} />
	<meta property="og:description" content={m.meta_og_description()} />
	<meta property="og:type" content="website" />
	<meta property="og:url" content={$page.url.href} />
	<meta property="og:site_name" content="Laurent Curau - Fractional CTO" />
	<meta property="og:image" content="https://laurentcurau.com/logo.png" />
	<meta property="og:image:type" content="image/png" />
	<meta property="og:image:width" content="1200" />
	<meta property="og:image:height" content="630" />
	<meta property="og:image:alt" content="Laurent Curau Logo" />
	
	<!-- Twitter Card Meta Tags -->
	<meta name="twitter:card" content="summary_large_image" />
	<meta name="twitter:title" content={m.meta_og_title()} />
	<meta name="twitter:description" content={m.meta_og_description()} />
	<meta name="twitter:image" content="https://laurentcurau.com/logo.png" />
	<meta name="twitter:image:alt" content="Laurent Curau Logo" />
	
	<!-- Additional SEO Meta Tags -->
	<meta name="theme-color" content="#667eea" />
	<meta name="msapplication-TileColor" content="#667eea" />
	<link rel="canonical" href={$page.url.href} />
	
	<!-- Multilingual SEO -->
	{#each locales as lang}
		<link rel="alternate" hreflang={lang} href={localizeHref($page.url.pathname, { locale: lang })} />
	{/each}
	<link rel="alternate" hreflang="x-default" href={localizeHref($page.url.pathname, { locale: 'fr' })} />
	
	<!-- Favicon -->
	<link rel="icon" href={favicon} />
	<link rel="apple-touch-icon" href={favicon} />
	
	<!-- Structured Data: Person (JSON-LD) -->
	<script type="application/ld+json">
		{JSON.stringify({
			"@context": "https://schema.org",
			"@type": "Person",
			"name": "Laurent Curau",
			"jobTitle": m.footer_brand_description(),
			"description": m.meta_description(),
			"url": "https://laurentcurau.com",
			"image": "https://laurentcurau.com/logo.png",
			"address": {
				"@type": "PostalAddress",
				"addressLocality": "Monaco",
				"postalCode": "98000",
				"addressCountry": "MC"
			},
			"sameAs": [
				"https://www.linkedin.com/in/laurentcurau"
			],
			"knowsAbout": [
				"Real Estate Software",
				"Custom CRM Development",
				"Business Automation",
				"Monaco Real Estate IT",
				"AML/KYC Compliance Software"
			],
			"offers": {
				"@type": "Service",
				"name": m.hero_title(),
				"description": m.meta_description(),
				"areaServed": {
					"@type": "City",
					"name": "Monaco"
				},
				"provider": {
					"@type": "Person",
					"name": "Laurent Curau"
				}
			}
		})}
	</script>

	<!-- Structured Data: LocalBusiness (JSON-LD) -->
	<script type="application/ld+json">
		{JSON.stringify({
			"@context": "https://schema.org",
			"@type": "ProfessionalService",
			"name": "Laurent Curau - " + m.footer_brand_description(),
			"description": m.meta_description(),
			"url": "https://laurentcurau.com",
			"image": "https://laurentcurau.com/logo.png",
			"email": "hello@laurentcurau.com",
			"address": {
				"@type": "PostalAddress",
				"addressLocality": "Monaco",
				"postalCode": "98000",
				"addressCountry": "MC"
			},
			"geo": {
				"@type": "GeoCoordinates",
				"latitude": 43.7384,
				"longitude": 7.4246
			},
			"areaServed": {
				"@type": "City",
				"name": "Monaco"
			},
			"priceRange": "€€€",
			"openingHoursSpecification": {
				"@type": "OpeningHoursSpecification",
				"dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
				"opens": "09:00",
				"closes": "18:00"
			},
			"hasOfferCatalog": {
				"@type": "OfferCatalog",
				"name": "Services",
				"itemListElement": [
					{
						"@type": "Offer",
						"itemOffered": {
							"@type": "Service",
							"name": m.services_card_1_title(),
							"description": m.services_card_1()
						}
					},
					{
						"@type": "Offer",
						"itemOffered": {
							"@type": "Service",
							"name": m.services_card_2_title(),
							"description": m.services_card_2()
						}
					},
					{
						"@type": "Offer",
						"itemOffered": {
							"@type": "Service",
							"name": m.services_card_3_title(),
							"description": m.services_card_3()
						}
					}
				]
			}
		})}
	</script>
</svelte:head>

<!-- Hidden anchors for SSG - SvelteKit crawls these during build -->
<div style="display:none">
	{#each locales as locale}
		<a href={localizeHref($page.url.pathname, { locale })}>{locale}</a>
	{/each}
</div>

<Navigation />
{@render children?.()}