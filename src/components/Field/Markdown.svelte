<script>
  import { onMount, onDestroy } from 'svelte'

  export let color = 'gray'
  export let value
  export let isEditing

  let previousValue
  let container
  let mde
  let textarea
  let preview
  let mounted = false

  $: onMount(() => {
    mde = new SimpleMDE({
      autofocus: true,
      element: textarea,
      placeholder: 'Start typing..',
      shortcuts: {
        toggleBlockquote: "Cmd-'",
        toggleBold: 'Cmd-B',
        cleanBlock: 'Cmd-E',
        toggleHeadingSmaller: 'Cmd-H',
        toggleItalic: 'Cmd-I',
        drawLink: 'Cmd-K',
        toggleUnorderedList: 'Cmd-L',
        togglePreview: null,
        toggleCodeBlock: 'Cmd-Alt-C',
        drawImage: 'Cmd-Alt-I',
        toggleOrderedList: 'Cmd-Alt-L',
        toggleHeadingBigger: 'Shift-Cmd-H',
        toggleSideBySide: null,
        toggleFullScreen: null,
      },
      spellChecker: false,
      status: false,
      styleSelectedText: false,
      toolbar: false,
    })
    mounted = true
  })

  onDestroy(() => {
    if (mounted) {
      mde = null
    }
  })

  $: if (mounted && value !== previousValue) {
    mde.value(value)
    mde.togglePreview()
    preview = container.querySelector('.editor-preview')
    preview.style.display = isEditing ? 'none' : 'block'
    previousValue = value
  }
</script>

<style>
  textarea {
    min-height: theme('spacing.24');
  }
</style>

<div bind:this="{container}" class="w-160 max-w-full mx-auto px-4 pb-3 pt-4">
  <textarea
    bind:this="{textarea}"
    class="bg-transparent border-b-2 border-gray-150 focus:border-{color}-500
    text-gray-750 w-full text-xl pb-3 hidden"
  ></textarea>
</div>
