<style>
  aside {
    --transform-scale-x: 1.0125;
    --transform-scale-y: 1.0125;
  }
  [data-container] {
    top: 4rem;
  }
</style>

<script>
  import VirtualList from '@sveltejs/svelte-virtual-list'
  import { list, path, filter } from 'stores/ui'
  import assets from 'stores/assets'
  import _assets from 'meta/asset'
  import Search from './Search.svelte'
  import Item from './Item.svelte'

  $: applyFilter = i => {
    return (
      $filter.length === 0 ||
      i[meta.titleField].toLowerCase().indexOf($filter) > -1 ||
      i[meta.descriptionField].toLowerCase().indexOf($filter) > -1
    )
  }
  $: meta = _assets($path.asset)
  $: collection = $assets
    .filter(a => a.category === $path.asset)
    .filter(applyFilter)
</script>

<aside
  class="{`transform pointer-events-none sm:pointer-events-auto sm:scale-100
	opacity-0 sm:opacity-100 sm:-translate-x-full lg:transform-none flex-shrink-0
	absolute lg:relative top-0 bottom-0 bg-gray-150 text-gray-700 w-full
	sm:w-secondary-sidebar overflow-x-hidden transition-transform duration-200
	z-20 ${$list && 'transform-none opacity-100 pointer-events-auto'}`}"
>
  <Search />
  <div
    data-container
    class="absolute top-0 left-0 right-0 bottom-0 overflow-x-hidden
    overflow-y-auto"
  >
    <ul class="w-full h-full">
      {#if collection.length > 0}
        <VirtualList items="{collection}" let:item>
          <Item
            color="{meta.color}"
            multiline="{item.category === 'notes' || item.category === 'diary'}"
            id="{item._id}"
            icon="{meta.icon}"
            title="{item[meta.titleField] || ''}"
            description="{item[meta.descriptionField] || ''}"
          />
        </VirtualList>
      {/if}
    </ul>
  </div>
</aside>

<div
  on:click="{list.hide}"
  class="{`bg-gray-250 bg-blurred opacity-0 block lg:hidden absolute top-0 bottom-0 right-0 left-0 pointer-events-none transition-opacity duration-200 z-10 ${$list ? 'sm:opacity-90 sm:pointer-events-auto' : ''}`}"
></div>
