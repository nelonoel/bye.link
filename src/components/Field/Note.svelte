<script>
  import autosize from 'autosize'
  import { onMount } from 'svelte'
  export let label
  export let value
  export let isEditing
  let textarea
  onMount(() => autosize(textarea))
</script>

<style>
  p {
    white-space: pre-wrap;
    word-wrap: break-word;
  }
  p,
  textarea {
    min-height: theme('spacing.40');
  }
</style>

{#if value || isEditing}
  <div class="w-128 max-w-full mx-auto px-4 py-3">
    <div class="text-caps text-gray-400 mb-1">{label}</div>
    {#if isEditing}
      <textarea
        bind:this="{textarea}"
        class="bg-gray-50 border-2 border-gray-150 focus:border-gray-200
        focus:bg-white focus:outline-none text-gray-800 rounded w-full text-lg
        px-3 py-2"
      >
        {value}
      </textarea>
    {:else}
      <p class="text-xl text-gray-750">{value}</p>
    {/if}
  </div>
{/if}
