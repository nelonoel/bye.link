<script>
	import path from 'stores/path'
	import Nav from 'components/Nav/index.svelte'

	export let segment
	$:path.setSlug('asset', segment)
</script>

<div class="flex flex-row sm:flex-col xl:flex-row min-h-screen bg-gray-800">
	<Nav user={$path.user} asset={segment} />
	<section class="flex flex-grow xl:mt-3 xl:pt-0 overflow-hidden bg-gray-300 xl:bg-gray-800 relative lg:static xl:rounded-tl-lg">
		<slot />
	</section>
</div>
