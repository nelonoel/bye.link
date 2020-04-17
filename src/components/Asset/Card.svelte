<script>
  import Title from 'components/Field/Title.svelte'
  import Text from 'components/Field/Text.svelte'
  import Card from 'components/Field/Card.svelte'
  import Note from 'components/Field/Note.svelte'

  export let asset = {
    title: '',
    card_number: '',
    card_type: '',
    expiry: '',
    verification_number: '',
    card_holder: '',
    note: '',
  }
  export let action
  const color = 'yellow'
  let isEditing = action === 'edit' || action === 'add' || action === 'entrust'
</script>

<Title
  autofocus="{action === 'edit' || action === 'add'}"
  {isEditing}
  {color}
  label="Title"
  value="{asset.title}"
/>
<Text {isEditing} {color} label="Account Holder" value="{asset.card_holder}" />
<Card {isEditing} {color} card="{{ ...asset }}" />
<Note {isEditing} {color} label="Note" value="{asset.note}" />
