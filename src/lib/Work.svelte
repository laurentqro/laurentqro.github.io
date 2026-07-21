<script>
	import * as m from '$lib/paraglide/messages';
	import { localizeHref } from '$lib/paraglide/runtime';
	import afidaImg from '$lib/assets/work-afida.webp';
	import gareImg from '$lib/assets/work-gare.webp';
	import ccaImg from '$lib/assets/work-cca.webp';
	import mdbImg from '$lib/assets/work-mdb.webp';

	const projects = [
		{
			image: afidaImg,
			title: m.case_afida_title(),
			category: m.portfolio_card_afida_category(),
			href: '/case-study/afida'
		},
		{
			image: gareImg,
			title: m.case_gare_title(),
			category: m.portfolio_card_gare_category(),
			href: '/case-study/agence-de-la-gare'
		},
		{
			image: mdbImg,
			title: m.case_mdb_title(),
			category: m.portfolio_card_mdb_category(),
			href: '/case-study/maison-de-bacon'
		},
		{
			image: ccaImg,
			title: m.case_cca_title(),
			category: m.portfolio_card_cca_category(),
			href: '/case-study/christian-curau-architecte'
		}
	];
</script>

<section id="work" class="work">
	<div class="container">
		<div class="header">
			<h2>{m.home_work_title()}</h2>
		</div>

		<div class="grid">
			{#each projects as p, i}
				<a href={localizeHref(p.href)} class="card">
					<div class="card-media">
						<img
							src={p.image}
							alt={p.title}
							width="1440"
							height="900"
							loading={i === 0 ? 'eager' : 'lazy'}
						/>
					</div>
					<div class="card-body">
						<div class="card-meta">{p.category}</div>
						<h3 class="card-title">{p.title}</h3>
					</div>
				</a>
			{/each}
		</div>

		<div class="cta-row">
			<a href={localizeHref('/portfolio')} class="cta">
				{m.home_work_cta()}
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
	</div>
</section>

<style>
	.work {
		padding: 7rem 0;
		background: #0f0f1a;
	}

	.container {
		max-width: 1200px;
		margin: 0 auto;
		padding: 0 2rem;
	}

	.header {
		text-align: center;
		margin-bottom: 4rem;
	}

	.header h2 {
		font-family: 'Plus Jakarta Sans', sans-serif;
		font-size: clamp(2rem, 4vw, 3rem);
		font-weight: 800;
		color: #e2e8f0;
		margin: 0 0 0.75rem;
		line-height: 1.1;
		letter-spacing: -0.02em;
	}

	.header p {
		font-family: 'JetBrains Mono', monospace;
		color: rgba(255, 255, 255, 0.4);
		font-size: 0.95rem;
		margin: 0;
	}

	.grid {
		display: grid;
		grid-template-columns: repeat(3, 1fr);
		gap: 1.5rem;
		margin-bottom: 3rem;
	}

	.card {
		display: block;
		background: #1a1a2e;
		border: 1px solid rgba(102, 126, 234, 0.12);
		border-radius: 1rem;
		overflow: hidden;
		text-decoration: none;
		color: inherit;
		transition:
			transform 0.25s ease,
			border-color 0.25s ease;
	}

	.card:hover {
		transform: translateY(-3px);
		border-color: rgba(102, 126, 234, 0.3);
	}

	.card-media {
		overflow: hidden;
		aspect-ratio: 4 / 3;
		background: #0f0f1a;
	}

	.card-media img {
		width: 100%;
		height: 100%;
		display: block;
		object-fit: cover;
		transition: transform 0.4s ease;
	}

	.card:hover .card-media img {
		transform: scale(1.03);
	}

	.card-body {
		padding: 1.5rem 1.75rem 1.75rem;
	}

	.card-meta {
		font-family: 'JetBrains Mono', monospace;
		font-size: 0.72rem;
		color: rgba(255, 255, 255, 0.4);
		text-transform: uppercase;
		letter-spacing: 0.08em;
		margin-bottom: 0.5rem;
	}

	.card-title {
		font-family: 'Plus Jakarta Sans', sans-serif;
		font-size: 1.25rem;
		font-weight: 700;
		color: #f5f5fa;
		margin: 0;
		line-height: 1.2;
	}

	.cta-row {
		text-align: center;
	}

	.cta {
		display: inline-flex;
		align-items: center;
		gap: 0.5rem;
		font-family: 'JetBrains Mono', monospace;
		color: rgba(255, 255, 255, 0.7);
		text-decoration: none;
		font-weight: 600;
		font-size: 0.9rem;
		padding: 0.9rem 1.75rem;
		border: 1px solid rgba(102, 126, 234, 0.3);
		border-radius: 0.5rem;
		transition: all 0.2s ease;
	}

	.cta:hover {
		color: white;
		border-color: rgba(102, 126, 234, 0.6);
		background: rgba(102, 126, 234, 0.08);
	}

	.cta svg {
		width: 1rem;
		height: 1rem;
	}

	@media (max-width: 800px) {
		.work {
			padding: 4rem 0;
		}
		.grid {
			grid-template-columns: 1fr;
			gap: 1.25rem;
		}
	}
</style>
