<script>
  import Meta from './Meta.svelte'
  import ListToggle from 'components/List/Toggle.svelte'
  export let user
  export let asset
</script>

<section class="flex justify-between sm:hidden bg-gray-850">
  <div>
    <ListToggle class="text-white px-2 py-3" />
  </div>
  <Meta {user} {asset} minimal={true} />
</section>
