<script>
  import Redacted from './Redacted.svelte'
  export let color = 'gray'
  export let label
  export let value
  export let isEditing
</script>

{#if value || isEditing}
  <div class="w-128 max-w-full mx-auto px-4 py-3">
    {#if isEditing}
      <label class="block text-caps text-gray-400 mb-1">{label}</label>
      <input
        class="{`bg-transparent border-b-2 border-gray-150 focus:border-${color}-500 text-gray-750 w-full text-xl`}"
        type="text"
        {value}
      />
    {:else}
      <h6 class="text-caps text-gray-400 mb-1">{label}</h6>
      <Redacted {color} {label} {value}>••••••••••••</Redacted>
    {/if}
  </div>
{/if}
