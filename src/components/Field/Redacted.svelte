<script>
  import { onMount, onDestroy } from 'svelte'
  import ClipboardJS from 'clipboard'

  export let label
  export let value

  let isCopied = false
  let timeout
  let clipboard

  onMount(() => {
    clipboard = new ClipboardJS('[data-clipboard]', {
      text: () => value,
    })
    clipboard.on('success', () => {
      isCopied = true
      timeout = setTimeout(() => {
        isCopied = false
      }, 2000)
    })
  })

  onDestroy(() => {
    clipboard && clipboard.destroy()
    timeout && clearTimeout(timeout)
  })
</script>

<div class="flex items-center justify-start">
  <div class="text-2xl text-gray-750 mr-5">
    <slot />
  </div>
  <button
    data-clipboard
    class="flex items-center bg-gray-150 hover:bg-orange-200 px-3 py-1
    rounded-full text-gray-650 hover:text-orange-850 text-sm transition-color"
    class:pointer-events-none="{isCopied}"
  >
    <svg
      fill="none"
      stroke="currentColor"
      stroke-linecap="round"
      stroke-linejoin="round"
      stroke-width="2"
      viewBox="0 0 24 24"
      class="w-4 h-4 mr-1"
    >
      <path
        d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9
        5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3
        4h3m-6-4h.01M9 16h.01"
      ></path>
    </svg>
    <span>{isCopied ? 'Copied!' : 'Copy'}</span>
  </button>
</div>
