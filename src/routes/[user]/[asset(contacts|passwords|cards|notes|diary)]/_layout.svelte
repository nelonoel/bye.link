<script context="module">
	export async function preload(page, session) {
		return page.params
	}
</script>

<script>
	import Container from '../_components/Main/Container.svelte'
	import Header from '../_components/Main/Header.svelte'
	import Content from '../_components/Main/Content.svelte'
	import List from '../_components/List/index.svelte'

	import assets from '../../../data/assets'
	export let asset
	export let segment

	const props = assets[asset]
</script>

<svelte:head>
	<title>{props.title}</title>
</svelte:head>

<List {segment} />

<Container
	class="lg:mt-2 xl:mt-0 border-l-0 lg:border-l border-t-0 lg:border-t xl:border-t-0 border-gray-400 lg:rounded-tl-lg xl:rounded-tl-none overflow-hidden"
>
	<Header />
	<main class="flex flex-grow items-center justify-center">
		<figure class="text-gray-200">
			<svg fill="currentColor" viewBox="0 0 20 20" class="w-64 h-64">
				{@html props.icons.fill}
			</svg>
		</figure>
		<!-- <slot /> -->
	</main>
</Container>
