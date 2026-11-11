<script>
	import * as m from '$lib/paraglide/messages';
	import { localizeHref } from '$lib/href';
</script>

<footer class="footer">
	<nav>
		<a class="link" href={localizeHref('/portfolio')}>{m.footer_portfolio()}</a>
		<a class="link" href={localizeHref('/about')}>{m.footer_about()}</a>
		<a class="link" href="mailto:hello@laurentcurau.com">{m.footer_email()}</a>
		<a
			class="link"
			href="https://www.linkedin.com/in/laurentcurau"
			target="_blank"
			rel="noopener noreferrer">{m.footer_linkedin()}</a
		>
		<a class="link" href={localizeHref('/privacy')}>{m.footer_privacy()}</a>
		<a class="link" href={localizeHref('/terms')}>{m.footer_terms()}</a>
	</nav>
</footer>

<style>
	.footer {
		padding: 56px var(--frame-inset) 72px;
	}

	nav {
		display: flex;
		flex-wrap: wrap;
		justify-content: center;
		gap: 12px 28px;
		font-size: 16px;
		line-height: 20px;
		font-weight: 500;
	}

	@media (max-width: 760px) {
		.footer {
			padding: 36px 24px 48px;
		}

		nav {
			column-gap: 22px;
			font-size: 15px;
		}
	}
</style>
