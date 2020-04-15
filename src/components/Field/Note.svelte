<script>
  import autosize from 'autosize'
  import { onMount } from 'svelte'

  export let color = 'gray'
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
    min-height: theme('spacing.24');
  }
</style>

{#if value || isEditing}
  <div class="w-128 max-w-full mx-auto px-4 pb-3 pt-4">
    {#if isEditing}
      <label class="block text-caps text-gray-400 mb-1">{label}</label>
      <textarea
        bind:this="{textarea}"
        class="bg-transparent border-b-2 border-gray-150 focus:border-{color}-500
        text-gray-750 w-full text-xl pb-3"
        {value}
      ></textarea>
    {:else}
      <h6 class="text-caps text-gray-400 mb-1">{label}</h6>
      <p class="text-xl border-b-2 border-transparent text-gray-750 pb-3">
        {value}
      </p>
    {/if}
  </div>
{/if}
