<script>
  import { list, path } from 'stores/ui'
</script>

<button
  on:click="{list.toggle}"
  class="{`items-center justify-center sm:pointer-events-auto ${$path.item ? 'pointer-events-auto' : 'pointer-events-none text-gray-700'} ${$$props.class || ''}`}"
>
  <svg
    fill="none"
    stroke="currentColor"
    stroke-linecap="round"
    stroke-linejoin="round"
    stroke-width="2"
    viewBox="0 0 24 24"
    class="w-6 h-6"
  >
    <path d="M4 6h16M4 12h16M4 18h7"></path>
  </svg>
</button>
