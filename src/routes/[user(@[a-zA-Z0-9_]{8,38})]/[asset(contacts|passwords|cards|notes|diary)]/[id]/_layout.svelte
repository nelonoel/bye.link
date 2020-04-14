<script>
  import { path } from 'stores/ui'
  import Header from 'components/Main/Header.svelte'
  export let segment

  $: path.setSlug('action', typeof segment === 'undefined' ? 'view' : segment)
</script>

{#if $path.item}
	<Header />
	<slot />
{/if}
