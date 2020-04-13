<script>
  import { list } from 'stores/ui'
  import path from 'stores/path'
</script>

<li>
  <a
    on:click={list.hide}
    class="flex items-center p-3 sm:p-4 cursor-pointer border-b border-gray-200
    hover:bg-gray-200 transition-colors duration-150"
    href={`/${$path.user}/${$path.asset}/2`}>
    <figure
      class="flex flex-shrink-0 items-center justify-center rounded-lg w-8 h-8
      mr-3 bg-gray-300 text-gray-600">
      <svg
        fill="none"
        stroke="currentColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="2"
        viewBox="0 0 24 24"
        class="w-6 h-6">
        <path
          d="M15 7a2 2 0 012 2m4 0a6 6 0 01-7.743 5.743L11 17H9v2H7v2H4a1 1 0
          01-1-1v-2.586a1 1 0 01.293-.707l5.964-5.964A6 6 0 1121 9z" />
      </svg>
    </figure>
    <div class="flex flex-col">
      <strong class="block text-md truncate leading-tight">Metrobank</strong>
      <span class="truncate leading-tight text-gray-600 text-sm">
        nelonoel15
      </span>
    </div>
  </a>
</li>
