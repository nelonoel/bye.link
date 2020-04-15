<script>
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
        type="text"
        class="{`bg-transparent border-b-2 border-gray-150 focus:border-${color}-500 text-gray-750 w-full text-xl`}"
        {value}
      />
    {:else}
      <h6 class="text-caps text-gray-400 mb-1">{label}</h6>
      <div class="flex items-center">
        <span class="mr-2 text-xl border-b-2 border-transparent">{value}</span>
        <a
          href="{value}"
          target="_blank"
          rel="noreferrer noopener"
          class="flex items-center bg-gray-150 hover:bg-{color}-200 p-1
          rounded-full text-gray-650 hover:text-{color}-850 outline-none text-sm
          transition-color"
        >
          <svg fill="currentColor" viewBox="0 0 20 20" class="w-4 h-4">
            <path
              d="M11 3a1 1 0 100 2h2.586l-6.293 6.293a1 1 0 101.414 1.414L15
              6.414V9a1 1 0 102 0V4a1 1 0 00-1-1h-5z"
            ></path>
            <path
              d="M5 5a2 2 0 00-2 2v8a2 2 0 002 2h8a2 2 0 002-2v-3a1 1 0 10-2
              0v3H5V7h3a1 1 0 000-2H5z"
            ></path>
          </svg>
        </a>
      </div>
    {/if}
  </div>
{/if}
