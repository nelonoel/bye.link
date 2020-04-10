<script context="module">
	export async function preload(page, session) {
		return page.params
	}
</script>

<script>
	import Nav from './_components/Nav/index.svelte'
	export let user
	export let segment
</script>

<div class="flex flex-row sm:flex-col xl:flex-row min-h-screen bg-gray-800">
	<Nav {user} asset={segment} />
	<section class="flex flex-grow xl:mt-3 xl:pt-0 overflow-hidden bg-gray-300 xl:bg-gray-800 relative lg:static xl:rounded-tl-lg">
		<slot />
	</section>
</div>
