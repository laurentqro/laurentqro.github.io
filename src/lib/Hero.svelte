<script>
	import * as m from '$lib/paraglide/messages';
	import { onMount } from 'svelte';
	import { whatsappLink } from '$lib/whatsapp.js';

	const waHref = whatsappLink(m.whatsapp_prefill());

	const rotatingWords = [
		m.hero_rotate_1(),
		m.hero_rotate_2(),
		m.hero_rotate_3(),
		m.hero_rotate_4()
	];

	let activeIndex = $state(0);
	let paused = $state(false);
	let reducedMotion = $state(false);
	let measureEl = $state(null);
	let stableWidth = $state(0);

	function measureWords() {
		if (!measureEl) return;
		let max = 0;
		for (const word of rotatingWords) {
			measureEl.textContent = word;
			max = Math.max(max, measureEl.getBoundingClientRect().width);
		}
		stableWidth = Math.ceil(max) + 4;
		measureEl.textContent = '';
	}

	onMount(() => {
		reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

		measureWords();
		// Re-measure once web fonts have loaded, since the initial measure may
		// use a fallback font that renders narrower and clips the longest word.
		if (document.fonts && document.fonts.ready) {
			document.fonts.ready.then(measureWords);
		}

		if (reducedMotion) return;

		const interval = setInterval(() => {
			if (!paused) {
				activeIndex = (activeIndex + 1) % rotatingWords.length;
			}
		}, 2200);

		return () => clearInterval(interval);
	});

	function handleAnchorClick(event) {
		event.preventDefault();
		const link = event.currentTarget;
		const anchorId = new URL(link.href).hash.replace('#', '');
		const anchor = document.getElementById(anchorId);
		if (anchor) anchor.scrollIntoView({ behavior: 'smooth' });
	}
</script>

