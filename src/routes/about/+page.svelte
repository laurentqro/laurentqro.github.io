<script>
	import * as m from '$lib/paraglide/messages';
	import { prefilledWhatsappLink } from '$lib/whatsapp.js';
	import Seo from '$lib/Seo.svelte';
	import profile from '$lib/assets/profile.jpg';

	const waHref = prefilledWhatsappLink();

	const background = [
		{ label: m.about_bg_1_label(), when: m.about_bg_1_when(), text: m.about_bg_1_text() },
		{ label: m.about_bg_2_label(), when: m.about_bg_2_when(), text: m.about_bg_2_text() },
		{ label: m.about_bg_3_label(), when: m.about_bg_3_when(), text: m.about_bg_3_text() },
		{ label: m.about_bg_4_label(), when: m.about_bg_4_when(), text: m.about_bg_4_text() },
		{ label: m.about_bg_5_label(), when: m.about_bg_5_when(), text: m.about_bg_5_text() },
		{ label: m.about_bg_6_label(), when: m.about_bg_6_when(), text: m.about_bg_6_text() },
		{ label: m.about_bg_7_label(), text: m.about_bg_7_text() }
	];
</script>

<Seo title={m.about_meta_title()} description={m.about_meta_description()} />

<div class="frame">
	<div class="canvas about">
		<article class="sheet">
			<header class="column intro">
				<img src={profile} alt={m.about_photo_alt()} width="112" height="112" />
				<h1 class="title">{m.about_title()}</h1>
				<p class="lead">{m.about_intro()}</p>
				<p class="prose">{m.about_summary()}</p>
			</header>

			<section class="column">
				<h2 class="subtitle">{m.about_background_title()}</h2>
				<dl class="rows">
					{#each background as row}
						<div class="row">
							<dt>
								{row.label}
								{#if row.when}<small>{row.when}</small>{/if}
							</dt>
							<dd>{row.text}</dd>
						</div>
					{/each}
				</dl>
			</section>

			<section class="column block">
				<h2 class="subtitle">{m.about_work_title()}</h2>
				<p class="prose">{m.about_work_text()}</p>
			</section>

			<section class="column block">
				<h2 class="subtitle">{m.about_contact_title()}</h2>
				<p class="prose">
					<a class="link strong" href={waHref} target="_blank" rel="noopener noreferrer"
						>{m.about_contact_whatsapp()}</a
					>
					{m.about_contact_middle()}
					<a class="link" href="mailto:hello@laurentcurau.com">hello@laurentcurau.com</a
					>{m.about_contact_also()}
					<a
						class="link"
						href="https://www.linkedin.com/in/laurentcurau"
						target="_blank"
						rel="noopener noreferrer">LinkedIn</a
					>.
				</p>
			</section>
		</article>
	</div>
</div>

<style>
	.about {
		padding-top: 62px;
	}

	.sheet {
		gap: 44px;
	}

	.intro {
		display: flex;
		flex-direction: column;
		align-items: center;
		gap: 22px;
	}

	.intro img {
		width: 112px;
		height: 112px;
		border-radius: 50%;
		object-fit: cover;
	}

	.intro p {
		align-self: stretch;
	}

	.subtitle {
		padding-bottom: 8px;
	}

	.block {
		display: flex;
		flex-direction: column;
		gap: 6px;
	}

	@media (max-width: 760px) {
		.about {
			padding-top: 20px;
		}

		.sheet {
			gap: 32px;
		}

		.intro {
			gap: 16px;
		}

		.intro img {
			width: 88px;
			height: 88px;
		}

		.intro .title {
			text-align: center;
		}
	}
</style>
