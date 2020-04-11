<script>
	import path from 'stores/path'
	import getAssetMetadata from 'utils/getAssetMetadata'

	import Container from 'components/Main/Container.svelte'
	import Header from 'components/Main/Header.svelte'
	import Content from 'components/Main/Content.svelte'
	import List from 'components/List/index.svelte'

	export let segment
	$:path.setSlug('item', segment)
	$:meta = getAssetMetadata($path.asset)
</script>

<svelte:head>
	<title>{meta.title}</title>
</svelte:head>

<List {segment} />

<Container
	class="lg:mt-2 xl:mt-0 border-l-0 lg:border-l border-t-0 lg:border-t xl:border-t-0 border-gray-400 lg:rounded-tl-lg xl:rounded-tl-none overflow-hidden"
>
	<Header />
	<main class="flex flex-grow items-center justify-center">
		<slot />
	</main>
</Container>
