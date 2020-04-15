<script>
  import { format } from 'meta/date'
  export let createdAt
  export let lastModified
</script>

<footer
  class="flex items-center justify-end w-full px-3 md:px-4 py-3 border-t
  border-gray-150"
>
  <div class="flex items-center">
    <h6 class="text-caps text-gray-300 mr-2">Created at:</h6>
    <div class="text-gray-400 text-sm">{format(createdAt)}</div>
  </div>
  <div class="mx-3 text-gray-200">•</div>
  <div class="flex items-center">
    <h6 class="text-caps text-gray-300 mr-2">Last Modified:</h6>
    <div class="text-gray-400 text-sm">{format(lastModified)}</div>
  </div>
</footer>
