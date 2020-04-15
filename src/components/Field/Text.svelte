<script>
  export let type = 'text'
  export let label
  export let value
  export let isEditing
</script>

{#if value || isEditing}
  <div class="w-128 max-w-full mx-auto px-4 py-3">
    <div class="text-caps text-gray-400 mb-1">{label}</div>
    {#if isEditing}
      <input
        class="bg-gray-50 border-2 border-gray-150 focus:border-gray-200
        focus:bg-white focus:outline-none text-gray-800 rounded w-full text-lg
        px-3 py-2"
        {type}
        {value}
      />
    {:else}
      <div class="text-xl text-gray-750">{value}</div>
    {/if}
  </div>
{/if}
