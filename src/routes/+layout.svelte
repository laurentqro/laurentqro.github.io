<script>
	import '../app.css';
	import favicon from '$lib/assets/favicon.ico';
	import Navigation from '$lib/Navigation.svelte';

	let { children } = $props();
</script>

<svelte:head>
	<!-- Basic Meta Tags -->
	<title>Laurent Curau - Fractional CTO Services | Technical Leadership On-Demand</title>
	<meta name="description" content="Get senior engineering leadership without the full-time commitment. Laurent Curau provides fractional CTO services to help startups and growing companies build better products, make smarter tech decisions, and scale effectively." />
	<meta name="keywords" content="fractional CTO, technical leadership, startup CTO, engineering consultant, technology strategy, software architecture, team scaling, tech advisor, Monaco" />
	<meta name="author" content="Laurent Curau" />
	<meta name="robots" content="index, follow" />
	<meta charset="utf-8" />
	<meta name="viewport" content="width=device-width, initial-scale=1" />
	
	<!-- Open Graph Meta Tags (Facebook, LinkedIn) -->
	<meta property="og:title" content="Laurent Curau - Fractional CTO Services" />
	<meta property="og:description" content="Technical leadership on-demand for growing companies. Build better products, make smarter tech decisions, and scale your team effectively." />
	<meta property="og:type" content="website" />
	<meta property="og:url" content="https://laurentcurau.com" />
	<meta property="og:site_name" content="Laurent Curau - Fractional CTO" />
	<meta property="og:locale" content="en_US" />
	<meta property="og:image" content="https://laurentcurau.com/logo.png" />
	<meta property="og:image:type" content="image/png" />
	<meta property="og:image:width" content="1200" />
	<meta property="og:image:height" content="630" />
	<meta property="og:image:alt" content="Laurent Curau Logo" />
	
	<!-- Twitter Card Meta Tags -->
	<meta name="twitter:card" content="summary_large_image" />
	<meta name="twitter:title" content="Laurent Curau - Fractional CTO Services" />
	<meta name="twitter:description" content="Technical leadership on-demand for growing companies. 10+ years experience helping startups scale." />
	<meta name="twitter:image" content="https://laurentcurau.com/logo.png" />
	<meta name="twitter:image:alt" content="Laurent Curau Logo" />
	
	<!-- Additional SEO Meta Tags -->
	<meta name="theme-color" content="#667eea" />
	<meta name="msapplication-TileColor" content="#667eea" />
	<link rel="canonical" href="https://laurentcurau.com" />
	
	<!-- Favicon -->
	<link rel="icon" href={favicon} />
	<link rel="apple-touch-icon" href={favicon} />
	
	<!-- Structured Data (JSON-LD) -->
	<script type="application/ld+json">
		{
			"@context": "https://schema.org",
			"@type": "Person",
			"name": "Laurent Curau",
			"jobTitle": "Fractional CTO",
			"description": "Technical leadership consultant providing fractional CTO services to startups and growing companies",
			"url": "https://laurentcurau.com",
			"address": {
				"@type": "PostalAddress",
				"streetAddress": "10, rue du Gabian",
				"postalCode": "98000",
				"addressLocality": "Monaco",
				"addressCountry": "MC"
			},
			"sameAs": [],
			"knowsAbout": [
				"Software Architecture",
				"Technical Leadership",
				"Startup Scaling",
				"Engineering Management",
				"Technology Strategy"
			],
			"offers": {
				"@type": "Service",
				"name": "Fractional CTO Services",
				"description": "Technical leadership on-demand for growing companies",
				"provider": {
					"@type": "Person",
					"name": "Laurent Curau"
				}
			}
		}
	</script>
</svelte:head>

<Navigation />
{@render children?.()}
