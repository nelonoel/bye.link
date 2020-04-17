<script>
  // import { goto } from '@sapper/app';
  import { list, path } from 'stores/ui'
  import assets from 'stores/assets'
  import _asset from 'meta/asset'
  import ListToggle from 'components/List/Toggle.svelte'

  const MAX_PREVIEW = 3
  const isEditable = true
  const allContacts = $assets
    .filter(a => a.category === 'contacts')
    .reduce((map, c) => {
      map[c._id] = c
      return map
    }, {})

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

  $: isEditing =
    $path.item === 'new' ||
    $path.action === 'edit' ||
    $path.action === 'entrust'
  $: color = _asset($path.asset).color
  $: asset = $assets.find(a => a._id === $path.item)
  $: contacts =
    $path.asset === 'contacts' ? [] : asset.contacts.map(id => allContacts[id])
</script>

<style>
  a[data-primary] {
    min-width: 6.25rem;
  }
</style>

<header class="bg-gray-100 flex flex-shrink-0 justify-between h-16 w-full z-20">
  <div class="flex">
    <ListToggle
      class="hidden sm:flex lg:hidden text-gray-600 hover:text-gray-700 pl-3
      pr-2 py-4"
    />
    {#if isEditable && $path.asset !== 'contacts'}
      <a
        href="{isEditing ? `${$path.user}/${$path.asset}/${$path.item}/entrust` : null}"
        class="flex items-center ml-2 sm:ml-1 lg:ml-3 my-3 text-gray-500
        hover:text-gray-700 transition-color"
      >
        {#each contacts.slice(0, MAX_PREVIEW) as contact}
          <picture
            class="border-4 border-gray-100 rounded-full bg-gray-50
            text-gray-300 relative -mr-2 w-8 h-8"
          >
            <img
              class="absolute object-cover object-center h-full w-full"
              src="{contact.avatar}"
              alt="{contact.name}"
            />
          </picture>
        {/each}
        {#if contacts.length === 0}
          <figure
            class="flex flex-shrink-0 justify-center items-center rounded-full
            bg-gray-50 text-gray-600 relative -mr-2 w-8 h-8 border-4
            border-gray-100 text-sm"
          >
            <svg fill="currentColor" viewBox="0 0 20 20" class="w-4 h-4">
              {#if isEditing}
                <path
                  d="M9 6a3 3 0 11-6 0 3 3 0 016 0zM17 6a3 3 0 11-6 0 3 3 0 016
                  0zM12.93 17c.046-.327.07-.66.07-1a6.97 6.97 0 00-1.5-4.33A5 5
                  0 0119 16v1h-6.07zM6 11a5 5 0 015 5v1H1v-1a5 5 0 015-5z"
                ></path>
              {:else}
                <path
                  fill-rule="evenodd"
                  d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0
                  01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z"
                  clip-rule="evenodd"
                ></path>
              {/if}
            </svg>
          </figure>
        {:else if contacts.length > MAX_PREVIEW}
          <div
            class="flex flex-shrink-0 justify-center items-center rounded-full
            bg-gray-50 text-gray-600 relative -mr-2 w-8 h-8 border-4
            border-gray-100 text-sm"
          >
            +{contacts.length - MAX_PREVIEW}
          </div>
        {/if}

        {#if isEditing}
          <div class="ml-3 truncate hidden sm:block">Edit Access..</div>
        {/if}
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
        <svg
          fill="none"
          stroke="currentColor"
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          viewBox="0 0 24 24"
          class="w-5 h-5 mr-2 hidden sm:block"
        >
          <path
            d="M11 15l-3-3m0 0l3-3m-3 3h8M3 12a9 9 0 1118 0 9 9 0 01-18 0z"
          ></path>
        </svg>
        Cancel
      </a>
      <button
        on:click="{handleSave}"
        data-primary
        class="{`flex whitespace-no-wrap items-center justify-center rounded-full bg-${color}-500 hover:bg-${color}-550 focus:bg-${color}-550 text-white py-2 px-5 ml-2 transition-color`}"
      >
        <svg fill="currentColor" viewBox="0 0 20 20" class="w-5 h-5 mr-2 -ml-1">
          <path
            fill-rule="evenodd"
            d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0
            00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0
            001.414 0l4-4z"
            clip-rule="evenodd"
          ></path>
        </svg>
        Save
      </button>
    {:else if isEditable}
      <a
        href="{`/${$path.user}/${$path.asset}/${$path.item}/delete`}"
        class="flex items-center justify-center text-gray-400 hover:text-red-500
        focus:text-gray-600 py-2 mx-2 transition-color"
      >
        <svg
          fill="none"
          stroke="currentColor"
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          viewBox="0 0 24 24"
          class="w-5 h-5 mr-2"
        >
          <path
            d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5
            7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
          ></path>
        </svg>
        Delete
      </a>
      <a
        href="{`/${$path.user}/${$path.asset}/${$path.item}/edit`}"
        data-primary
        class="{`flex whitespace-no-wrap items-center justify-center rounded-full bg-${color}-500 hover:bg-${color}-550 focus:bg-${color}-550 text-white py-2 px-5 ml-2 transition-color`}"
      >
        <svg fill="currentColor" viewBox="0 0 20 20" class="w-5 h-5 mr-2 -ml-1">
          <path
            fill-rule="evenodd"
            d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-8.707l-3-3a1 1 0 00-1.414
            1.414L10.586 9H7a1 1 0 100 2h3.586l-1.293 1.293a1 1 0 101.414
            1.414l3-3a1 1 0 000-1.414z"
            clip-rule="evenodd"
          ></path>
        </svg>
        <span style="padding: 0 0.15rem">Edit</span>
      </a>
    {/if}
  </div>
</header>
