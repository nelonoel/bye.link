<script>
  import { list } from 'stores/ui'
  import Search from './Search.svelte'
  import Item from './Item.svelte'
</script>

<style>
  aside {
    --transform-scale-x: 1.0125;
    --transform-scale-y: 1.0125;
  }
</style>

<aside
  class={`transform pointer-events-none sm:pointer-events-auto sm:scale-100
  opacity-0 sm:opacity-100 sm:-translate-x-full lg:transform-none flex-shrink-0
  absolute lg:relative top-0 bottom-0 bg-gray-150 text-gray-700 w-full
  sm:w-secondary-sidebar overflow-x-hidden transition-transform duration-200
  z-20 ${$list && 'transform-none opacity-100 pointer-events-auto'}`}>
  <Search />
  <ul>
    <Item />
    <Item />
    <Item />
    <Item />
  </ul>
</aside>

<div
  on:click={list.hide}
  class={`bg-gray-250 bg-blurred opacity-0 block lg:hidden absolute top-0 bottom-0 right-0 left-0 pointer-events-none transition-opacity duration-200 z-10 ${$list ? 'sm:opacity-90 sm:pointer-events-auto' : ''}`} />
