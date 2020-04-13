<script>
  import { list } from 'stores/ui'
</script>

<button
  on:click={list.toggle}
  class={`items-center justify-center focus:outline-none ${$$props.class || ''}`}>
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
