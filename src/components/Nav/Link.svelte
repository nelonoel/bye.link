<script>
  export let href = null
  export let count = 0
  export let isActive = false
</script>

<style>
  a {
    &:hover {
      [data-count] {
        @apply .bg-gray-800;
      }
    }
    &.active {
      @apply .bg-gray-900 .cursor-default;
      [data-count] {
        @apply .bg-gray-700;
      }
    }
  }
</style>

<li class={$$props.class}>
  <a
    rel="prefetch"
    class="flex items-center justify-between w-full px-4 sm:px-2 lg:px-3 xl:px-4
    py-3 sm:py-2 lg:py-3 hover:bg-gray-700 hover:text-gray-100 cursor-pointer"
    class:active={isActive}
    {href}>
    <div
      class="flex flex-row sm:flex-col lg:flex-row items-start sm:items-center
      lg:items-start">
      <figure>
        <svg
          fill="none"
          stroke="currentColor"
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          viewBox="0 0 24 24"
          class="w-6 h-6 flex-shrink-0">
          <slot name="icon" />
        </svg>
      </figure>
      <slot />
    </div>
    {#if count > 0}
      <div
        data-count
        class="inline-flex sm:hidden lg:inline-flex sm:top-0 sm:right-0
        items-center justify-center px-2 bg-gray-900 text-white rounded-full
        text-xs tracking-wide">
        {count}
      </div>
    {/if}
  </a>
</li>
