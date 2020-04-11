<script>
  import path from 'stores/path'
</script>

<header
  class="flex items-center pl-0 lg:pl-4 pr-4 border-b border-gray-400 h-16">
  <button
    class="flex flex-col items-center justify-center text-gray-600
    hover:text-gray-700 px-3 lg:hidden">
    <svg
      fill="none"
      stroke="currentColor"
      stroke-linecap="round"
      stroke-linejoin="round"
      stroke-width="2"
      viewBox="0 0 24 24"
      class="w-6 h-6">
      <path d="M4 6h16M4 12h16M4 18h7" />
    </svg>
  </button>
  <input
    class="flex-grow rounded-md px-2 py-1 bg-gray-100 border border-gray-400
    focus:bg-white focus:border-blue-400 focus:outline-none min-w-0"
    type="search"
    placeholder="Type to search.." />
  <a
    href={`/${$path.user}/${$path.asset}/new`}
    class="flex flex-shrink-0 items-center justify-center rounded-full
    bg-blue-500 hover:bg-blue-600 focus:bg-blue-600 focus:outline-none
    text-white w-8 h-8 ml-2">
    <svg fill="currentColor" viewBox="0 0 20 20" class="w-6 h-6">
      <path
        fill-rule="evenodd"
        d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0
        110-2h5V4a1 1 0 011-1z"
        clip-rule="evenodd" />
    </svg>
  </a>
</header>
