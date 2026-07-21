<script>
	import * as m from '$lib/paraglide/messages';
	import Seo from '$lib/Seo.svelte';
	import { whatsappLink } from '$lib/whatsapp.js';
	import Footer from '$lib/Footer.svelte';

	const waHref = whatsappLink(m.whatsapp_prefill());

	const services = [
		{
			index: m.service_1_index(),
			title: m.service_1_title(),
			summary: m.service_1_summary(),
			bullets: [m.service_1_bullet_1(), m.service_1_bullet_2(), m.service_1_bullet_3()]
		},
		{
			index: m.service_2_index(),
			title: m.service_2_title(),
			summary: m.service_2_summary(),
			bullets: [m.service_2_bullet_1(), m.service_2_bullet_2(), m.service_2_bullet_3()]
		},
		{
			index: m.service_3_index(),
			title: m.service_3_title(),
			summary: m.service_3_summary(),
			bullets: [m.service_3_bullet_1(), m.service_3_bullet_2(), m.service_3_bullet_3()]
		},
		{
			index: m.service_4_index(),
			title: m.service_4_title(),
			summary: m.service_4_summary(),
			bullets: [m.service_4_bullet_1(), m.service_4_bullet_2(), m.service_4_bullet_3()]
		}
	];
</script>

<Seo title={m.services_meta_title()} description={m.services_meta_description()} />

<section class="hero">
	<div class="hero-inner">
		<div class="eyebrow">{m.services_page_eyebrow()}</div>
		<h1>{m.services_page_title()}</h1>
		<p>{m.services_page_subtitle()}</p>
		<a href={waHref} target="_blank" rel="noopener noreferrer" class="cta-primary">
			<svg class="cta-icon" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
				<path
					d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.077 4.487.71.306 1.263.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.83 9.83 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413"
				/>
			</svg>
			{m.services_page_cta_primary()}
		</a>
	</div>
</section>

<section class="services-list">
	<div class="container">
		{#each services as s, i}
			<article class="service" class:reverse={i % 2 === 1}>
				<div class="service-head">
					<div class="service-index">{s.index}</div>
				</div>
				<div class="service-body">
					<h2>{s.title}</h2>
					<p class="service-summary">{s.summary}</p>
					<ul class="service-bullets">
						{#each s.bullets as b}
							<li>{b}</li>
						{/each}
					</ul>
					<a href={waHref} target="_blank" rel="noopener noreferrer" class="service-cta">
						{m.whatsapp_cta()}
						<svg
							viewBox="0 0 24 24"
							fill="none"
							stroke="currentColor"
							stroke-width="2"
							aria-hidden="true"
						>
							<line x1="5" y1="12" x2="19" y2="12" />
							<polyline points="12,5 19,12 12,19" />
						</svg>
					</a>
				</div>
			</article>
		{/each}
	</div>
</section>

<Footer />

<style>
	.hero {
		padding: 11rem 2rem 5rem;
		background: #0f0f1a;
		border-bottom: 1px solid rgba(102, 126, 234, 0.08);
	}

	.hero-inner {
		max-width: 900px;
		margin: 0 auto;
		text-align: center;
	}

	.eyebrow {
		font-family: 'JetBrains Mono', monospace;
		font-size: 0.75rem;
		color: rgba(255, 255, 255, 0.4);
		text-transform: uppercase;
		letter-spacing: 0.15em;
		margin-bottom: 1.25rem;
	}

	.hero h1 {
		font-family: 'Plus Jakarta Sans', sans-serif;
		font-size: clamp(2.5rem, 6vw, 4.5rem);
		font-weight: 800;
		color: #f5f5fa;
		margin: 0 0 1.25rem;
		letter-spacing: -0.03em;
	}

	.hero p {
		font-size: 1.15rem;
		color: rgba(255, 255, 255, 0.6);
		line-height: 1.6;
		max-width: 700px;
		margin: 0 auto 2rem;
	}

	.cta-primary {
		display: inline-flex;
		align-items: center;
		gap: 0.5rem;
		font-family: 'JetBrains Mono', monospace;
		background: linear-gradient(135deg, #25d366 0%, #128c7e 100%);
		color: white;
		padding: 0.95rem 1.75rem;
		border-radius: 0.5rem;
		text-decoration: none;
		font-weight: 700;
		font-size: 0.9rem;
		transition:
			transform 0.25s ease,
			box-shadow 0.25s ease;
		box-shadow: 0 0 25px rgba(37, 211, 102, 0.25);
	}

	.cta-primary:hover {
		transform: translateY(-2px);
		box-shadow: 0 0 40px rgba(37, 211, 102, 0.45);
	}

	.cta-icon {
		width: 1rem;
		height: 1rem;
	}

	.services-list {
		padding: 6rem 0;
		background: #0f0f1a;
	}

	.container {
		max-width: 1100px;
		margin: 0 auto;
		padding: 0 2rem;
	}

	.service {
		display: grid;
		grid-template-columns: 200px 1fr;
		gap: 3rem;
		padding: 4rem 0;
		border-top: 1px solid rgba(255, 255, 255, 0.06);
	}

	.service:first-child {
		border-top: 0;
		padding-top: 0;
	}

	.service-index {
		font-family: 'JetBrains Mono', monospace;
		font-size: 4rem;
		font-weight: 800;
		color: transparent;
		-webkit-text-stroke: 1px rgba(165, 180, 252, 0.4);
		line-height: 1;
		letter-spacing: -0.04em;
	}

	.service-body h2 {
		font-family: 'Plus Jakarta Sans', sans-serif;
		font-size: clamp(1.75rem, 3vw, 2.25rem);
		font-weight: 800;
		color: #f5f5fa;
		margin: 0 0 1rem;
		letter-spacing: -0.02em;
		line-height: 1.15;
	}

	.service-summary {
		font-size: 1.05rem;
		color: rgba(255, 255, 255, 0.6);
		line-height: 1.7;
		margin: 0 0 1.5rem;
		max-width: 640px;
	}

	.service-bullets {
		list-style: none;
		padding: 0;
		margin: 0 0 2rem;
		display: flex;
		flex-direction: column;
		gap: 0.5rem;
	}

	.service-bullets li {
		color: rgba(255, 255, 255, 0.7);
		font-family: 'JetBrains Mono', monospace;
		font-size: 0.85rem;
		padding-left: 1.5rem;
		position: relative;
	}

	.service-bullets li::before {
		content: '→';
		position: absolute;
		left: 0;
		color: rgba(165, 180, 252, 0.6);
	}

	.service-cta {
		display: inline-flex;
		align-items: center;
		gap: 0.4rem;
		font-family: 'JetBrains Mono', monospace;
		color: #a5b4fc;
		text-decoration: none;
		font-weight: 600;
		font-size: 0.85rem;
		transition:
			gap 0.2s ease,
			color 0.2s ease;
	}

	.service-cta:hover {
		color: #c4b5fd;
		gap: 0.65rem;
	}

	.service-cta svg {
		width: 1rem;
		height: 1rem;
	}

	@media (max-width: 800px) {
		.hero {
			padding: 8rem 1.25rem 4rem;
		}

		.service {
			grid-template-columns: 1fr;
			gap: 1rem;
			padding: 3rem 0;
		}

		.service-index {
			font-size: 3rem;
		}
	}
</style>
