<script>
  import { onMount } from 'svelte'
  import { path } from 'stores/ui'
  import { list } from 'stores/ui'
  import _asset from 'meta/asset'

  $: meta = _asset($path.asset)
</script>

<style>
	svg {
		max-width: 40vw;
	}
</style>

<div class="h-full w-full flex items-center justify-center">
  <figure class="text-gray-150">
    <svg
      fill="none"
      stroke="currentColor"
      stroke-linecap="round"
      stroke-linejoin="round"
      stroke-width="2"
      viewBox="0 0 24 24"
      class="w-48 h-48">
      {@html meta.icon}
    </svg>
  </figure>
</div>
