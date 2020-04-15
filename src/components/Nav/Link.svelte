<script>
  export let href = null
  export let count = 0
  export let isActive = false
  export let color = null
  export let icon = null
  export let containerClass = ''
  export let onClick = () => {}
</script>

<style>
  a {
    &[data-color] {
      box-shadow: inset 0 -4px 0 currentColor;
      @media (min-width: theme('screens.xl')) {
        box-shadow: inset -4px 0 0 currentColor;
      }
      &::before {
        background-color: currentColor;
      }
    }
    &::before {
      content: '';
      @apply .absolute .left-0 .top-auto .bottom-0 .w-full .h-auto .transform .translate-x-0 .translate-y-full
	  	.pointer-events-none .z-0 .transition-all .duration-300 .ease-in-out .opacity-0;
      background-color: theme('colors.gray.900');
      padding-bottom: 100%;
      @media (min-width: theme('screens.xl')) {
        @apply .left-auto .top-0 .w-auto .h-full .translate-x-full .translate-y-0 .pb-0;
        padding-left: 100%;
      }
    }
    &:hover {
      [data-count] {
        @apply .bg-gray-750;
      }
    }
    &:active {
      @apply .shadow-none;
      &:not([data-color])::before {
        @apply .bg-gray-850;
      }
      &::before {
        @apply .rounded-full .duration-150 .opacity-100;
        --transform-scale-x: 2;
        --transform-scale-y: 1.24;

        @media (min-width: theme('screens.lg')) {
          --transform-scale-x: 2;
          --transform-scale-y: 1.21;
        }

        @media (min-width: theme('screens.xl')) {
          --transform-scale-x: 1.2;
          --transform-scale-y: 2;
        }
      }
    }
    &.active {
      @apply .shadow-none .cursor-default;
      background-color: currentColor;
      transition: background-color 100ms 100ms;
      &:not([data-color]) {
        @apply .bg-gray-850;
      }
      &[data-color] [data-count] {
        background-color: currentColor;
      }
      &:not([data-color])::before {
        @apply .bg-gray-850;
      }
      &::before {
        @apply .rounded-none .opacity-100;
        transform: scale(1.1);
      }
    }
  }
</style>

<li class="{containerClass}">
  <a
    data-color="{color}"
    rel="prefetch"
    class="{`text-${color}-600 flex items-center justify-center sm:justify-between relative w-full lg:px-3 xl:px-4
    py-3 lg:py-3 hover:bg-gray-950 focus:bg-gray-950 cursor-pointer overflow-hidden ${$$props.class || 'px-2'}`}"
    class:active="{isActive}"
    on:click="{onClick}"
    {href}
  >
    <div
      class="flex flex-col lg:flex-row items-center lg:items-start text-white
      z-10"
    >
      <figure>
        <svg
          fill="none"
          stroke="currentColor"
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          viewBox="0 0 24 24"
          class="w-6 h-6"
        >
          {@html icon}
        </svg>
      </figure>
      <slot />
    </div>
    {#if count > 0}
      <div
        data-count
        class="{`bg-gray-800 transition-colors duration-300 ease-in-out hidden lg:inline-flex top-0 right-0
        items-center justify-center px-2 text-${color}-700 rounded-full
        text-xs tracking-wide leading-5 z-10`}"
      >
        <span class="text-white">{count}</span>
      </div>
    {/if}
  </a>
</li>
