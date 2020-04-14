<script>
  import { path } from 'stores/ui'
  import Nav from 'components/Nav/index.svelte'
  import MobileNav from 'components/Nav/Mobile.svelte'

  export let segment
  $: path.setSlug('asset', segment)
</script>

<div
  class="flex flex-col-reverse sm:flex-col xl:flex-row min-h-screen w-full
  bg-gray-900 overflow-hidden">
  <Nav user={$path.user} asset={segment} />
  <section
    class="flex flex-grow xl:mt-3 xl:pt-0 overflow-hidden bg-gray-150 relative
    lg:static xl:rounded-tl-lg">
    <slot />
  </section>
  <MobileNav user={$path.user} asset={segment} />
</div>
