<script>
	export let status
	export let error

	const dev = process.env.NODE_ENV === 'development'
</script>

<svelte:head>
	<title>{status}</title>
</svelte:head>

<main class="p-4 mx-auto text-gray-900">
	<h1 class="text-6xl leading-tight">{status}</h1>
	<h2 class="text-2xl"><code>{error.message}</code></h2>

	{#if dev && error.stack}
	<pre class="mt-8 bg-gray-900 text-white p-4 rounded">{error.stack}</pre>
	{/if}
</main>
