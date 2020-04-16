<script>
  export let action
  import { path } from 'stores/ui'
  import assets from 'stores/assets'

  import Contact from 'components/Asset/Contact.svelte'
  import Password from 'components/Asset/Password.svelte'
  import Card from 'components/Asset/Card.svelte'
  import Note from 'components/Asset/Note.svelte'
  import Diary from 'components/Asset/Diary.svelte'
  import Dates from 'components/Field/Dates.svelte'

  const views = {
    contacts: Contact,
    passwords: Password,
    cards: Card,
    notes: Note,
    diary: Diary,
  }

  $: asset = $assets.find(a => a._id === $path.item)
</script>

<main class="flex-grow mb-16 mt-4 md:mt-6 xl:mt-8">
  <svelte:component this="{views[$path.asset]}" {asset} {action} />
</main>

{#if action === 'view'}
  <Dates
    lastModified="{asset ? new Date(asset.last_modified) : new Date()}"
    createdAt="{asset ? new Date(asset.created_at) : new Date()}"
  />
{/if}
