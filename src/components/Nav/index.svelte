<script>
  import { list } from 'stores/ui'
  import collection from 'stores/assets'
  import Meta from './Meta.svelte'
  import NavLink from './Link.svelte'
  import _asset from 'meta/asset'
  export let user
  export let asset
  const assets = Object.values(_asset())
</script>

<aside
  class="transform transform flex relative flex-row xl:flex-col justify-between
  xl:justify-start items-end xl:items-stretch h-auto xl:h-screen overflow-hidden
  xl:overflow-y-auto w-full xl:w-primary-sidebar bg-gray-900 text-gray-300 z-20"
>
  <nav class="py-0 xl:py-4 w-full sm:w-auto">
    <h6 class="text-caps px-4 text-gray-600 my-2 hidden xl:block">
      Navigation
    </h6>
    <ul class="flex flex-row xl:flex-col">
      {#each assets as { color, title, slug, icon }, i (slug)}
        <NavLink
          {color}
          {icon}
          onClick="{list.show}"
          containerClass="w-1/5 sm:w-auto"
          isActive="{asset === slug}"
          href="{asset === slug ? null : `/${user}/${slug}`}"
          count="{$collection.filter(a => a.category === slug).length}"
        >
          <span
            class="mx-2 xl:mx-3 text-xxs sm:text-xs lg:text-base
            whitespace-no-wrap"
          >
            {title}
          </span>
        </NavLink>
      {/each}
    </ul>
  </nav>
  <Meta class="hidden sm:block" {user} {asset} />
</aside>
