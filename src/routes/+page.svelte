<script>
	import * as m from '$lib/paraglide/messages';
	import { localizeHref } from '$lib/href';
	import { prefilledWhatsappLink } from '$lib/whatsapp.js';
	import Seo from '$lib/Seo.svelte';
	import Asterisk from '$lib/Asterisk.svelte';
	import Closing from '$lib/Closing.svelte';
	import profile from '$lib/assets/profile.jpg';

	const waHref = prefilledWhatsappLink();

	const guide = [
		{ href: '#what', link: m.home_guide_1_link(), text: m.home_guide_1_text() },
		{ href: '#what', link: m.home_guide_2_link(), text: m.home_guide_2_text() },
		{ href: '#what', link: m.home_guide_3_link(), text: m.home_guide_3_text() },
		{ href: '#safe', link: m.home_guide_4_link(), text: m.home_guide_4_text() },
		{ href: localizeHref('/faq'), link: m.home_guide_6_link(), text: m.home_guide_6_text() },
		{
			href: localizeHref('/portfolio'),
			link: m.home_guide_5_link(),
			text: m.home_guide_5_text()
		}
	];

	const review = { kind: 'review', label: m.home_example_status_review() };
	const needs = { kind: 'needs', label: m.home_example_status_needs() };
	const done = { kind: 'done', label: m.home_example_status_done() };

	const example = [
		{ title: m.home_example_1_title(), detail: m.home_example_1_detail(), status: review },
		{ title: m.home_example_2_title(), detail: m.home_example_2_detail(), status: review },
		{ title: m.home_example_3_title(), detail: m.home_example_3_detail(), status: needs },
		{ title: m.home_example_4_title(), detail: m.home_example_4_detail(), status: review },
		{ title: m.home_example_5_title(), detail: m.home_example_5_detail(), status: done }
	];

	const what = [
		{ label: m.home_what_1_label(), text: m.home_what_1_text() },
		{ label: m.home_what_2_label(), text: m.home_what_2_text() },
		{ label: m.home_what_3_label(), text: m.home_what_3_text() },
		{ label: m.home_what_4_label(), text: m.home_what_4_text() }
	];

	const safe = [
		{ label: m.home_safe_1_label(), text: m.home_safe_1_text() },
		{ label: m.home_safe_2_label(), text: m.home_safe_2_text() },
		{ label: m.home_safe_3_label(), text: m.home_safe_3_text() },
		{ label: m.home_safe_4_label(), text: m.home_safe_4_text() },
		{ label: m.home_safe_5_label(), text: m.home_safe_5_text() }
	];

	const steps = [
		{ title: m.home_start_1_title(), text: m.home_start_1_text() },
		{ title: m.home_start_2_title(), text: m.home_start_2_text() },
		{ title: m.home_start_3_title(), text: m.home_start_3_text() }
	];

	const zigzag = Array.from(
		{ length: 35 },
		(_, i) => `${i ? 'L' : 'M'}${i * 5} ${i % 2 ? 2 : 6}`
	).join(' ');
</script>

<Seo title={m.meta_title()} description={m.meta_description()} />

