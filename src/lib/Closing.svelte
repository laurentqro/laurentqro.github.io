<script>
	import * as m from '$lib/paraglide/messages';
	import { prefilledWhatsappLink } from '$lib/whatsapp.js';

	let { question, greeting = false } = $props();

	const waHref = prefilledWhatsappLink();
</script>

<section class="closing">
	{#if greeting}
		<h2>{m.closing_greeting()}</h2>
	{/if}
	<p>
		<strong>{question}</strong>
		<a class="link strong" href={waHref} target="_blank" rel="noopener noreferrer"
			>{m.closing_link()}</a
		><strong>.</strong>
		{m.closing_after()}
	</p>
</section>

<style>
	.closing {
		display: flex;
		flex-direction: column;
		align-items: center;
		gap: 12px;
		padding: 96px var(--frame-inset) 8px;
		text-align: center;
	}

	h2 {
		font-size: 38px;
		line-height: 44px;
		font-weight: 800;
		letter-spacing: -0.026em;
	}

	p {
		max-width: 640px;
		font-size: 23px;
		line-height: 30px;
	}

	@media (max-width: 760px) {
		.closing {
			gap: 10px;
			padding: 64px 24px 0;
		}

		h2 {
			font-size: 30px;
			line-height: 36px;
		}

		p {
			font-size: 19px;
			line-height: 27px;
		}
	}
</style>
