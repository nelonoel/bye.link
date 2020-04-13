<script>
  import path from 'stores/path'
  import getAssetMetadata from 'utils/getAssetMetadata'

  import Container from 'components/Main/Container.svelte'
  import Content from 'components/Main/Content.svelte'
  import List from 'components/List/index.svelte'

  export let segment
  $: if (typeof segment !== 'undefined') {
    path.setSlug('item', segment)
  }
  $: meta = getAssetMetadata($path.asset)
</script>

<svelte:head>
  <title>{meta.title}</title>
</svelte:head>

<List />

<Container class="overflow-hidden">
  <main class="flex flex-grow overflow-x-hidden overflow-y-auto">
    <slot />
  </main>
</Container>
