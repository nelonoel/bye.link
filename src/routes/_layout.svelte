<script>
  import { onMount } from 'svelte'
  import path from 'stores/path'
  import user from 'stores/user'

  export let segment = ''

  $: if (segment.match(/^@[a-zA-Z0-9_]{8,38}/)) {
    path.setSlug('user', segment)
  }

  onMount(() => {
    user.initialize()
  })
</script>

<slot />
