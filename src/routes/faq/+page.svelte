<script>
	import * as m from '$lib/paraglide/messages';
	import Seo from '$lib/Seo.svelte';
	import JsonLd from '$lib/JsonLd.svelte';
	import Closing from '$lib/Closing.svelte';

	const faq = [
		{
			title: m.faq_cost_title(),
			items: [
				{ q: m.faq_cost_1_q(), a: m.faq_cost_1_a() },
				{ q: m.faq_cost_2_q(), a: m.faq_cost_2_a() },
				{ q: m.faq_cost_3_q(), a: m.faq_cost_3_a() }
			]
		},
		{
			title: m.faq_data_title(),
			items: [
				{ q: m.faq_data_1_q(), a: m.faq_data_1_a() },
				{ q: m.faq_data_2_q(), a: m.faq_data_2_a() },
				{ q: m.faq_data_3_q(), a: m.faq_data_3_a() }
			]
		},
		{
			title: m.faq_security_title(),
			items: [
				{ q: m.faq_security_1_q(), a: m.faq_security_1_a() },
				{ q: m.faq_security_2_q(), a: m.faq_security_2_a() },
				{ q: m.faq_security_3_q(), a: m.faq_security_3_a() }
			]
		}
	];

	// Built from the visible questions, so the structured data cannot differ from the page.
	const faqSchema = {
		'@context': 'https://schema.org',
		'@type': 'FAQPage',
		mainEntity: faq.flatMap((group) =>
			group.items.map((item) => ({
				'@type': 'Question',
				name: item.q,
				acceptedAnswer: { '@type': 'Answer', text: item.a }
			}))
		)
	};
</script>

<Seo title={m.faq_meta_title()} description={m.faq_meta_description()} />
<JsonLd data={faqSchema} />

<div class="frame">
	<div class="canvas faq">
		<article class="sheet">
			<header class="column intro">
				<h1 class="title">{m.faq_title()}</h1>
				<p class="lead">{m.faq_intro()}</p>
			</header>

			{#each faq as group}
				<section class="column group">
					<h2 class="subtitle">{group.title}</h2>
					<dl>
						{#each group.items as item}
							<div class="item">
								<dt>{item.q}</dt>
								<dd class="prose">{item.a}</dd>
							</div>
						{/each}
					</dl>
				</section>
			{/each}
		</article>
	</div>
</div>

<Closing question={m.closing_faq_question()} />

<style>
	.faq {
		padding-top: 62px;
	}

	.intro {
		display: flex;
		flex-direction: column;
		gap: 14px;
	}

	.subtitle {
		padding-bottom: 12px;
		border-bottom: 1px solid var(--rule);
	}

	.item {
		display: flex;
		flex-direction: column;
		gap: 6px;
		padding-block: 20px;
		border-bottom: 1px solid var(--rule);
	}

	.item:last-child {
		border-bottom: 0;
		padding-bottom: 0;
	}

	dt {
		font-weight: 700;
	}

	@media (max-width: 760px) {
		.faq {
			padding-top: 20px;
		}

		.sheet {
			gap: 28px;
		}

		.item {
			padding-block: 16px;
		}
	}
</style>
