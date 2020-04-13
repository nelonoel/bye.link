<script>
  import { onMount } from 'svelte'
  import path from 'stores/path'
  import { list } from 'stores/ui'
  import getAssetMetadata from 'utils/getAssetMetadata'

  $: meta = getAssetMetadata($path.asset)
</script>

<div class="h-full w-full flex items-center justify-center">
  <figure class="text-gray-150">
    <svg
      fill="none"
      stroke="currentColor"
      stroke-linecap="round"
      stroke-linejoin="round"
      stroke-width="2"
      viewBox="0 0 24 24"
      class="w-64 h-64">
      {@html meta.icon}
    </svg>
  </figure>
</div>
