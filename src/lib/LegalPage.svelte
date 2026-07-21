<script>
	import * as m from '$lib/paraglide/messages';
	import Footer from '$lib/Footer.svelte';

	let { title, intro, sections } = $props();
</script>

<article class="legal">
	<div class="legal-inner">
		<div class="last-updated">
			<span class="last-updated-label">{m.legal_last_updated_label()}:</span>
			<span class="last-updated-value">{m.legal_last_updated_value()}</span>
		</div>

		<h1>{title}</h1>

		<p class="lede">{intro}</p>

		{#each sections as section}
			<section class="section">
				<h2>{section.title}</h2>
				<p>{section.body}</p>
			</section>
		{/each}
	</div>
</article>

<Footer />

<style>
	.legal {
		padding: 10rem 2rem 5rem;
		background: #0f0f1a;
	}

	.legal-inner {
		max-width: 720px;
		margin: 0 auto;
	}

	.last-updated {
		font-family: 'JetBrains Mono', monospace;
		font-size: 0.75rem;
		color: rgba(255, 255, 255, 0.4);
		text-transform: uppercase;
		letter-spacing: 0.15em;
		margin-bottom: 1.5rem;
	}

	.last-updated-value {
		color: rgba(255, 255, 255, 0.6);
	}

	h1 {
		font-family: 'Plus Jakarta Sans', sans-serif;
		font-size: clamp(2.25rem, 5vw, 3.5rem);
		font-weight: 800;
		color: #f5f5fa;
		margin: 0 0 1.5rem;
		line-height: 1.05;
		letter-spacing: -0.03em;
	}

	.lede {
		font-size: 1.1rem;
		color: rgba(255, 255, 255, 0.7);
		line-height: 1.65;
		margin: 0 0 3rem;
	}

	.section {
		margin-bottom: 2.5rem;
	}

	.section h2 {
		font-family: 'Plus Jakarta Sans', sans-serif;
		font-size: 1.4rem;
		font-weight: 700;
		color: #e2e8f0;
		margin: 0 0 0.85rem;
		letter-spacing: -0.01em;
	}

	.section p {
		color: rgba(255, 255, 255, 0.65);
		line-height: 1.7;
		margin: 0;
		font-size: 1rem;
	}

	@media (max-width: 700px) {
		.legal {
			padding: 8rem 1.25rem 4rem;
		}
	}
</style>
