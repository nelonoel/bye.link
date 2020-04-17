<script>
  export let color = 'gray'
  export let name
  export let src
  export let isEditing

  let img
  let input

  const showPreview = () => {
    const file = input.files[0]
    const reader = new FileReader()

    reader.addEventListener(
      'load',
      () => {
        src = reader.result
      },
      false
    )

    if (/\.(jpe?g|png|gif)$/i.test(file.name)) {
      reader.readAsDataURL(file)
    }
  }
</script>

<style>
  input[type='file'] {
    display: none;
  }
</style>

{#if src || isEditing}
  <div class="w-24 mx-auto mt-4 mb-2 relative">
    <div class="rounded-full bg-gray-50 w-24 h-24 overflow-hidden relative">
      {#if src}
        <img
          class="absolute object-cover object-center h-full w-full"
          bind:this="{img}"
          {src}
          alt="{name}"
        />
      {/if}
    </div>
    {#if isEditing}
      <label
        class="absolute border-4 border-gray-100 bg-{color}-300 hover:bg-{color}-350
        text-{color}-650 hover:text-{color}-700 transition-color w-10 h-10
        rounded-full flex items-center justify-center bottom-0 right-0
        cursor-pointer -mr-2"
        title="Choose photo.."
      >
        <svg
          class="pointer-events-none w-5 h-5"
          fill="currentColor"
          viewBox="0 0 20 20"
        >
          <path
            fill-rule="evenodd"
            d="M4 5a2 2 0 00-2 2v8a2 2 0 002 2h12a2 2 0 002-2V7a2 2 0
            00-2-2h-1.586a1 1 0 01-.707-.293l-1.121-1.121A2 2 0 0011.172
            3H8.828a2 2 0 00-1.414.586L6.293 4.707A1 1 0 015.586 5H4zm6 9a3 3 0
            100-6 3 3 0 000 6z"
            clip-rule="evenodd"
          ></path>
        </svg>
        <input on:change="{showPreview}" bind:this="{input}" type="file" />
      </label>
    {/if}
  </div>
{/if}
