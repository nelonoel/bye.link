<script>
  import { onMount } from 'svelte'
  import { list, path } from 'stores/ui'
  import _asset from 'meta/asset'

  import Container from 'components/Main/Container.svelte'
  import Content from 'components/Main/Content.svelte'
  import List from 'components/List/index.svelte'

  export let segment

  onMount(() => {
    if (typeof segment === 'undefined') {
      list.show()
    }
  })

  $: if (typeof segment !== 'undefined') {
    path.setSlug('item', segment)
  }
  $: meta = _asset($path.asset)
</script>

<svelte:head>
  <title>{meta.title}</title>
</svelte:head>

<List />

<Container class="relative overflow-hidden">
  <div class="absolute top-0 left-0 right-0 bottom-0 flex flex-col flex-grow overflow-x-hidden overflow-y-auto">
    <slot />
  </div>
</Container>
