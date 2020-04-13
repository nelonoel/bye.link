<script>
  import path from 'stores/path'
  import getAssetMetadata from 'utils/getAssetMetadata'
  $: color = getAssetMetadata($path.asset).color
</script>

<style>
  input[type='search']::-webkit-search-cancel-button {
    @apply .h-5 .w-5 .opacity-75 .cursor-pointer;
    -webkit-appearance: none;
    background-image: url("data:image/svg+xml,%0A%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='%239d9c9b' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M21 4H8l-7 8 7 8h13a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2z' /%3E%3Cline x1='18' y1='9' x2='12' y2='15' /%3E%3Cline x1='12' y1='9' x2='18' y2='15' /%3E%3C/svg%3E");
    background-size: contain;

    &:hover {
      @apply .opacity-100;
    }
  }
</style>

<header class="flex items-center px-3 sm:px-4 border-b border-gray-250 h-16">
  <input
    class="flex-grow rounded bg-transparent focus:outline-none min-w-0
    placeholder-gray-400 leading-relaxed h-full mr-2"
    type="search"
    placeholder="Type to search.." />
  <a
    href={`/${$path.user}/${$path.asset}/new`}
    class={`flex flex-shrink-0 items-center justify-center rounded-full
    bg-${color}-400 hover:bg-${color}-450 focus:bg-${color}-450 focus:outline-none
    text-${color}-800 w-10 h-10 ml-2 transition-color`}>
    <svg fill="currentColor" viewBox="0 0 20 20" class="w-6 h-6">
      <path
        fill-rule="evenodd"
        d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0
        110-2h5V4a1 1 0 011-1z"
        clip-rule="evenodd" />
    </svg>
  </a>
</header>
