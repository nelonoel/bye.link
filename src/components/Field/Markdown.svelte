<script>
  import autosize from 'autosize'
  import marked from 'marked'
  import createDOMPurify from 'dompurify'
  import { onMount } from 'svelte'

  export let value
  export let isEditing
  export let autofocus = true

  let sanitize
  let textarea
  let preview

  onMount(() => {
    sanitize = createDOMPurify(window).sanitize
    autosize(textarea)
  })

  $: if (!isEditing && typeof sanitize === 'function') {
    preview = sanitize(marked(value))
  }

  $: if (textarea && autofocus) {
    setTimeout(() => textarea.focus())
  }
</script>

<style global>
  #markdown {
    @apply .leading-relaxed .text-gray-850;

    h1 {
      @apply .text-5xl .leading-tight;
    }
    h2 {
      @apply .text-4xl .text-gray-750 .leading-tight;
    }
    h3 {
      @apply .text-3xl .font-semibold .text-gray-700 .leading-tight;
    }
    h4 {
      @apply .text-2xl .font-semibold .text-gray-650 .leading-tight;
    }
    h5 {
      @apply .text-xl .font-semibold .text-gray-600 .leading-tight;
    }
    h6 {
      @apply .text-lg .font-semibold .text-gray-550 .leading-tight;
    }
    hr {
      @apply .mx-auto .my-20 .w-10 .border-t-4 .border-gray-200;
    }
    a[href] {
      box-shadow: inset 0 -0.125em 0 theme('colors.blue.400');
      transition: box-shadow 75ms ease, color 75ms ease;
      &:hover {
        @apply .text-blue-750;
        box-shadow: inset 0 -0.5em 0 theme('colors.blue.200');
      }
    }
    blockquote {
      @apply .border-l-4 .border-orange-400 .px-6 .text-xl .text-gray-700;
    }
    p {
      @apply .my-4;
    }
    pre {
      @apply .bg-gray-150 .p-3 .my-5 .rounded;
    }
    code {
      @apply .bg-gray-150 .rounded-sm;
    }
    p,
    blockquote,
    pre {
      & + h1,
      & + h2,
      & + h3,
      & + h4,
      & + h5,
      & + h6 {
        margin-top: 1em;
      }
    }
  }
</style>

{#if value || isEditing}
  <div
    class="w-160 max-w-full mx-auto px-4 pb-3 pt-4"
    class:h-full="{!isEditing && !preview}"
  >
    {#if isEditing}
      <textarea
        bind:this="{textarea}"
        class="bg-transparent font-mono text-gray-850 leading-relaxed w-full
        py-4 placeholder-gray-500"
        placeholder="Start typing.."
        {value}
      ></textarea>
    {:else if preview}
      <section id="markdown" class="text-lg">
        {@html preview}
      </section>
    {:else}
      <div
        class="flex items-center justify-center text-center h-full text-gray-300
        text-lg"
      >
        Loading preview..
      </div>
    {/if}
  </div>
{/if}
