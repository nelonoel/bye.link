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
    .sort((a, b) =>
      new Date(a[meta.sortBy]) <= new Date(b[meta.sortBy]) ? 1 : -1
    )
</script>

<style>
  [data-container] {
    top: 4rem;
  }
  [data-empty-copy] {
    max-width: 14rem;
  }
</style>

<aside
  class="{`transform pointer-events-none sm:pointer-events-auto sm:scale-100
	opacity-0 sm:opacity-100 sm:-translate-x-full lg:transform-none flex-shrink-0
	absolute lg:relative top-0 bottom-0 bg-gray-150 text-gray-700 w-full
	sm:w-secondary-sidebar overflow-x-hidden transition-transform duration-200
	z-40 ${$list && 'transform-none opacity-100 pointer-events-auto'}`}"
>
  <Search />
  <div
    data-container
    class="absolute top-0 left-0 right-0 bottom-0 overflow-x-hidden
    overflow-y-auto"
  >
    {#if collection.length > 0}
      <ul class="w-full h-full">
        <VirtualList items="{collection}" let:item>
          <Item
            color="{meta.color}"
            multiline="{item.category === 'notes' || item.category === 'diary'}"
            id="{item._id}"
            icon="{meta.icon}"
            title="{meta.titleFormat ? meta.titleFormat(item[meta.titleField]) : item[meta.titleField] || ''}"
            description="{item[meta.descriptionField] || ''}"
          />
        </VirtualList>
      </ul>
    {:else}
      <p
        class="flex flex-col items-center justify-center h-full p-4
        text-gray-400 text-center pointer-events-none"
      >
        <svg
          fill="none"
          stroke="currentColor"
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          viewBox="0 0 24 24"
          class="w-20 h-20 mb-4 text-gray-250"
        >
          <path
            d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
          ></path>
        </svg>
        {#if $filter.length > 0}
          <h6 class="text-caps">
            No {meta.slug === 'diary' ? 'entry' : meta.slug} found for
          </h6>
          <div class="text-lg break-all">"{$filter}"</div>
        {:else}
          <h6 class="text-caps mb-1">{meta.slug} empty</h6>
          <div data-empty-copy class="text-lg leading-snug w-full">
            Create a new one by clicking the
            <svg
              fill="currentColor"
              viewBox="0 0 20 20"
              class="inline-block w-5 h-5"
            >
              <path
                fill-rule="evenodd"
                d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-11a1 1 0 10-2 0v2H7a1 1 0
                100 2h2v2a1 1 0 102 0v-2h2a1 1 0 100-2h-2V7z"
                clip-rule="evenodd"
              ></path>
            </svg>
            button.
          </div>
        {/if}
      </p>
    {/if}
  </div>
</aside>

<div
  on:click="{list.hide}"
  class="{`bg-gray-250 opacity-0 block lg:hidden absolute top-0 bottom-0 right-0 left-0 pointer-events-none transition-opacity duration-200 z-30 ${$list ? 'sm:opacity-98 sm:pointer-events-auto' : ''}`}"
></div>
