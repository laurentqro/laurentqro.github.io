<script>
	let { size = 14 } = $props();
</script>

<svg viewBox="0 0 14 14" width={size} height={size} aria-hidden="true">
	<path d="M7 1.5 V12.5 M2.2 4.25 L11.8 9.75 M11.8 4.25 L2.2 9.75" />
</svg>

<style>
	svg {
		display: block;
		flex-shrink: 0;
	}

	path {
		fill: none;
		stroke: var(--teal);
		stroke-width: 1.7;
		stroke-linecap: round;
	}
</style>
