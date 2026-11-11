<script>
	import logo from '$lib/assets/logo.svg';
	import * as m from '$lib/paraglide/messages';
	import { getLocale } from '$lib/paraglide/runtime';
	import { localizeHref } from '$lib/href';
	import { page } from '$app/stores';
	import { whatsappLink } from '$lib/whatsapp.js';

	const waHref = whatsappLink(m.whatsapp_prefill());

	const languages = [
		{ code: 'fr', short: 'FR', label: m.header_lang_fr() },
		{ code: 'en', short: 'EN', label: m.header_lang_en() }
	];
</script>

<header class="header">
	<nav class="side languages" aria-label="Langue / Language">
		{#each languages as l}
			<a
				href={localizeHref($page.url.pathname, { locale: l.code })}
				class={getLocale() === l.code ? 'current' : 'link'}
				aria-current={getLocale() === l.code ? 'true' : undefined}
				aria-label={l.label}
				title={l.label}
				lang={l.code}
				hreflang={l.code}
				data-sveltekit-reload>{l.short}</a
			>
		{/each}
	</nav>

	<a href={localizeHref('/')} class="brand" aria-label={m.header_home_label()}>
		<img src={logo} alt="" width="54" height="54" />
		<span>Laurent Curau</span>
	</a>

	<div class="side end">
		<a
			href={waHref}
			class="whatsapp"
			target="_blank"
			rel="noopener noreferrer"
			aria-label={m.header_whatsapp_label()}
			title={m.header_whatsapp_label()}
		>
			<svg viewBox="0 0 24 24" aria-hidden="true">
				<path
					d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"
				/>
			</svg>
		</a>
	</div>
</header>

<style>
	.header {
		position: sticky;
		top: 0;
		z-index: 100;
		height: var(--header-height);
		padding-inline: var(--frame-inset);
		background: var(--page);
		display: flex;
		align-items: center;
		justify-content: space-between;
	}

	.side {
		display: flex;
		align-items: center;
		gap: 16px;
		flex-shrink: 0;
		width: 200px;
	}

	.languages {
		font-size: 17px;
		line-height: 24px;
		font-weight: 700;
		letter-spacing: 0;
	}

	.languages .current {
		font-weight: 800;
	}

	.side.end {
		justify-content: flex-end;
	}

	.brand {
		display: flex;
		align-items: center;
		gap: 10px;
		font-size: 27px;
		line-height: 30px;
		font-weight: 800;
		letter-spacing: -0.026em;
		white-space: nowrap;
	}

	/* logo.svg is black with a teal mark: invert turns the black white, hue-rotate puts the teal back. */
	.brand img {
		width: 54px;
		height: 54px;
		flex-shrink: 0;
		filter: invert(1) hue-rotate(180deg);
	}

	.whatsapp {
		width: 48px;
		height: 48px;
		background: var(--teal-fill);
		display: flex;
		align-items: center;
		justify-content: center;
		flex-shrink: 0;
	}

	.whatsapp:hover {
		background: var(--teal-fill-hover);
	}

	.whatsapp svg {
		width: 26px;
		height: 26px;
		fill: #ffffff;
	}

	@media (max-width: 760px) {
		.header {
			padding-inline: 12px;
		}

		.side {
			gap: 12px;
			width: 76px;
		}

		.languages {
			font-size: 15px;
		}

		.brand {
			gap: 7px;
			font-size: 19px;
			line-height: 22px;
		}

		.brand img {
			width: 34px;
			height: 34px;
		}

		.whatsapp {
			width: 44px;
			height: 44px;
		}

		.whatsapp svg {
			width: 24px;
			height: 24px;
		}
	}
</style>
