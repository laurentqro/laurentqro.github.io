<script>
	import * as m from '$lib/paraglide/messages';
	import { localizeHref } from '$lib/href';
	import Seo from '$lib/Seo.svelte';
	import Closing from '$lib/Closing.svelte';
	import mdbImg from '$lib/assets/work-mdb.webp';
	import gareImg from '$lib/assets/work-gare.webp';
	import ccaImg from '$lib/assets/work-cca.webp';

	const projects = [
		{
			image: mdbImg,
			width: 1483,
			height: 812,
			category: m.case_mdb_meta_category_value(),
			year: m.case_mdb_meta_year_value(),
			title: m.case_mdb_title(),
			description: m.case_mdb_description(),
			href: '/case-study/maison-de-bacon'
		},
		{
			image: gareImg,
			width: 1440,
			height: 900,
			category: m.case_gare_meta_category_value(),
			year: m.case_gare_meta_year_value(),
			title: m.case_gare_title(),
			description: m.case_gare_description(),
			href: '/case-study/agence-de-la-gare'
		},
		{
			image: ccaImg,
			width: 1440,
			height: 900,
			category: m.case_cca_meta_category_value(),
			year: m.case_cca_meta_year_value(),
			title: m.case_cca_title(),
			description: m.case_cca_description(),
			href: '/case-study/christian-curau-architecte'
		}
	];
</script>

<Seo title={m.portfolio_meta_title()} description={m.portfolio_meta_description()} />

<div class="frame">
	<div class="canvas portfolio">
		<header class="column intro">
			<h1 class="title">{m.portfolio_title()}</h1>
			<p class="lead">{m.portfolio_lead()}</p>
		</header>

		{#each projects as p, i}
			<article class="sheet project">
				<a class="media" href={localizeHref(p.href)} tabindex="-1" aria-hidden="true">
					<img
						src={p.image}
						alt=""
						width={p.width}
						height={p.height}
						loading={i === 0 ? 'eager' : 'lazy'}
					/>
				</a>
				<div class="text">
					<p class="meta">{p.category}, {p.year}</p>
					<h2>{p.title}</h2>
					<p class="description">{p.description}</p>
					<p class="more">
						<a class="link strong" href={localizeHref(p.href)}
							>{m.portfolio_read_case()}<span class="sr-only">: {p.title}</span></a
						>
					</p>
				</div>
			</article>
		{/each}
	</div>
</div>

<Closing question={m.closing_portfolio_question()} />

<style>
	.portfolio {
		padding-top: 72px;
		gap: 31px;
	}

	.intro {
		display: flex;
		flex-direction: column;
		gap: 14px;
		padding: 0 var(--gutter) 24px;
		text-align: center;
	}

	.project {
		flex-direction: row;
		align-items: center;
		gap: 46px;
		padding: 46px;
	}

	.media {
		flex: 0 0 540px;
		aspect-ratio: 540 / 338;
		box-shadow: 0 0 0 1px rgba(0, 0, 0, 0.08);
	}

	.media img {
		width: 100%;
		height: 100%;
		object-fit: cover;
		object-position: center top;
	}

	.text {
		flex: 1 1 0;
		min-width: 0;
		display: flex;
		flex-direction: column;
		gap: 12px;
	}

	.meta {
		font-size: 16px;
		line-height: 24px;
		color: var(--muted);
	}

	h2 {
		font-size: 32px;
		line-height: 38px;
		font-weight: 800;
		letter-spacing: -0.026em;
	}

	.description {
		line-height: 28px;
	}

	.more {
		padding-top: 6px;
	}

	@media (max-width: 1100px) {
		.project {
			flex-direction: column;
			align-items: stretch;
			gap: 28px;
			padding: 31px;
		}

		.media {
			flex: none;
		}
	}

	@media (max-width: 760px) {
		.portfolio {
			padding-top: 36px;
			gap: 16px;
		}

		.intro {
			gap: 10px;
			padding-bottom: 12px;
		}

		.project {
			gap: 20px;
			padding: 16px 16px 24px;
		}

		.text {
			gap: 8px;
			padding-inline: 8px;
		}

		h2 {
			font-size: 26px;
			line-height: 31px;
		}

		.description {
			line-height: 25px;
		}

		.more {
			padding-top: 2px;
		}
	}
</style>