<div class="frame">
	<div class="canvas">
		<section class="hero">
			<div class="head">
				<h1>{m.home_headline()}</h1>
				<p class="support">{m.home_support()}</p>
			</div>

			<ul class="guide">
				{#each guide as g}
					<li><a class="link strong" href={g.href}>{g.link}</a>{g.text}</li>
				{/each}
			</ul>

			<figure class="example">
				<div class="window">
					<div class="window-bar">
						<div class="window-title"><Asterisk size={15} />{m.home_example_title()}</div>
						<div class="window-count">{m.home_example_count()}</div>
					</div>
					<ul class="items">
						{#each example as item}
							<li>
								<div class="item-text">
									<strong>{item.title}</strong>
									<span>{item.detail}</span>
								</div>
								<span class="status {item.status.kind}">{item.status.label}</span>
							</li>
						{/each}
					</ul>
				</div>
			</figure>
		</section>

		<section class="letter">
			<div class="letter-stack">
				<div class="back one"></div>
				<div class="back two"></div>
				<div class="page prose">
					<p>{m.home_letter_hello()}</p>
					<p>{m.home_letter_p1()}</p>
					<p>{m.home_letter_p2()} <strong>{m.home_letter_p2_strong()}</strong></p>
					<p>{m.home_letter_p3()}</p>
					<p>
						{m.home_letter_p4_before()}
						<a class="link strong" href={waHref} target="_blank" rel="noopener noreferrer"
							>{m.home_letter_p4_link()}</a
						>{m.home_letter_p4_after()}
					</p>
					<div class="signature">
						<img src={profile} alt="" width="64" height="64" loading="lazy" />
						<div>
							<strong>Laurent Curau</strong>
							<div class="role">
								{m.home_letter_role()}<span class="comma">,&nbsp;</span><a
									class="link"
									href="mailto:hello@laurentcurau.com">hello@laurentcurau.com</a
								>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>

		<div class="divider" aria-hidden="true">
			<span class="zig"><svg viewBox="0 0 170 8"><path d={zigzag} /></svg></span>
			<Asterisk size={18} />
			<span class="zig"><svg viewBox="0 0 170 8"><path d={zigzag} /></svg></span>
		</div>

		<section class="sheet" id="what">
			<h2 class="title">{m.home_what_title()}</h2>
			<dl class="rows">
				{#each what as row}
					<div class="row">
						<dt>{row.label}</dt>
						<dd>{row.text}</dd>
					</div>
				{/each}
			</dl>
		</section>

		<section class="sheet second" id="safe">
			<h2 class="title">{m.home_safe_title()}</h2>
			<dl class="rows">
				{#each safe as row}
					<div class="row">
						<dt>{row.label}</dt>
						<dd>{row.text}</dd>
					</div>
				{/each}
			</dl>
		</section>

		<section class="start" id="start">
			<h2 class="title">{m.home_start_title()}</h2>
			<ol>
				{#each steps as step}
					<li>
						<h3 class="subtitle">{step.title}</h3>
						<p>{step.text}</p>
					</li>
				{/each}
			</ol>
		</section>
	</div>
</div>

<Closing question={m.closing_home_question()} greeting />

<style>
	.hero {
		width: 100%;
		padding-top: 46px;
		display: grid;
		grid-template-columns: minmax(0, 1fr) minmax(0, 1fr);
		grid-template-rows: auto 1fr;
		grid-template-areas:
			'example guide'
			'example head';
		row-gap: 30px;
		align-items: start;
	}

	.head {
		grid-area: head;
		display: flex;
		flex-direction: column;
		gap: 16px;
		padding: 0 31px 0 46px;
	}

	h1 {
		font-size: 42px;
		line-height: 46px;
		font-weight: 800;
		letter-spacing: -0.026em;
	}

	.support {
		font-size: 30px;
		line-height: 39px;
		letter-spacing: -0.026em;
	}

	.guide {
		grid-area: guide;
		display: flex;
		flex-direction: column;
		gap: 9px;
		padding: 0 31px 0 46px;
	}

	.example {
		grid-area: example;
		display: flex;
		flex-direction: column;
		align-items: center;
		gap: 16px;
		padding-left: 30px;
	}

	.window {
		width: 100%;
		max-width: 640px;
		background: var(--sheet);
		border-radius: 10px;
		box-shadow: var(--sheet-shadow);
		overflow: clip;
		letter-spacing: -0.01em;
	}

	.window-bar {
		height: 50px;
		padding-inline: 20px;
		border-bottom: 1px solid var(--rule);
		display: flex;
		align-items: center;
		justify-content: space-between;
		gap: 12px;
	}

	.window-title {
		display: flex;
		align-items: center;
		gap: 10px;
		font-size: 15px;
		line-height: 15px;
		font-weight: 600;
	}

	.window-count {
		font-size: 13px;
		line-height: 13px;
		color: var(--muted);
		white-space: nowrap;
	}

	.items {
		padding: 4px 20px 8px;
	}

	.items li {
		display: flex;
		align-items: center;
		gap: 16px;
		padding-block: 15px;
		border-bottom: 1px solid var(--rule);
	}

	.items li:last-child {
		border-bottom: 0;
	}

	.item-text {
		flex: 1 1 0;
		min-width: 0;
		display: flex;
		flex-direction: column;
		font-size: 15px;
		line-height: 21px;
	}

	.item-text strong {
		font-weight: 600;
	}

	.item-text span {
		color: var(--muted);
	}

	.status {
		flex-shrink: 0;
		width: 130px;
		padding: 8px 10px;
		font-size: 13px;
		line-height: 13px;
		font-weight: 600;
	}

	.status.review {
		background: var(--teal-tint);
		color: var(--teal);
	}

	.status.needs {
		background: var(--ink);
		color: var(--on-ink);
	}

	.status.done {
		background: var(--chip-done);
		color: var(--muted);
	}

	.letter {
		width: 100%;
		padding: 92px var(--gutter) 0;
		display: flex;
		justify-content: center;
	}

	.letter-stack {
		position: relative;
		width: 100%;
		max-width: 820px;
	}

	.back {
		position: absolute;
		width: 100%;
		height: 100%;
		background: var(--sheet);
		box-shadow: var(--back-shadow);
		transform-origin: 0 0;
	}

	.back.one {
		top: 12px;
		left: -6px;
		rotate: 1.4deg;
	}

	.back.two {
		top: 6px;
		left: 6px;
		rotate: 0.5deg;
	}

	.page {
		position: relative;
		background: var(--sheet);
		box-shadow: var(--sheet-shadow);
		padding: 72px 77px;
		display: flex;
		flex-direction: column;
		gap: 22px;
		rotate: -0.8deg;
	}

	.signature {
		display: flex;
		align-items: center;
		gap: 16px;
		padding-top: 14px;
		font-size: 17px;
		line-height: 24px;
	}

	.signature img {
		width: 64px;
		height: 64px;
		border-radius: 50%;
		object-fit: cover;
		flex-shrink: 0;
	}

	.signature strong {
		font-weight: 700;
	}

	.divider {
		height: 184px;
		display: flex;
		align-items: center;
		justify-content: center;
		gap: 14px;
	}

	.zig {
		flex-shrink: 0;
		width: 170px;
		overflow: hidden;
	}

	.zig svg {
		display: block;
		width: 170px;
		height: 8px;
	}

	.zig path {
		fill: none;
		stroke: var(--rule);
		stroke-width: 1;
	}

	.sheet.second {
		margin-top: 46px;
	}

	.start {
		width: calc(100% - 2 * var(--gutter));
		max-width: var(--sheet-width);
		padding-top: 92px;
		display: flex;
		flex-direction: column;
		align-items: center;
		gap: 46px;
	}

	.start ol {
		width: 100%;
		display: flex;
		gap: 31px;
	}

	.start li {
		flex: 1 1 0;
		background: var(--sheet);
		box-shadow: var(--sheet-shadow);
		padding: 40px;
		display: flex;
		flex-direction: column;
		gap: 12px;
	}

	.start p {
		line-height: 28px;
	}

	@media (max-width: 1100px) {
		.hero {
			display: flex;
			flex-direction: column;
			align-items: stretch;
			row-gap: 0;
			padding-top: 40px;
		}

		.head,
		.guide {
			padding-inline: var(--gutter);
		}

		.guide {
			padding-top: 28px;
		}

		.example {
			padding: 40px var(--gutter) 0;
		}

		.start ol {
			flex-direction: column;
			gap: 16px;
		}
	}

	@media (max-width: 760px) {
		.hero {
			padding-top: 32px;
		}

		.head {
			gap: 14px;
			padding-inline: 20px;
		}

		h1 {
			font-size: 32px;
			line-height: 36px;
		}

		.support {
			font-size: 21px;
			line-height: 29px;
			letter-spacing: -0.02em;
		}

		.guide {
			gap: 12px;
			padding-inline: 20px;
			line-height: 24px;
		}

		.example {
			gap: 12px;
			padding-top: 36px;
		}

		.window-bar {
			height: 46px;
			padding-inline: 16px;
		}

		.window-title {
			gap: 8px;
			font-size: 14px;
		}

		.window-count {
			font-size: 12px;
		}

		.items {
			padding: 2px 16px 6px;
		}

		.items li {
			gap: 12px;
			padding-block: 13px;
		}

		.item-text {
			font-size: 14px;
			line-height: 19px;
		}

		.status {
			width: 116px;
			padding: 7px 9px;
			font-size: 12px;
			line-height: 12px;
			letter-spacing: 0;
		}

		.letter {
			padding-top: 56px;
		}

		.back {
			display: none;
		}

		.page {
			padding: 36px 24px;
			gap: 18px;
			rotate: -0.6deg;
		}

		.signature {
			gap: 12px;
			padding-top: 8px;
			font-size: 15px;
			line-height: 21px;
		}

		.signature img {
			width: 52px;
			height: 52px;
		}

		.comma {
			display: none;
		}

		.role a {
			display: block;
		}

		.divider {
			height: 112px;
			gap: 12px;
		}

		.zig {
			width: 90px;
		}

		.sheet.second {
			margin-top: 20px;
		}

		.start {
			padding-top: 56px;
			gap: 24px;
		}

		.start ol {
			gap: 12px;
		}

		.start li {
			padding: 24px;
			gap: 8px;
		}

		.start p {
			line-height: 25px;
		}
	}
</style>
