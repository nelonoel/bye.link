<script>
  import { onMount } from 'svelte'
  import { path } from 'stores/ui'
  export let color = 'gray'
  export let type = 'text'
  export let label
  export let placeholder = ''
  export let value
  export let isEditing
</script>

{#if value || isEditing}
  <div class="w-128 max-w-full mx-auto px-4 py-3">
    {#if isEditing}
      <label class="block text-caps text-gray-400 mb-1">{label}</label>
      <slot />
      <input
        class="bg-transparent border-b-2 border-gray-150 placeholder-gray-750
        focus:placeholder-gray-300 focus:border-{color}-500 text-gray-750 w-full
        text-xl"
        {type}
        {placeholder}
        {value}
      />
    {:else}
      <h6 class="text-caps text-gray-400 mb-1">{label}</h6>
      <div
        class="inline-block w-full border-b-2 border-transparent text-gray-750
        text-xl"
      >
        {value}
      </div>
    {/if}
  </div>
{/if}
