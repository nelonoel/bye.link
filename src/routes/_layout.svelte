<script>
  import { path } from 'stores/ui'
  export let segment

  $: if (typeof segment === 'string' && segment.match(/^@[a-zA-Z0-9_]{8,38}/)) {
    path.setSlug('user', segment)
  }
</script>

<slot />
