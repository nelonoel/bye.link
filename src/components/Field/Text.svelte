<script>
  import { onMount } from 'svelte'
  export let color = 'gray'
  export let type = 'text'
  export let label
  export let value
  export let isEditing
  let input

  $: if (input && isEditing && label === 'Title') {
    setTimeout(() => input.focus())
  }
</script>

{#if value || isEditing}
  <div class="w-128 max-w-full mx-auto px-4 py-3">
    {#if isEditing}
      <label class="block text-caps text-gray-400 mb-1">{label}</label>
      <input
        bind:this="{input}"
        class="{`bg-transparent border-b-2 border-gray-150 focus:border-${color}-500 text-gray-750 w-full ${label === 'Title' ? '-mt-1 font-semibold text-3xl' : 'text-xl'}`}"
        {type}
        {value}
      />
    {:else}
      <h6 class="text-caps text-gray-400 mb-1">{label}</h6>
      <div
        class="{`inline-block w-full border-b-2 border-transparent text-gray-750 ${label === 'Title' ? '-mt-1 font-semibold text-3xl' : 'text-xl'}`}"
      >
        {value}
      </div>
    {/if}
  </div>
{/if}
