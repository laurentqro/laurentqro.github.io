<script>
	import logo from '$lib/assets/logo.svg';
	import * as m from '$lib/paraglide/messages';
	import { locales, localizeHref, getLocale } from '$lib/paraglide/runtime';
	import { page } from '$app/stores';
	import { whatsappLink } from '$lib/whatsapp.js';

	const waHref = whatsappLink(m.whatsapp_prefill());

	function handleAnchorClick(event) {
		event.preventDefault();
		const link = event.currentTarget;
		const url = new URL(link.href);

		if (url.pathname !== window.location.pathname) {
			window.location.href = link.href;
			return;
		}

		const anchorId = url.hash.replace('#', '');
		const anchor = anchorId ? document.getElementById(anchorId) : null;
		if (anchor) {
			anchor.scrollIntoView({ behavior: 'smooth' });
		} else {
			window.scrollTo({ top: 0, behavior: 'smooth' });
		}
	}
</script>

<nav class="nav">
	<div class="nav-container">
		<a href={localizeHref('/')} class="logo" onclick={handleAnchorClick}>
			<img src={logo} alt="Laurent Curau Logo" class="logo-icon" />
			<span class="logo-text">Laurent Curau</span>
		</a>
		<div class="nav-links">
			<a href={localizeHref('/portfolio')}>{m.nav_work()}</a>
			<a href={localizeHref('/services')}>{m.nav_services()}</a>

			<div class="language-switcher">
				{#each locales as locale}
					<a
						href={localizeHref($page.url.pathname, { locale })}
						class="lang-button"
						class:active={getLocale() === locale}
						title={locale === 'fr' ? 'Français' : 'English'}
						data-sveltekit-reload
					>
						{locale.toUpperCase()}
					</a>
				{/each}
			</div>

			<a href={waHref} target="_blank" rel="noopener noreferrer" class="cta-button">
				<svg class="cta-icon" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
					<path
						d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.077 4.487.71.306 1.263.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.83 9.83 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413"
					/>
				</svg>
				{m.nav_whatsapp()}
			</a>
		</div>
	</div>
</nav>

<style>
	.nav {
		background: rgba(15, 15, 26, 0.85);
		backdrop-filter: blur(12px);
		-webkit-backdrop-filter: blur(12px);
		padding: 1rem 0;
		position: fixed;
		top: 0;
		left: 0;
		right: 0;
		z-index: 100;
		border-bottom: 1px solid rgba(102, 126, 234, 0.1);
	}

	.nav-container {
		max-width: 1200px;
		margin: 0 auto;
		padding: 0 2rem;
		display: flex;
		justify-content: space-between;
		align-items: center;
	}

	.logo {
		display: flex;
		align-items: center;
		gap: 0.75rem;
		text-decoration: none;
		cursor: pointer;
	}

	.logo-icon {
		width: 32px;
		height: 32px;
		filter: brightness(0) invert(1);
	}

	.logo-text {
		font-family: 'Plus Jakarta Sans', sans-serif;
		font-size: 1.4rem;
		font-weight: 700;
		color: #e2e8f0;
	}

	.nav-links {
		display: flex;
		gap: 2rem;
		align-items: center;
	}

	.nav-links > a:not(.cta-button):not(.lang-button) {
		color: rgba(255, 255, 255, 0.5);
		text-decoration: none;
		font-weight: 500;
		font-size: 0.9rem;
		transition: color 0.2s;
	}

	.nav-links > a:not(.cta-button):not(.lang-button):hover {
		color: #e2e8f0;
	}

	.cta-button {
		display: inline-flex;
		align-items: center;
		gap: 0.4rem;
		background: linear-gradient(135deg, #25d366 0%, #128c7e 100%);
		color: white !important;
		padding: 0.55rem 1rem;
		border-radius: 0.5rem;
		transition: all 0.25s ease;
		font-family: 'JetBrains Mono', monospace;
		font-size: 0.85rem;
		text-decoration: none;
	}

	.cta-button:hover {
		transform: translateY(-1px);
		color: white !important;
		box-shadow: 0 0 20px rgba(37, 211, 102, 0.35);
	}

	.cta-icon {
		width: 0.95rem;
		height: 0.95rem;
	}

	.language-switcher {
		display: flex;
		align-items: center;
		gap: 0.25rem;
		margin: 0 0.5rem 0 1rem;
	}

	.lang-button {
		color: rgba(255, 255, 255, 0.4);
		font-weight: 500;
		padding: 0.25rem 0.5rem;
		border-radius: 0.25rem;
		transition: all 0.2s ease;
		text-decoration: none;
		font-size: 0.85rem;
		font-family: 'JetBrains Mono', monospace;
	}

	.lang-button:hover {
		background-color: rgba(102, 126, 234, 0.1);
		color: #e2e8f0;
	}

	.lang-button.active {
		background-color: rgba(102, 126, 234, 0.2);
		color: #a5b4fc;
		font-weight: 700;
	}

	@media (max-width: 768px) {
		.nav-links {
			display: none;
		}
	}
</style>
