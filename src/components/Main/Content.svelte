<script>
  export let action
  import { path } from 'stores/ui'
  import assets from 'stores/assets'

  import Contact from 'components/Asset/Contact.svelte'
  import Password from 'components/Asset/Password.svelte'
  import Card from 'components/Asset/Card.svelte'
  import Note from 'components/Asset/Note.svelte'
  import Diary from 'components/Asset/Diary.svelte'

  const views = {
    contacts: Contact,
    passwords: Password,
    cards: Card,
    notes: Note,
    diary: Diary,
  }

  $: asset = $assets.find(a => a._id === $path.item)
</script>

<main class="w-128 max-w-full mx-auto mb-16 mt-4 px-4">
  <svelte:component this="{views[$path.asset]}" {asset} {action} />
</main>
