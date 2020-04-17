<script>
  import { format } from 'meta/date'
  export let createdAt
  export let lastModified
</script>

<style>
  h6 {
    font-size: 0.6666rem;
  }
</style>

<footer
  class="flex items-center justify-end flex-shrink-0 w-full border-t
  border-gray-150"
>
  <div class="flex flex-wrap items-center px-3 md:px-4 py-2 leading-tight">
    <h6 class="text-caps text-gray-300 mr-2">Created at:</h6>
    <div class="text-gray-400 text-sm">{format(createdAt)}</div>
  </div>
  {#if lastModified - createdAt >= 60000}
    <div class="flex flex-wrap items-center px-3 md:px-4 py-2 leading-tight">
      <h6 class="text-caps text-gray-300 mr-2">Last Modified:</h6>
      <div class="text-gray-400 text-sm">{format(lastModified)}</div>
    </div>
  {/if}
</footer>
