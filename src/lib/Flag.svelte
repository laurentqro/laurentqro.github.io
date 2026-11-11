<script>
	let { country, href, label, current = false } = $props();
</script>

<a
	{href}
	class="flag {country}"
	aria-label={label}
	aria-current={current ? 'true' : undefined}
	title={label}
	data-sveltekit-reload
>
	<svg class="cloth" viewBox="0 0 60 40" aria-hidden="true">
		{#if country === 'fr'}
			<path
				d="M5.5 7 L7.5 34 L9.5 6 L11.5 34.5 L13.5 6.5 L15.5 34 L17.5 6 L19.5 34.5 L20.5 12"
				class="hatch"
				stroke="#2743C4"
				stroke-width="2.5"
			/>
			<path
				d="M40 6.5 L42 34 L44 6 L46 34.5 L48 6.5 L50 34 L52 6 L54 34.5 L55.5 10"
				class="hatch"
				stroke="#E23A2E"
				stroke-width="2.5"
			/>
			<path
				d="M3 3.5 C20 2 41 4 57.5 2.5 C58.5 13 57 27 58 37.5 C40 38.5 20 36.5 2.5 38 C3.5 27 2 14 3 3.5 Z"
				class="outline"
			/>
		{:else}
			<path
				d="M6 6.5 L54 9 L6 13 L54 16 L6 20 L54 23 L6 27 L54 30 L6 34 L50 34.5"
				class="hatch"
				stroke="#2743C4"
				stroke-width="3.2"
			/>
			<path d="M6 6 C21 14 40 27 54 34.5" stroke="#FFFFFF" stroke-width="8.5" />
			<path d="M54 5.5 C40 14.5 21 26 6 34" stroke="#FFFFFF" stroke-width="8.5" />
			<path d="M7 6.5 C21 14 40 27 53 34" stroke="#E23A2E" stroke-width="2.4" />
			<path d="M53 6 C40 14.5 21 26 7 33.5" stroke="#E23A2E" stroke-width="2.4" />
			<path d="M30 6 C30.8 14 29.4 27 30.2 34" stroke="#FFFFFF" stroke-width="12" />
			<path d="M6 20 C20 19.2 40 20.8 54 19.8" stroke="#FFFFFF" stroke-width="12" />
			<path
				d="M29 7 C29.6 15 28.6 26 29.2 33.5 M31.4 33 C30.8 25 31.8 15 31.2 7.5"
				stroke="#E23A2E"
				stroke-width="2.6"
			/>
			<path
				d="M7 19 C20 18.4 40 19.8 53.5 18.8 M53 21.3 C40 22 20 20.6 7.5 21.4"
				stroke="#E23A2E"
				stroke-width="2.6"
			/>
			<path
				d="M3 3.5 C20 2.5 41 4 57.5 2.5 C58.5 13 57 27 58 37.5 C40 38.5 20 36.5 2.5 38 C3.5 27 2 14 3 3.5 Z"
				class="outline"
			/>
		{/if}
	</svg>
	<svg class="mark" viewBox="0 0 52 7" aria-hidden="true">
		<path d="M3 4 C16 2 35 5.5 49 3" stroke="#111111" stroke-width="2.8" />
	</svg>
</a>

<style>
	.flag {
		display: flex;
		flex-direction: column;
		align-items: center;
		gap: 3px;
	}

	.flag.fr {
		rotate: -3deg;
	}

	.flag.gb {
		rotate: 2deg;
	}

	svg {
		display: block;
		flex-shrink: 0;
		overflow: visible;
	}

	path {
		fill: none;
		stroke-linecap: round;
		stroke-linejoin: round;
	}

	.hatch {
		opacity: 0.92;
	}

	.outline {
		stroke: #111111;
		stroke-width: 1.8;
	}

	.cloth {
		width: 42px;
		height: 28px;
	}

	.mark {
		width: 30px;
		height: 4px;
		visibility: hidden;
	}

	.flag[aria-current] .mark,
	.flag:hover .mark {
		visibility: visible;
	}

	@media (max-width: 760px) {
		.flag {
			gap: 2px;
		}

		.cloth {
			width: 33px;
			height: 22px;
		}

		.outline {
			stroke-width: 2.2;
		}

		.mark {
			width: 24px;
		}
	}
</style>
