<script>
  import { onDestroy } from 'svelte'
  import { list, path, filter } from 'stores/ui'
  import _asset from 'meta/asset'

  let query = ''
  let inputField

  $: filter.set(query.trim().toLowerCase())
  $: color = _asset($path.asset).color

  const unwatchPath = path.subscribe(({ item }) => {
    if (!item && inputField) {
      inputField.value = ''
      filter.clear()
    }
  })

  onDestroy(unwatchPath)
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

<header
  class="sticky inset-0 bottom-auto flex items-center px-3 sm:px-4 bg-gray-150
  border-b border-gray-200 h-16 z-10"
>
  <input
    class="flex-grow rounded bg-transparent min-w-0 placeholder-gray-500
    leading-relaxed h-full mr-2"
    bind:value="{query}"
    bind:this="{inputField}"
    type="search"
    placeholder="{`Search ${$path.asset}..`}"
  />
  <a
    on:click="{list.hide}"
    href="{`/${$path.user}/${$path.asset}/new`}"
    class="{`flex flex-shrink-0 items-center justify-center rounded-full
    bg-${color}-400 hover:bg-${color}-450 focus:bg-${color}-450
    text-${color}-800 w-10 h-10 ml-2 transition-color`}"
    title="{`Add New ${$path.asset === 'diary' ? 'Entry' : $path.asset
            .substring(0, 1)
            .toUpperCase() + $path.asset.substring(1, $path.asset.length - 1)}`}"
  >
    <svg fill="currentColor" viewBox="0 0 20 20" class="w-6 h-6">
      <path
        fill-rule="evenodd"
        d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0
        110-2h5V4a1 1 0 011-1z"
        clip-rule="evenodd"
      ></path>
    </svg>
  </a>
</header>
