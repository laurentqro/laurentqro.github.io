<!-- TODO: Replace placeholder testimonial text in messages/{en,fr}.json
     keys testimonials_quote_1..3, testimonials_author_*_name, testimonials_author_*_role.
     The placeholder ribbon below is a visual reminder; remove the .is-placeholder class
     from each card once the real quote is in. -->
<script>
	import * as m from '$lib/paraglide/messages';

	const testimonials = [
		{
			quote: m.testimonials_quote_1(),
			name: m.testimonials_author_1_name(),
			role: m.testimonials_author_1_role(),
			isPlaceholder: true
		},
		{
			quote: m.testimonials_quote_2(),
			name: m.testimonials_author_2_name(),
			role: m.testimonials_author_2_role(),
			isPlaceholder: true
		},
		{
			quote: m.testimonials_quote_3(),
			name: m.testimonials_author_3_name(),
			role: m.testimonials_author_3_role(),
			isPlaceholder: true
		}
	];
</script>

<section class="testimonials">
	<div class="container">
		<h2 class="section-title">{m.testimonials_title()}</h2>

		<div class="grid">
			{#each testimonials as t}
				<figure class="card" class:is-placeholder={t.isPlaceholder}>
					{#if t.isPlaceholder}
						<span class="ribbon">PLACEHOLDER</span>
					{/if}
					<svg class="quote-mark" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
						<path
							d="M9.983 3v7.391c0 5.704-3.731 9.57-8.983 10.609l-.995-2.151c2.432-.917 3.995-3.638 3.995-5.849h-4v-10h9.983zm14.017 0v7.391c0 5.704-3.748 9.571-9 10.609l-.996-2.151c2.433-.917 3.996-3.638 3.996-5.849h-3.983v-10h9.983z"
						/>
					</svg>
					<blockquote>{t.quote}</blockquote>
					<figcaption>
						<span class="author">{t.name}</span>
						<span class="role">{t.role}</span>
					</figcaption>
				</figure>
			{/each}
		</div>
	</div>
</section>

<style>
	.testimonials {
		background: #141422;
		padding: 7rem 2rem;
	}

	.container {
		max-width: 1200px;
		margin: 0 auto;
	}

	.section-title {
		font-family: 'Plus Jakarta Sans', sans-serif;
		font-size: clamp(2rem, 4vw, 3rem);
		font-weight: 800;
		color: #e2e8f0;
		line-height: 1.1;
		letter-spacing: -0.02em;
		margin: 0 0 3.5rem;
		text-align: center;
	}

	.grid {
		display: grid;
		grid-template-columns: repeat(3, 1fr);
		gap: 1.5rem;
	}

	.card {
		position: relative;
		background: #1a1a2e;
		border: 1px solid rgba(102, 126, 234, 0.12);
		border-radius: 1rem;
		padding: 2.5rem 2rem 2rem;
		margin: 0;
		display: flex;
		flex-direction: column;
		gap: 1.5rem;
		transition:
			transform 0.25s ease,
			border-color 0.25s ease;
	}

	.card:hover {
		transform: translateY(-3px);
		border-color: rgba(102, 126, 234, 0.3);
	}

	.card.is-placeholder {
		border-style: dashed;
		border-color: rgba(244, 178, 109, 0.3);
		background: #1d1a26;
	}

	.ribbon {
		position: absolute;
		top: 0.85rem;
		right: 0.85rem;
		font-family: 'JetBrains Mono', monospace;
		font-size: 0.6rem;
		color: rgba(244, 178, 109, 0.9);
		background: rgba(244, 178, 109, 0.1);
		border: 1px solid rgba(244, 178, 109, 0.3);
		padding: 0.2rem 0.55rem;
		border-radius: 999px;
		letter-spacing: 0.1em;
		text-transform: uppercase;
		font-weight: 700;
	}

	.quote-mark {
		width: 1.5rem;
		height: 1.5rem;
		color: rgba(165, 180, 252, 0.4);
		flex-shrink: 0;
	}

	blockquote {
		margin: 0;
		color: rgba(255, 255, 255, 0.75);
		line-height: 1.65;
		font-size: 1rem;
		flex: 1;
	}

	figcaption {
		display: flex;
		flex-direction: column;
		gap: 0.25rem;
		padding-top: 1rem;
		border-top: 1px solid rgba(255, 255, 255, 0.06);
	}

	.author {
		font-family: 'Plus Jakarta Sans', sans-serif;
		font-weight: 700;
		color: #e2e8f0;
		font-size: 0.95rem;
	}

	.role {
		font-family: 'JetBrains Mono', monospace;
		font-size: 0.75rem;
		color: rgba(255, 255, 255, 0.45);
		letter-spacing: 0.02em;
	}

	@media (max-width: 900px) {
		.grid {
			grid-template-columns: 1fr;
		}
		.testimonials {
			padding: 4rem 1.5rem;
		}
	}
</style>
