<script>
	import * as m from '$lib/paraglide/messages';
	import { localizeHref } from '$lib/href';
	import Closing from '$lib/Closing.svelte';
	import JsonLd from '$lib/JsonLd.svelte';
	import { page } from '$app/stores';

	let { data } = $props();

	const SITE_URL = 'https://laurentcurau.com';
	const breadcrumb = $derived({
		'@context': 'https://schema.org',
		'@type': 'BreadcrumbList',
		itemListElement: [
			{
				'@type': 'ListItem',
				position: 1,
				name: 'Laurent Curau',
				item: SITE_URL + localizeHref('/')
			},
			{
				'@type': 'ListItem',
				position: 2,
				name: m.portfolio_title(),
				item: SITE_URL + localizeHref('/portfolio')
			},
			{
				'@type': 'ListItem',
				position: 3,
				name: data.title,
				item: SITE_URL + $page.url.pathname
			}
		]
	});

	const alt = $derived(m.case_screenshot_alt({ name: data.title }));
</script>

<JsonLd data={breadcrumb} />

<div class="frame">
	<div class="canvas case">
		<p class="back">
			<a class="link strong" href={localizeHref('/portfolio')}>{m.case_back()}</a>
		</p>

		<article class="sheet">
			<header class="column intro">
				<h1 class="title">{data.title}</h1>
				<p class="lead">{data.description}</p>
				<p class="facts">
					{data.platform}. {data.category}. {data.year}.
					<a class="link strong" href={data.liveUrl} target="_blank" rel="noopener noreferrer"
						>{data.visitCta}</a
					>
				</p>
			</header>

			<img
				class="shot"
				src={data.imagePrimary}
				{alt}
				width={data.imageWidth ?? 1440}
				height={data.imageHeight ?? 900}
				fetchpriority="high"
			/>

			<dl class="rows">
				{#each data.sections as s}
					<div class="row">
						<dt>{s.heading}</dt>
						<dd>{s.body}</dd>
					</div>
				{/each}
			</dl>

			{#if data.imageSecondary}
				<img
					class="shot"
					src={data.imageSecondary}
					{alt}
					width={data.imageWidth ?? 1440}
					height={data.imageHeight ?? 900}
					loading="lazy"
				/>
			{/if}
		</article>
	</div>
</div>

<Closing question={m.closing_case_question()} />

<style>
	.case {
		padding-top: 40px;
		gap: 24px;
	}

	.back {
		width: calc(100% - 2 * var(--gutter));
		max-width: var(--sheet-width);
		font-size: 17px;
		line-height: 24px;
	}

	.sheet {
		gap: 46px;
	}

	.intro {
		display: flex;
		flex-direction: column;
		align-items: center;
		gap: 16px;
		text-align: center;
	}

	.facts {
		font-size: 17px;
		line-height: 26px;
		color: var(--muted);
	}

	.rows {
		--label-width: 180px;
	}

	.rows .row {
		padding-block: 22px;
		line-height: 28px;
	}

	@media (max-width: 760px) {
		.case {
			padding-top: 20px;
			gap: 16px;
		}

		.back {
			padding-inline: 12px;
		}

		.sheet {
			gap: 24px;
		}

		.intro {
			gap: 12px;
		}

		.intro .title {
			text-align: center;
		}

		.rows .row {
			padding-block: 16px;
			line-height: 25px;
		}
	}
</style>