<section class="hero">
	<div class="hero-glow"></div>

	<div class="hero-inner">
		<div class="hero-eyebrow">{m.hero_eyebrow()}</div>

		<h1 class="hero-title">
			<span class="title-line">
				{m.hero_title_prefix()}
				<span
					class="rotator"
					onmouseenter={() => (paused = true)}
					onmouseleave={() => (paused = false)}
					style={stableWidth ? `--rotator-width: ${stableWidth}px` : ''}
					aria-live="polite"
				>
					<span class="rotator-measure" bind:this={measureEl} aria-hidden="true"></span>
					{#each rotatingWords as word, i}
						<span
							class="rotator-word"
							class:is-active={i === activeIndex}
							aria-hidden={i !== activeIndex}
						>
							{word}
						</span>
					{/each}
				</span>
			</span>
			<span class="title-line">{m.hero_title_suffix()}</span>
		</h1>

		<p class="hero-subtitle">{m.hero_subtitle()}</p>

		<div class="hero-actions">
			<a href="#work" class="cta-primary" onclick={handleAnchorClick}>
				{m.hero_cta_primary()}
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
			<a href={waHref} target="_blank" rel="noopener noreferrer" class="cta-secondary">
				{m.hero_cta_secondary()}
			</a>
		</div>

		<div class="hero-stats">
			<div class="hero-stat">
				<span class="hero-stat-value">{m.stats_years_value()}</span>
				<span class="hero-stat-label">{m.stats_years_label()}</span>
			</div>
			<span class="hero-stat-sep" aria-hidden="true"></span>
			<div class="hero-stat">
				<span class="hero-stat-value">{m.stats_clients_value()}</span>
				<span class="hero-stat-label">{m.stats_clients_label()}</span>
			</div>
		</div>

		<div class="hero-previously">
			<span class="hero-previously-label">{m.previously_at_label()}</span>
			<ul class="hero-previously-names">
				<li>{m.previously_at_1()}</li>
				<li aria-hidden="true" class="sep">·</li>
				<li>{m.previously_at_2()}</li>
				<li aria-hidden="true" class="sep">·</li>
				<li>{m.previously_at_3()}</li>
			</ul>
		</div>
	</div>
</section>

<style>
	.hero {
		background: #0f0f1a;
		color: white;
		min-height: 100vh;
		display: flex;
		align-items: center;
		justify-content: center;
		padding: 120px 2rem 4rem;
		position: relative;
		overflow: hidden;
	}

	.hero-glow {
		position: absolute;
		top: 50%;
		left: 50%;
		transform: translate(-50%, -50%);
		width: 90%;
		height: 70%;
		background: radial-gradient(
			ellipse at center,
			rgba(102, 126, 234, 0.14) 0%,
			rgba(8, 145, 178, 0.06) 40%,
			transparent 70%
		);
		pointer-events: none;
	}

	.hero-inner {
		position: relative;
		z-index: 1;
		max-width: 1100px;
		width: 100%;
	}

	.hero-eyebrow {
		font-family: 'JetBrains Mono', monospace;
		font-size: 0.75rem;
		color: rgba(255, 255, 255, 0.4);
		text-transform: uppercase;
		letter-spacing: 0.15em;
		margin-bottom: 1.5rem;
	}

	.hero-title {
		font-family: 'Plus Jakarta Sans', sans-serif;
		font-size: clamp(2.25rem, 6.5vw, 5rem);
		font-weight: 800;
		line-height: 1.05;
		letter-spacing: -0.03em;
		color: #f5f5fa;
		margin: 0 0 2rem;
	}

	.title-line {
		display: block;
	}

	.rotator {
		position: relative;
		display: inline-block;
		height: 1.1em;
		vertical-align: bottom;
		overflow: hidden;
		width: var(--rotator-width, auto);
		min-width: 0.5em;
	}

	.rotator-measure {
		position: absolute;
		left: -9999px;
		top: 0;
		visibility: hidden;
		white-space: nowrap;
		font: inherit;
		letter-spacing: inherit;
	}

	.rotator-word {
		position: absolute;
		left: 0;
		top: 0;
		background: linear-gradient(135deg, #a5b4fc 0%, #67e8f9 100%);
		-webkit-background-clip: text;
		-webkit-text-fill-color: transparent;
		background-clip: text;
		opacity: 0;
		transform: translateY(110%);
		transition:
			opacity 0.55s ease,
			transform 0.55s cubic-bezier(0.22, 1, 0.36, 1);
		white-space: nowrap;
		pointer-events: none;
	}

	.rotator-word.is-active {
		opacity: 1;
		transform: translateY(0);
	}

	@media (prefers-reduced-motion: reduce) {
		.rotator-word {
			transition: none;
		}
		.rotator-word.is-active {
			opacity: 1;
			transform: translateY(0);
		}
		.rotator-word:not(.is-active) {
			opacity: 0;
		}
	}

	.hero-subtitle {
		font-family: 'Plus Jakarta Sans', sans-serif;
		font-size: clamp(1rem, 1.4vw, 1.2rem);
		color: rgba(255, 255, 255, 0.6);
		line-height: 1.6;
		max-width: 720px;
		margin: 0 0 2.5rem;
	}

	.hero-actions {
		display: flex;
		gap: 1rem;
		align-items: center;
		flex-wrap: wrap;
	}

	.cta-primary {
		display: inline-flex;
		align-items: center;
		gap: 0.5rem;
		font-family: 'JetBrains Mono', monospace;
		background: linear-gradient(135deg, #667eea 0%, #0891b2 100%);
		color: white;
		padding: 0.95rem 2rem;
		border-radius: 0.5rem;
		text-decoration: none;
		font-weight: 700;
		font-size: 0.95rem;
		transition:
			transform 0.25s ease,
			box-shadow 0.25s ease;
		box-shadow: 0 0 25px rgba(102, 126, 234, 0.3);
	}

	.cta-primary svg {
		width: 1.05rem;
		height: 1.05rem;
	}

	.cta-primary:hover {
		transform: translateY(-2px);
		box-shadow: 0 0 45px rgba(102, 126, 234, 0.5);
	}

	.cta-secondary {
		display: inline-flex;
		align-items: center;
		gap: 0.5rem;
		font-family: 'JetBrains Mono', monospace;
		background: transparent;
		border: 1px solid rgba(255, 255, 255, 0.15);
		color: rgba(255, 255, 255, 0.7);
		padding: 0.95rem 1.75rem;
		border-radius: 0.5rem;
		text-decoration: none;
		font-weight: 600;
		font-size: 0.9rem;
		transition: all 0.25s ease;
	}

	.cta-secondary:hover {
		background: rgba(255, 255, 255, 0.04);
		border-color: rgba(255, 255, 255, 0.3);
		color: white;
	}

	.hero-stats {
		display: flex;
		gap: 2.5rem;
		margin-top: 3rem;
		flex-wrap: wrap;
		align-items: center;
	}

	.hero-stat {
		display: flex;
		flex-direction: column;
		gap: 0.25rem;
	}

	.hero-stat-value {
		font-family: 'JetBrains Mono', monospace;
		font-size: 1.75rem;
		font-weight: 700;
		color: #e2e8f0;
		line-height: 1;
	}

	.hero-stat-label {
		font-family: 'JetBrains Mono', monospace;
		font-size: 0.72rem;
		color: rgba(255, 255, 255, 0.4);
		text-transform: uppercase;
		letter-spacing: 0.1em;
	}

	.hero-stat-sep {
		width: 1px;
		height: 32px;
		background: rgba(255, 255, 255, 0.1);
	}

	.hero-previously {
		display: flex;
		align-items: center;
		gap: 1.5rem;
		margin-top: 2.5rem;
		padding-top: 1.5rem;
		border-top: 1px solid rgba(255, 255, 255, 0.06);
		flex-wrap: wrap;
	}

	.hero-previously-label {
		font-family: 'JetBrains Mono', monospace;
		font-size: 0.7rem;
		color: rgba(255, 255, 255, 0.35);
		text-transform: uppercase;
		letter-spacing: 0.15em;
		flex-shrink: 0;
	}

	.hero-previously-names {
		list-style: none;
		padding: 0;
		margin: 0;
		display: flex;
		align-items: center;
		gap: 0.85rem;
		flex-wrap: wrap;
		font-family: 'Plus Jakarta Sans', sans-serif;
		font-size: 0.95rem;
		font-weight: 600;
		color: rgba(255, 255, 255, 0.6);
		letter-spacing: -0.005em;
	}

	.hero-previously-names .sep {
		color: rgba(255, 255, 255, 0.2);
	}

	@media (max-width: 768px) {
		.hero {
			padding: 100px 1.25rem 3rem;
			min-height: auto;
		}

		.hero-actions {
			flex-direction: column;
			align-items: stretch;
			max-width: 360px;
		}

		.cta-primary,
		.cta-secondary {
			justify-content: center;
		}

		.hero-stats {
			gap: 1.5rem;
		}

		.hero-stat-sep {
			display: none;
		}

		.hero-stat-value {
			font-size: 1.5rem;
		}

		.hero-previously {
			margin-top: 2rem;
			gap: 0.75rem;
		}

		.hero-previously-names {
			gap: 0.5rem;
			font-size: 0.85rem;
		}
	}
</style>
