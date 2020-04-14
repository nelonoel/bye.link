<script>
  import Meta from './Meta.svelte'
  import ListToggle from 'components/List/Toggle.svelte'
  export let user
  export let asset
</script>

<section class="flex justify-between sm:hidden bg-gray-850">
  <div>
    {#if typeof asset !== 'undefined'}
      <ListToggle class="text-white p-3" />
    {/if}
  </div>
  <Meta {user} {asset} minimal="{true}" />
</section>
