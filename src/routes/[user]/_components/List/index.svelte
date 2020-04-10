<script>
	import Search from './Search.svelte'
	import Item from './Item.svelte'
</script>

<aside
	let:asset
	class:transform-none={typeof segment === 'undefined'} class="transform -translate-x-full lg:transform-none flex-shrink-0 absolute lg:relative top-0 bottom-0 bg-gray-300 text-gray-700 w-full sm:w-secondary-sidebar overflow-x-hidden border-r-0 sm:border-r lg:border-r-0 border-transparent sm:border-gray-400 lg:border-transparent border-t-0 lg:border-t xl:border-t-0 z-10 pt-0 lg:pt-2 xl:pt-0"
>
	<Search />
	<ul>
		<Item {asset} />
		<Item {asset} />
		<Item {asset} />
		<Item {asset} />
	</ul>
</aside>
