<script>
  import { onMount } from 'svelte'
  import { path } from 'stores/ui'
  export let color = 'gray'
  export let type = 'text'
  export let label
  export let value
  export let isEditing
  let input

  $: isTitle = label === 'Title' || label === 'Name'
  $: if ($path.action === 'edit' && input && isEditing && isTitle) {
    setTimeout(() => input.focus())
  }
</script>

{#if value || isEditing}
  <div class="w-128 max-w-full mx-auto px-4 py-3">
    {#if isEditing}
      <label class="block text-caps text-gray-400 mb-1">{label}</label>
      <slot />
      <input
        bind:this="{input}"
        class="{`bg-transparent border-b-2 border-gray-150 focus:border-${color}-500 text-gray-750 w-full ${isTitle ? '-mt-1 font-semibold text-3xl' : 'text-xl'}`}"
        {type}
        {value}
      />
    {:else}
      <h6 class="text-caps text-gray-400 mb-1">{label}</h6>
      <div
        class="{`inline-block w-full border-b-2 border-transparent text-gray-750 ${isTitle ? '-mt-1 font-semibold text-3xl' : 'text-xl'}`}"
      >
        {value}
      </div>
    {/if}
  </div>
{/if}
