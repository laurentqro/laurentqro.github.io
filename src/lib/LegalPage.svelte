<script>
	import * as m from '$lib/paraglide/messages';

	let { title, intro, sections } = $props();
</script>

<div class="frame">
	<div class="canvas legal">
		<article class="sheet">
			<header class="column intro">
				<h1 class="title">{title}</h1>
				<p class="updated">{m.legal_last_updated_label()}: {m.legal_last_updated_value()}</p>
				<p class="lead">{intro}</p>
			</header>

			{#each sections as section}
				<section class="column block">
					<h2 class="subtitle">{section.title}</h2>
					<p class="prose">{section.body}</p>
				</section>
			{/each}
		</article>
	</div>
</div>

<style>
	.legal {
		padding-top: 62px;
	}

	.intro {
		display: flex;
		flex-direction: column;
		gap: 14px;
	}

	.updated {
		font-size: 16px;
		line-height: 24px;
		color: var(--muted);
		text-align: center;
	}

	.block {
		display: flex;
		flex-direction: column;
		gap: 10px;
	}

	@media (max-width: 760px) {
		.legal {
			padding-top: 20px;
		}

		.sheet {
			gap: 28px;
		}

		.updated {
			text-align: left;
		}

		.block {
			gap: 6px;
		}
	}
</style>
