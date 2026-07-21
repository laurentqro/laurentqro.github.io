<script>
	let { data } = $props();

	// Escape the "less than" character so a closing script tag inside any
	// string can't break out. Built from its code point because the Svelte
	// parser treats a literal "<" in this block as the start of a tag.
	const LT = String.fromCharCode(60);
	const json = $derived(JSON.stringify(data).split(LT).join('\\u003c'));
</script>

<svelte:head>
	{@html `<script type="application/ld+json">${json}<` + `/script>`}
</svelte:head>
