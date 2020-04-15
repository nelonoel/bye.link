<script>
  export let label
  export let value
  export let isEditing
</script>

{#if value || isEditing}
  <div class="w-128 max-w-full mx-auto px-4 py-3">
    <div class="text-caps text-gray-400 mb-1">{label}</div>
    {#if isEditing}
      <input
        type="text"
        class="bg-gray-50 border-2 border-gray-150 focus:border-gray-200
        focus:bg-white focus:outline-none text-gray-800 rounded w-full text-lg
        px-3 py-2"
        {value}
      />
    {:else}
      <div class="flex flex-wrap text-gray-750">
        {#each value.split(',').map(h => h.trim()) as href}
          <a
            class="mr-3 my-2 text-xl border-b-2 border-gray-300
            hover:border-orange-500 leading-tight transition-color"
            {href}
          >
            {href}
          </a>
        {/each}
      </div>
    {/if}
  </div>
{/if}
