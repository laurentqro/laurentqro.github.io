<script>
	import '../app.css';
	import favicon from '$lib/assets/favicon.ico';
	import Navigation from '$lib/Navigation.svelte';

	let { children } = $props();
</script>

<svelte:head>
	<link rel="icon" href={favicon} />
</svelte:head>

<Navigation />
{@render children?.()}
