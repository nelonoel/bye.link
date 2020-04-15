<script>
  // import { goto } from '@sapper/app';
  import { list, path } from 'stores/ui'
  import _asset from 'meta/asset'
  import ListToggle from 'components/List/Toggle.svelte'

  const MAX_PREVIEW = 2
  const isEditable = true
  let contacts = []

  const handleCancel = () => {
    if ($path.item === 'new') {
      list.show()
      path.setSlug('item', null)
    }
  }

  const handleSave = () => {
    if ($path.item === 'new') {
      // Save, then go to new URL
    }
  }

  $: isEditing = $path.item === 'new' || $path.action === 'edit'
  $: color = _asset($path.asset).color
</script>

<style>
  [data-primary] {
    min-width: 5em;
  }
</style>

<header
  class="sticky top-0 bg-gray-100 opacity-90 bg-blurred flex justify-between
  h-16 w-full z-20"
>
  <div class="flex">
    <ListToggle
      class="hidden sm:flex lg:hidden text-gray-600 hover:text-gray-700 pl-3
      pr-2 py-4"
    />
    {#if isEditable}
      <a
        href="{`${$path.user}/${$path.asset}/${$path.item}/contacts`}"
        class="flex items-center pl-3 sm:pl-1 lg:pl-3 pr-4 py-4"
      >
        {#each contacts.slice(0, MAX_PREVIEW) as contact}
          <picture class="rounded-full bg-gray-50 text-gray-300 relative -mr-5">
            <svg
              fill="currentColor"
              viewBox="0 0 20 20"
              class="w-8 h-8 transform scale-110"
            >
              <path
                fill-rule="evenodd"
                d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-6-3a2 2 0 11-4 0 2 2 0
                014 0zm-2 4a5 5 0 00-4.546 2.916A5.986 5.986 0 0010 16a5.986
                5.986 0 004.546-2.084A5 5 0 0010 11z"
                clip-rule="evenodd"
              ></path>
            </svg>
          </picture>
        {/each}
        {#if contacts.length > MAX_PREVIEW}
          <div
            class="flex justify-center items-center rounded-full bg-gray-300
            text-gray-50 relative w-8 h-8 border-2 border-gray-100 text-sm"
          >
            +{contacts.length - MAX_PREVIEW}
          </div>
        {:else}
          <div
            class="flex justify-center items-center rounded-full bg-gray-300
            text-gray-50 relative w-8 h-8 border-2 border-gray-100 text-sm"
          >
            <svg fill="currentColor" viewBox="0 0 20 20" class="w-4 h-4">
              <path
                fill-rule="evenodd"
                d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0
                01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z"
                clip-rule="evenodd"
              ></path>
            </svg>
          </div>
        {/if}

        <span class="ml-2 text-gray-600">
          {contacts.length > 0 ? 'Shared' : 'Private'}
        </span>
      </a>
    {/if}
  </div>
  <div class="flex items-center px-3 md:px-4">
    {#if isEditing}
      <a
        href="{`/${$path.user}/${$path.asset}${$path.item === 'new' ? '' : `/${$path.item}`}`}"
        on:click="{handleCancel}"
        class="flex items-center justify-center text-gray-400
        hover:text-gray-600 focus:text-gray-600 py-2 mx-2 transition-color"
      >
        Cancel
      </a>
      <button
        on:click="{handleSave}"
        data-primary
        class="{`flex whitespace-no-wrap items-center justify-center rounded-full bg-${color}-500 hover:bg-${color}-550 focus:bg-${color}-550 text-white py-2 px-5 ml-2 transition-color`}"
      >
        Save
      </button>
    {:else if isEditable}
      <a
        href="{`/${$path.user}/${$path.asset}/${$path.item}/edit`}"
        data-primary
        class="{`flex whitespace-no-wrap items-center justify-center rounded-full bg-${color}-500 hover:bg-${color}-550 focus:bg-${color}-550 text-white py-2 px-5 ml-2 transition-color`}"
      >
        Edit
      </a>
    {/if}
  </div>
</header>
