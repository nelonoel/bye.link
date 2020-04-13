<script>
  import path from 'stores/path'
  import getAssetMetadata from 'utils/getAssetMetadata'
  import ListToggle from 'components/List/Toggle.svelte'
  $: color = getAssetMetadata($path.asset).color
</script>

<header
  class="bg-gray-100 opacity-90 bg-blurred flex justify-between h-16 w-full">
  <div class="flex">
    <ListToggle
      class="hidden sm:flex lg:hidden text-gray-600 hover:text-gray-700 pl-3
      pr-2 focus:outline-none" />
    <div class="flex items-center pl-3 sm:pl-1 lg:pl-3 pr-4 cursor-pointer">
      <picture class="rounded-full bg-gray-100 text-gray-400 relative">
        <svg
          fill="currentColor"
          viewBox="0 0 20 20"
          class="w-8 h-8 transform scale-110">
          <path
            fill-rule="evenodd"
            d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-6-3a2 2 0 11-4 0 2 2 0 014
            0zm-2 4a5 5 0 00-4.546 2.916A5.986 5.986 0 0010 16a5.986 5.986 0
            004.546-2.084A5 5 0 0010 11z"
            clip-rule="evenodd" />
        </svg>
      </picture>
      <picture class="rounded-full bg-gray-100 text-gray-400 -ml-6 relative">
        <svg
          fill="currentColor"
          viewBox="0 0 20 20"
          class="w-8 h-8 transform scale-110">
          <path
            fill-rule="evenodd"
            d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-6-3a2 2 0 11-4 0 2 2 0 014
            0zm-2 4a5 5 0 00-4.546 2.916A5.986 5.986 0 0010 16a5.986 5.986 0
            004.546-2.084A5 5 0 0010 11z"
            clip-rule="evenodd" />
        </svg>
      </picture>
      <div
        class="flex justify-center items-center rounded-full bg-gray-400
        text-white -ml-6 relative w-8 h-8 border-2 border-gray-100 text-sm">
        3
      </div>
      <span class="ml-2 text-gray-600">Shared</span>
    </div>
  </div>
  <div class="flex items-center px-3 md:px-4">
    <button
      class="flex items-center justify-center focus:outline-none text-gray-400
      hover:text-gray-600 focus:text-gray-600 py-2 mx-2 transition-color">
      Cancel
    </button>
    <button
      class={`flex whitespace-no-wrap items-center justify-center rounded-full
      bg-${color}-500 hover:bg-${color}-550 focus:bg-${color}-550
      focus:outline-none text-white py-2 px-5 ml-2 transition-color`}>
      Save
    </button>
  </div>
</header>
