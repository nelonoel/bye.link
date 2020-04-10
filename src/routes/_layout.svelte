<script>
	import user from '../stores/user'
	import { onMount } from 'svelte'

	onMount(() => {
		user.initialize()
	})
</script>

<slot />
