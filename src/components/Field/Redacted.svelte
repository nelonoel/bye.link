<script>
  import { onMount, onDestroy, beforeUpdate } from 'svelte'
  import ClipboardJS from 'clipboard'

  export let color
  export let value

  let isCopied
  let timeout
  let clipboard
  let copyButton
  let previousValue

  $: if (previousValue !== value) {
    isCopied = false
    clearTimeout(timeout)
    previousValue = value
  }

  onMount(() => {
    clipboard = new ClipboardJS(copyButton, {
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

<div class="flex items-center justify-start -mt-1">
  <div class="flex items-center text-2xl text-gray-750 mr-3">
    <slot />
  </div>
  <button
    bind:this="{copyButton}"
    class="flex items-center bg-gray-150 hover:bg-{color}-200 px-2 py-1
    rounded-full text-gray-650 hover:text-{color}-850 text-sm transition-color"
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
        d="{`M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2${isCopied ? 'm-6 9l2 2 4-4' : ''}`}"
      ></path>
    </svg>
    <span class="text-xs">{isCopied ? 'Copied' : 'Copy'}</span>
  </button>
</div>
