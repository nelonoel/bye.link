<script>
  import { list, path, filter } from 'stores/ui'

  export let color
  export let id
  export let icon
  export let title
  export let description
  export let multiline = false

  $: accent = $path.item === id ? color : 'gray'
  $: highlightedTitle =
    $filter.length > 0
      ? title.replace(
          new RegExp($filter, 'ig'),
          match => `<span class="bg-${color}-200">${match}</span>`
        )
      : title
  $: highlightedDescription =
    $filter.length > 0
      ? description
          .substring(0, 75)
          .replace(
            new RegExp($filter, 'ig'),
            match => `<span class="bg-${color}-200">${match}</span>`
          )
      : description
</script>

<li>
  <a
    on:click="{list.hide}"
    class="{`flex p-3 sm:p-4 border-b border-gray-200 transition-colors duration-75
    bg-${accent}-150 active:bg-${accent}-200 focus:bg-${accent}-200 ${multiline ? 'items-start' : 'items-center'}`}"
    href="{`/${$path.user}/${$path.asset}/${id}`}"
  >
    <figure
      class="{`flex flex-shrink-0 items-center justify-center rounded-lg w-8 h-8 transition-colors duration-75
      mr-3 bg-${accent}-300 text-${accent}-600`}"
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
        {@html icon}
      </svg>
    </figure>
    <div class="flex flex-col overflow-hidden">
      <strong class="{`block truncate leading-tight text-${accent}-800`}">
        {@html highlightedTitle}
      </strong>
      <span
        class="{`leading-tight text-${accent}-600 text-sm ${multiline ? 'truncate-2' : 'truncate'}`}"
      >
        {@html highlightedDescription}
      </span>
    </div>
  </a>
</li>
